import React from 'react';
import { 
  Play, 
  MonitorPlay, 
  Zap, 
  BookOpen, 
  Activity, 
  ShieldAlert, 
  Server, 
  Layers, 
  Cpu, 
  Terminal, 
  Lock, 
  Smartphone, 
  Gamepad2, 
  Camera, 
  FileText,
  Radio,
  Settings2
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <MonitorPlay className="text-blue-500 w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-slate-100">Tux<span className="text-orange-500">Show</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
          <a href="#whats-new" className="hover:text-blue-400 transition-colors">v1.4 Highlights</a>
          <a href="#tech-specs" className="hover:text-blue-400 transition-colors">System Guide</a>
        </div>
        <button className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-100 rounded-md text-sm font-medium transition-all hover:text-blue-400">
          GitHub Repo
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-blue-900/50 text-blue-400 text-xs font-mono mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <Zap className="w-3.5 h-3.5" />
          <span>v1.4.0 Stable Release</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-tight text-slate-50">
          Real-Time GPU-Accelerated <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500">Show Control & WebGL Compositor</span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          A robust, open-source timeline logic and media server for live performance. Version 1.4.0 delivers native Linux stability, advanced hardware mapping, and improved booth security as detailed in <span className="font-mono italic text-blue-400">TuxShow v1.4.0.pdf</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Download v1.4.0
          </button>
          <button className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-100 rounded-lg font-semibold text-lg transition-all flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Read Documentation
          </button>
        </div>
      </header>

      {/* v1.4.0 Core Additions */}
      <section id="whats-new" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">v1.4.0 Core Additions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
            <Activity className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-100 mb-2">System Profiler</h3>
            <p className="text-sm text-slate-400">Automatic boot-time hardware scanning. Locks performance into High (60fps), Balanced (30fps), or Basic (15fps) tiers based on thermal capacity.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
            <div className="flex gap-4 mb-4">
              <ShieldAlert className="w-8 h-8 text-red-500" />
              <div className="w-8 h-8 bg-red-900/30 rounded-full flex items-center justify-center border border-red-800">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Emergency Panic & Record</h3>
            <p className="text-sm text-slate-400">New hard-wired emergency 1.5s fade-out Panic button and native WebM canvas recording for show archiving.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors">
            <Server className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Expanded PWA Ecosystem</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-300"><Layers className="w-4 h-4 text-slate-500"/> Stage Manager Deck</div>
              <div className="flex items-center gap-2 text-sm text-slate-300"><Gamepad2 className="w-4 h-4 text-slate-500"/> Game Show Buzzer</div>
              <div className="flex items-center gap-2 text-sm text-slate-300"><Camera className="w-4 h-4 text-slate-500"/> Mobile Cam (WebRTC)</div>
              <div className="flex items-center gap-2 text-sm text-slate-300"><FileText className="w-4 h-4 text-slate-500"/> Live Script Sync</div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Admin & Environment */}
      <section id="tech-specs" className="py-20 bg-slate-900 border-y border-slate-800 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">IT Administrator & Environment</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            As detailed in <span className="text-blue-400 font-mono italic">TuxShow v1.4.0.pdf</span>, the system architecture has been refactored for maximum stability in mixed-hardware environments.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 font-mono text-sm">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="text-blue-400 font-semibold mb-4 flex items-center gap-2"><Settings2 className="w-4 h-4"/> Windows / WSLg</h4>
              <p className="text-slate-400 mb-4">Run TuxShow on Windows via WSLg. GPU pass-through ensures zero-latency projection output.</p>
              <code className="text-emerald-400 bg-slate-900 p-2 rounded block">wsl --install</code>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="text-orange-400 font-semibold mb-4 flex items-center gap-2"><Lock className="w-4 h-4"/> Security Gateway</h4>
              <p className="text-slate-400">All network PWA traffic is guarded by a Security PIN gateway. Unauthorized access results in immediate HTTP 401 blocks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-slate-600">
        <p>© 2026 TuxShow. Licensed under MIT. Built for the booth, protected for the show.</p>
      </footer>
    </div>
  );
};

export default App;