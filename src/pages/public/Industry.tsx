import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FileBarChart, TrendingUp, SearchCheck, Target, 
  ShieldCheck, Cpu, Globe2, Briefcase, ArrowRight
} from 'lucide-react';

export default function Industry() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-12">
      
      {/* --- Intro Section --- */}
      <section className="pt-24 pb-16 text-center border-b border-white/5 bg-black/20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          <span className="text-blue-500">INDUSTRY</span> VERTICALS
        </h1>
        <p className="text-zinc-500 text-sm uppercase tracking-[0.6em] font-bold">Integrated Solutions for Global Markets</p>
      </section>

      {/* ================= PACKAGES SECTION ================= */}
      <div className="py-10 bg-zinc-900/30 text-center border-b border-white/5">
        <h3 className="text-xs font-black tracking-[0.3em] text-zinc-500 uppercase">Strategic Packages</h3>
      </div>

      {/* 1. Core Finance & Accounting */}
      <section id="finance" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5 relative">
        <div className="max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <div className="p-12 bg-black/60 border border-white/5 rounded-[40px] shadow-2xl">
            <FileBarChart className="text-blue-500 mb-6" size={48} />
            <h2 className="text-5xl font-black mb-6 tracking-tighter">CORE FINANCE</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Managing the heartbeat of your enterprise. From full-scale ledger management to complex consolidated financial statements, we ensure absolute accuracy.
            </p>
          </div>
          <div className="space-y-4">
             {['Ledger Management', 'Cash Flow Optimization', 'Financial Consolidation'].map((item, i) => (
               <div key={i} className="flex items-center gap-4 text-zinc-500 font-bold uppercase text-[10px] tracking-widest border-l-2 border-blue-500/30 pl-4 py-2">
                 {item}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. Tax Optimization */}
      <section id="tax" className="min-h-screen flex items-center justify-center px-8 bg-black/40 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <TrendingUp className="text-blue-500 mb-8 mx-auto" size={48} />
          <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase">Tax Optimization</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto italic">
            "Advanced fiscal engineering to minimize liability and maximize global capital efficiency."
          </p>
        </div>
      </section>

      {/* 3. Audit & Assurance */}
      <section id="audit" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-5xl flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
             <h2 className="text-5xl font-black mb-6 tracking-tighter">AUDIT & <br/> ASSURANCE</h2>
             <p className="text-xl text-zinc-400">Beyond compliance. We provide deep-dive forensics to ensure your operations are bulletproof.</p>
          </div>
          <div className="flex-1 w-full aspect-video bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center">
             <SearchCheck size={80} className="text-zinc-800" />
          </div>
        </div>
      </section>

      {/* 4. Strategic Advisory */}
      <section id="advisory" className="min-h-screen flex items-center justify-center px-8 bg-black/40 border-b border-white/5">
        <div className="max-w-4xl">
          <Target className="text-blue-500 mb-8" size={48} />
          <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase">Advisory</h2>
          <p className="text-2xl text-zinc-300 leading-tight">Mastering the art of the long game. We provide the tactical intelligence needed for high-stakes mergers and acquisitions.</p>
        </div>
      </section>

      {/* 5. Growth Structuring */}
      <section id="growth" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <ShieldCheck className="text-blue-500 mb-8 mx-auto" size={48} />
          <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase">Growth</h2>
          <p className="text-xl text-zinc-400">Structuring your enterprise for the next billion. Scalable frameworks for international expansion.</p>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <div className="py-20 bg-blue-600/5 border-y border-blue-500/10 text-center">
        <h3 className="text-4xl font-black tracking-widest text-blue-500">SPECIALIZED SERVICES</h3>
      </div>

      {/* 1. Digital Transformation */}
      <section id="digital" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-5xl grid md:grid-cols-2 gap-20">
          <div>
            <Cpu className="text-zinc-500 mb-6" size={40} />
            <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Digital <br/> Transformation</h2>
            <p className="text-xl text-zinc-400 italic">Bridging legacy systems with future-ready AI integration.</p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
             <p className="text-zinc-500 text-sm">We don't just add tech; we rebuild the DNA of your operational workflow for the digital age.</p>
             <button className="flex items-center gap-2 text-blue-500 font-black text-[10px] tracking-widest mt-8 uppercase">Deploy Protocol <ArrowRight size={14}/></button>
          </div>
        </div>
      </section>

      {/* 2. Market Entry */}
      <section id="entry" className="min-h-screen flex items-center justify-center px-8 bg-black/40 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Globe2 className="text-zinc-500 mb-8 mx-auto" size={48} />
          <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase">Market Entry</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">Intelligence-led expansion into emerging and frontier markets. We mitigate the unknown.</p>
        </div>
      </section>

      {/* 3. Risk Management */}
      <section id="risk" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-6">
            <Briefcase className="text-zinc-500" size={60} />
            <div>
              <h2 className="text-6xl font-black mb-2 tracking-tighter uppercase">Risk Management</h2>
              <p className="text-xl text-zinc-400 italic">"Neutralizing threats before they manifest."</p>
            </div>
          </div>
          <div className="mt-12 p-8 border-l border-blue-500/50 bg-blue-500/5">
             <p className="text-lg text-zinc-300">Our predictive risk models analyze geopolitical, fiscal, and operational variables to safeguard your assets.</p>
          </div>
        </div>
      </section>

    </div>
  );
}