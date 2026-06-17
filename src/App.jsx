import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
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
  Settings2,
  Volume2,
  Tv
} from 'lucide-react';

import dashboardImg from './assets/tuxshow_dashboard.png';
import diagnosticsImg from './assets/tuxshow_diagnostics.png';
import demoGif from './assets/tuxshow_demo.webp';
import logoImg from './assets/logo.png';

const App = ({ query, variables, data }) => {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <MonitorPlay className="text-blue-500 w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-slate-100">Tux<span className="text-orange-500">Show</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
          <a href="#whats-new" className="hover:text-blue-400 transition-colors">v1.5 Highlights</a>
          <a href="#showcase" className="hover:text-blue-400 transition-colors">Visual Showcase</a>
          <a href="#tech-specs" className="hover:text-blue-400 transition-colors">System Guide</a>
          <a href="/plugin-creator/index.html" className="hover:text-orange-400 transition-colors font-semibold flex items-center gap-1"><Cpu className="w-3.5 h-3.5"/> Plugin Creator</a>
        </div>
        <a
          href="https://github.com/shakacb-lgtm/TuxShow"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-100 rounded-md text-sm font-medium transition-all hover:text-blue-400"
        >
          GitHub Repo
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        <img 
          src={logoImg} 
          alt="TuxShow Logo" 
          className="w-20 h-20 mb-8 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:scale-105 select-none" 
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-blue-900/50 text-blue-400 text-xs font-mono mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <Zap className="w-3.5 h-3.5" />
          <span>v1.5.1 Stable Release</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-tight text-slate-50">
          {tinaData?.pages?.title || (
            <>
              Real-Time GPU-Accelerated <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500">Show Control & WebGL Compositor</span>
            </>
          )}
        </h1>
        
        <div className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          {tinaData?.pages?.body ? (
            <TinaMarkdown content={tinaData.pages.body} />
          ) : (
            <>A robust, open-source timeline logic and media server for live performance. Version 1.5.1 delivers native Linux stability, advanced hardware mapping, mixed-audio recording, and redundant multi-machine synchronization as detailed in <span className="font-mono italic text-blue-400">TuxShow v1.5.1.pdf</span>.</>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a 
            href="https://github.com/shakacb-lgtm/TuxShow/releases/tag/v1.5.1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            Download v1.5.1
          </a>
          <a
            href="https://github.com/shakacb-lgtm/TuxShow/releases/download/v1.5.1/TuxShow.v1.5.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-100 rounded-lg font-semibold text-lg transition-all flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Read Documentation
          </a>
          <a
            href="/plugin-creator/index.html"
            className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-orange-500/50 hover:text-orange-400 text-slate-100 rounded-lg font-semibold text-lg transition-all flex items-center gap-2"
          >
            <Cpu className="w-5 h-5" />
            Plugin Creator
          </a>
        </div>
      </header>

      {/* v1.5.1 Core Additions */}
      <section id="whats-new" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">v1.5.1 Core Additions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
            <Volume2 className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Mixed Audio Exporter</h3>
            <p className="text-sm text-slate-400">Archive both canvas WebGL visual tracks and mixed Web Audio playback streams in WebM. Booth monitors can be muted independently of the recording bus.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
            <Activity className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Diagnostics & Telemetry</h3>
            <p className="text-sm text-slate-400">Real-time settings tab displaying host system metrics, console logs, UDP heartbeats, and TCP staging tunnel state to trace networking issues during live setups.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors">
            <Server className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Multi-Machine Redundancy</h3>
            <p className="text-sm text-slate-400">Fault-tolerant hot-spare syncing. Pair control consoles via UDP heartbeats and TCP tunneling for automatic workspace transfers to bypass theatrical network drops.</p>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section id="showcase" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold text-slate-100 mb-4 text-center">Visual Application Showcase</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Explore the TuxShow v1.5.1 interface. Highly interactive, multi-projection previewing, and complete diagnostic tools built for theater booths.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Screenshots Column */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex-1 flex flex-col justify-center bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden shadow-2xl group hover:border-blue-500/30 transition-all duration-300">
              <img 
                src={dashboardImg} 
                alt="TuxShow Dashboard" 
                className="w-full rounded-xl object-cover hover:scale-[1.01] transition-transform duration-300"
              />
              <span className="text-xs text-slate-500 mt-2 px-2 text-center">TuxShow Main Operator Console Workspace</span>
            </div>
            <div className="flex-1 flex flex-col justify-center bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden shadow-2xl group hover:border-orange-500/30 transition-all duration-300">
              <img 
                src={diagnosticsImg} 
                alt="TuxShow Diagnostics & Logs Tab" 
                className="w-full rounded-xl object-cover hover:scale-[1.01] transition-transform duration-300"
              />
              <span className="text-xs text-slate-500 mt-2 px-2 text-center">Settings Telemetry, Sync, and Diagnostics Panel</span>
            </div>
          </div>

          {/* WebP Animation & Description Column */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex-1 flex flex-col justify-center bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden shadow-2xl group hover:border-emerald-500/30 transition-all duration-300">
              <img 
                src={demoGif} 
                alt="TuxShow Demo Video" 
                className="w-full rounded-xl object-cover"
              />
              <span className="text-xs text-slate-500 mt-2 px-2 text-center">Interactive Tab Previewing and Cue Playback Demo</span>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-800/60 p-6 rounded-2xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Tv className="text-emerald-400 w-5 h-5" />
                Multi-Projector Stage Preview
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Switch between Composite (All) previews, isolated primary monitors, HDMI-1 projectors, or mobile camera feeds directly from the tab bar at the top of the Stage Preview. Facilitates zero-latency calibration of warps, masks, and layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Admin & Environment */}
      <section id="tech-specs" className="py-20 bg-slate-900 border-y border-slate-800 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">IT Administrator & Environment</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            As detailed in <span className="text-blue-400 font-mono italic">TuxShow v1.5.1.pdf</span>, the system architecture has been refactored for maximum stability in mixed-hardware environments.
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
        <p>© 2026 TuxShow. Licensed under GPL. Built for the booth, protected for the show.</p>
      </footer>
    </div>
  );
};

export default App;