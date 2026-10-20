import React, { useState, useEffect, useRef } from 'react';
import {
  PenTool,
  Plus,
  Upload,
  Download,
  Trash2,
  Calendar,
  Layers,
  FileText,
  Clock,
  Sparkles,
  Search,
  BookOpen,
  Filter,
  FileCode,
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Monitor,
  Tablet,
  FolderOpen,
} from 'lucide-react';
import {
  ScratchpadMetadata,
  getAllScratchpads,
  createStandaloneScratchpad,
  deleteScratchpadRecord,
  exportScratchpadBundle,
  importScratchpadBundle,
  generateScratchpadSvg,
  downloadFile,
  idbLoadCanvas,
} from '../utils/scratchpadStorage';
import { Scratchpad } from './Scratchpad';
import { SUBJECT_CONFIGS, SubjectArea } from '../types/exam';

interface ScratchpadHubProps {
  onBackToPortal?: () => void;
  initialOpenPadId?: string;
}

export const ScratchpadHub: React.FC<ScratchpadHubProps> = ({
  onBackToPortal,
  initialOpenPadId,
}) => {
  const [scratchpads, setScratchpads] = useState<ScratchpadMetadata[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'exam_session' | 'standalone'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePad, setActivePad] = useState<ScratchpadMetadata | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [exportMenuPadId, setExportMenuPadId] = useState<string | null>(null);
  const [padToDelete, setPadToDelete] = useState<ScratchpadMetadata | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const refreshList = () => {
    setScratchpads(getAllScratchpads());
  };

  useEffect(() => {
    refreshList();
    const handleUpdate = () => refreshList();
    window.addEventListener('ce_scratchpad_records_updated', handleUpdate);
    window.addEventListener('inkpad_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    const handleMessage = (e: MessageEvent) => {
      if (e.data && (e.data.type === 'INKPAD_NOTEBOOK_SAVED' || e.data.type === 'INKPAD_SAVED')) {
        refreshList();
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('ce_scratchpad_records_updated', handleUpdate);
      window.removeEventListener('inkpad_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (initialOpenPadId) {
      const pad = scratchpads.find((s) => s.id === initialOpenPadId);
      if (pad) {
        setActivePad(pad);
        setIsEditorOpen(true);
      }
    }
  }, [initialOpenPadId, scratchpads]);

  const handleCreateNew = () => {
    const created = createStandaloneScratchpad(newTitle.trim() || undefined);
    setNewTitle('');
    setIsNewModalOpen(false);
    refreshList();
    setActivePad(created);
    setIsEditorOpen(true);
  };

  const handleOpenPad = (pad: ScratchpadMetadata) => {
    setActivePad(pad);
    setIsEditorOpen(true);
  };

  const handleDeleteClick = (pad: ScratchpadMetadata, e: React.MouseEvent) => {
    e.stopPropagation();
    setPadToDelete(pad);
  };

  const handleConfirmDelete = async () => {
    if (!padToDelete) return;
    setIsDeleting(true);
    try {
      await deleteScratchpadRecord(padToDelete.id);
      refreshList();
      if (activePad?.id === padToDelete.id) {
        setIsEditorOpen(false);
        setActivePad(null);
      }
    } finally {
      setIsDeleting(false);
      setPadToDelete(null);
    }
  };

  // Import handler for .cescratch or .json file
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setImportStatus('Importing scratchpad bundle...');
      const text = await file.text();
      const parsed = JSON.parse(text);
      const imported = await importScratchpadBundle(parsed);
      refreshList();
      setImportStatus(`Successfully imported "${imported.title}"!`);
      setTimeout(() => setImportStatus(null), 3000);
      setActivePad(imported);
      setIsEditorOpen(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid scratchpad file';
      setImportStatus(`Import failed: ${msg}`);
      setTimeout(() => setImportStatus(null), 4000);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Export handlers
  const handleExportCescratch = async (pad: ScratchpadMetadata) => {
    const bundle = await exportScratchpadBundle(pad.id);
    if (!bundle) return;
    const jsonStr = JSON.stringify(bundle, null, 2);
    const cleanTitle = pad.title.replace(/[^a-zA-Z0-9_-]/g, '_');
    downloadFile(jsonStr, `${cleanTitle}.cescratch`, 'application/json');
    setExportMenuPadId(null);
  };

  const handleExportPdf = async (pad: ScratchpadMetadata) => {
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: [800, 1100] });
      let hasImage = false;

      // Check if inkpad notebook thumbnail or sheets
      if (pad.thumbnail) {
        doc.addImage(pad.thumbnail, 'JPEG', 0, 0, 800, 1100);
        hasImage = true;
      }

      const prefix = pad.sessionKey || `scratchpad_${pad.id}_`;
      for (let p = 1; p <= pad.totalPages; p++) {
        const dataUrl = await idbLoadCanvas(`${prefix}ce_scratchpad_canvas_page_${p}`);
        if (dataUrl) {
          if (hasImage) doc.addPage([800, 1100], 'p');
          doc.addImage(dataUrl, 'PNG', 0, 0, 800, 1100);
          hasImage = true;
        }
      }

      if (!hasImage) {
        // Draw blank page with title
        doc.setFillColor(pad.paperBgColor || '#06131c');
        doc.rect(0, 0, 800, 1100, 'F');
        doc.setTextColor(56, 189, 248);
        doc.setFontSize(22);
        doc.text(pad.title, 40, 80);
      }

      const cleanTitle = pad.title.replace(/[^a-zA-Z0-9_-]/g, '_');
      doc.save(`${cleanTitle}.pdf`);
    } catch (err) {
      console.error('Failed to export PDF', err);
    }
    setExportMenuPadId(null);
  };

  const handleExportSvg = async (pad: ScratchpadMetadata) => {
    let sheet1Data = pad.thumbnail;
    if (!sheet1Data) {
      const prefix = pad.sessionKey || `scratchpad_${pad.id}_`;
      sheet1Data = (await idbLoadCanvas(`${prefix}ce_scratchpad_canvas_page_1`)) || undefined;
    }
    const svgStr = generateScratchpadSvg(pad, 1, sheet1Data);
    const cleanTitle = pad.title.replace(/[^a-zA-Z0-9_-]/g, '_');
    downloadFile(svgStr, `${cleanTitle}_Sheet1.svg`, 'image/svg+xml');
    setExportMenuPadId(null);
  };

  const handleExportPng = async (pad: ScratchpadMetadata) => {
    let sheet1Data = pad.thumbnail;
    if (!sheet1Data) {
      const prefix = pad.sessionKey || `scratchpad_${pad.id}_`;
      sheet1Data = (await idbLoadCanvas(`${prefix}ce_scratchpad_canvas_page_1`)) || undefined;
    }
    // Check localStorage inkpad
    if (!sheet1Data && pad.id.startsWith('inkpad_')) {
      try {
        const raw = localStorage.getItem('inkpad');
        if (raw) {
          const list = JSON.parse(raw);
          const rawId = pad.id.replace(/^inkpad_/, '');
          const nb = list.find((n: any) => String(n.id) === rawId || n.name === pad.title);
          if (nb && nb.thumbnail) {
            sheet1Data = nb.thumbnail;
          }
        }
      } catch {}
    }
    if (!sheet1Data) {
      // Fallback: generate a styled canvas preview
      const c = document.createElement('canvas');
      c.width = 800;
      c.height = 1100;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = pad.paperBgColor || '#06131c';
        ctx.fillRect(0, 0, 800, 1100);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 24px sans-serif';
        ctx.fillText(pad.title, 40, 60);
        sheet1Data = c.toDataURL('image/png');
      }
    }
    if (sheet1Data) {
      const cleanTitle = pad.title.replace(/[^a-zA-Z0-9_-]/g, '_');
      const a = document.createElement('a');
      a.download = `${cleanTitle}_Sheet1_${pad.dpi || 600}DPI.png`;
      a.href = sheet1Data;
      a.click();
    }
    setExportMenuPadId(null);
  };

  const filteredPads = scratchpads.filter((pad) => {
    if (activeTab !== 'all' && pad.type !== activeTab) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = pad.title.toLowerCase().includes(q);
      const matchSubject = pad.subject?.toLowerCase().includes(q);
      const matchNotes = pad.notesText?.toLowerCase().includes(q);
      return matchTitle || matchSubject || matchNotes;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Hidden file input for .cescratch upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".cescratch,.json"
        className="hidden"
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                600+ DPI Precision Engine
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                <Tablet className="w-3 h-3" />
                <span>Cross-Device & Tablet Ready</span>
              </span>
            </div>
            <h1 className="font-arnie text-2xl sm:text-3xl font-bold text-white tracking-wide flex items-center space-x-3">
              <PenTool className="w-8 h-8 text-cyan-400" />
              <span>Scratchpad Hub & Rough Sheets</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Archived calculation sheets from exam sessions, standalone engineering sketchbooks, formula notes, and universal files for tablets and third-party note apps.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-sm hover:text-white"
              title="Import an existing .cescratch or .json file from another device or tablet"
            >
              <Upload className="w-4 h-4 text-cyan-400" />
              <span>Import File (.cescratch)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const pad = createStandaloneScratchpad('CE Board Inkpad');
                refreshList();
                setActivePad(pad);
                setIsEditorOpen(true);
              }}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-cyan-500/25 cursor-pointer hover:scale-105"
            >
              <PenTool className="w-4 h-4" />
              <span>Open Inkpad Studio</span>
            </button>
          </div>
        </div>

        {/* Import Banner Status */}
        {importStatus && (
          <div className="mt-4 p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-xs font-mono text-cyan-200 flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{importStatus}</span>
          </div>
        )}
      </div>

      {/* Search & Tabs Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
        {/* Tabs */}
        <div className="flex items-center space-x-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Sheets ({scratchpads.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('exam_session')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'exam_session'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Exam Sessions ({scratchpads.filter((p) => p.type === 'exam_session').length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('standalone')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'standalone'
                ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Custom Notebooks ({scratchpads.filter((p) => p.type === 'standalone').length})
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sheets, notes, subjects..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
          />
        </div>
      </div>

      {/* Scratchpad Grid */}
      {filteredPads.length === 0 ? (
        <div className="bg-slate-900/50 border border-dashed border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-800/80 text-cyan-400 flex items-center justify-center mx-auto border border-slate-700">
            <FolderOpen className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="font-arnie text-lg font-bold text-slate-200">No Scratchpads Found</h3>
            <p className="text-slate-400 text-xs max-w-md mx-auto">
              {searchQuery
                ? 'No sheets matched your search query. Try clearing the filter.'
                : 'Take an exam session to automatically save rough calculation sheets, or click "New Scratchpad" to start freeform engineering notes!'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsNewModalOpen(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 cursor-pointer hover:bg-cyan-400"
          >
            <Plus className="w-4 h-4" />
            <span>Create First Notebook</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPads.map((pad) => {
            const subjectCfg = pad.subject ? SUBJECT_CONFIGS[pad.subject] : null;

            return (
              <div
                key={pad.id}
                onClick={() => handleOpenPad(pad)}
                className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all cursor-pointer flex flex-col"
              >
                {/* Top Preview Canvas / Texture Box */}
                <div
                  className="w-full h-40 relative flex items-center justify-center overflow-hidden border-b border-slate-800"
                  style={{ backgroundColor: pad.paperBgColor || '#06131c' }}
                >
                  {pad.thumbnail ? (
                    <img
                      src={pad.thumbnail}
                      alt={pad.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-1 text-slate-500">
                      <PenTool className="w-8 h-8 opacity-40 text-cyan-400" />
                      <span className="text-[10px] font-mono opacity-60">Sheet 1 Ready</span>
                    </div>
                  )}

                  {/* Badges Over Thumbnail */}
                  <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5">
                    {pad.type === 'exam_session' ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-400 text-slate-950 shadow-sm">
                        {pad.subject || 'Exam'} Record
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-400 text-slate-950 shadow-sm">
                        Custom Notebook
                      </span>
                    )}

                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/80 text-cyan-300 border border-slate-700/80 backdrop-blur-sm">
                      {pad.dpi || 600} DPI
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/80 text-slate-300 border border-slate-700/80 flex items-center space-x-1 backdrop-blur-sm">
                      <Layers className="w-2.5 h-2.5 text-cyan-400" />
                      <span>{pad.totalPages || 5} Sheets</span>
                    </span>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-arnie text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {pad.title}
                      </h4>
                    </div>

                    {pad.notesText && (
                      <p className="text-[11px] font-mono text-slate-400 line-clamp-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                        {pad.notesText}
                      </p>
                    )}
                  </div>

                  {/* Metadata and Actions */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center space-x-1 text-slate-500 font-mono text-[10px]">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(pad.updatedAt).toLocaleDateString()}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1.5 relative">
                      {/* Export Dropdown Trigger */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExportMenuPadId(exportMenuPadId === pad.id ? null : pad.id);
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Download Scratchpad (.cescratch / .svg / .png)"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>

                      {/* Export Menu Popover */}
                      {exportMenuPadId === pad.id && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="absolute right-0 bottom-full mb-2 w-56 p-2 rounded-xl bg-slate-950 border border-slate-700 shadow-2xl z-40 text-xs space-y-1 animate-in fade-in zoom-in-95 backdrop-blur-xl"
                        >
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 border-b border-slate-800">
                            Download Options
                          </div>

                          <button
                            type="button"
                            onClick={() => handleExportPdf(pad)}
                            className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                          >
                            <FileText className="w-3.5 h-3.5 text-rose-400" />
                            <div>
                              <div className="font-semibold text-[11px]">.pdf (Document / All Pages)</div>
                              <div className="text-[9px] text-slate-500">Universal multi-page PDF document</div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleExportCescratch(pad)}
                            className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                          >
                            <Tablet className="w-3.5 h-3.5 text-cyan-400" />
                            <div>
                              <div className="font-semibold text-[11px]">.cescratch (Universal)</div>
                              <div className="text-[9px] text-slate-500">All sheets + notes, cross-device</div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleExportSvg(pad)}
                            className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                          >
                            <FileCode className="w-3.5 h-3.5 text-amber-400" />
                            <div>
                              <div className="font-semibold text-[11px]">.svg (Vector / Tablet)</div>
                              <div className="text-[9px] text-slate-500">GoodNotes, Notability, Procreate</div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleExportPng(pad)}
                            className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                          >
                            <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                            <div>
                              <div className="font-semibold text-[11px]">.png (600+ DPI Archival)</div>
                              <div className="text-[9px] text-slate-500">Ultra-HD image export</div>
                            </div>
                          </button>
                        </div>
                      )}

                      {/* Delete Button */}
                      <button
                        type="button"
                        onClick={(e) => handleDeleteClick(pad, e)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                        title="Delete this scratchpad"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Open Button */}
                      <span className="flex items-center text-cyan-400 font-bold group-hover:translate-x-1 transition-transform ml-1">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal: Create New Scratchpad */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-arnie text-lg font-bold text-white">Create New Scratchpad</h3>
                <p className="text-xs text-slate-400">Standalone 5-sheet rough calculation notebook</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300">
                Scratchpad / Notebook Title:
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Geotechnical Slope Stability Scratchpad"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCreateNew();
                }}
              />
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setIsNewModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreateNew}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                Create & Open
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Confirm Deletion (Replaces window.confirm for iframe reliability) */}
      {padToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-arnie text-lg font-bold text-white">Delete Scratchpad</h3>
                <p className="text-xs text-slate-400">Permanently remove this notebook and rough sheets</p>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <div className="text-xs font-semibold text-slate-200">
                Are you sure you want to delete <span className="text-cyan-300 font-bold">"{padToDelete.title}"</span>?
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                This will permanently remove all sheets, ink strokes, and formula rough notes from both Scratchpad Hub and Inkpad Studio. This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setPadToDelete(null)}
                disabled={isDeleting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-lg shadow-rose-600/30 cursor-pointer flex items-center space-x-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isDeleting ? 'Deleting...' : 'Delete Permanently'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Active Scratchpad Editor */}
      {isEditorOpen && activePad && (
        <Scratchpad
          isOpen={isEditorOpen}
          onClose={() => {
            setIsEditorOpen(false);
            refreshList();
          }}
          isDocked={false}
          storageKeyPrefix={activePad.sessionKey || `scratchpad_${activePad.id}_`}
          title={activePad.title}
          documentId={activePad.id}
          onSaveBundle={() => refreshList()}
        />
      )}
    </div>
  );
};
