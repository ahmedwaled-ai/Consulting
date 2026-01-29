import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  BarChart3, BookOpen, Quote, Lightbulb, 
  LineChart, ArrowUpRight, 
Sparkles 
} from 'lucide-react';

export default function Impact() {
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
      
      {/* --- Impact Hero --- */}
      <section className="pt-24 pb-16 text-center border-b border-white/5 bg-black/20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          DEFINING <span className="text-blue-500">VALUE.</span>
        </h1>
        <p className="text-zinc-500 text-sm uppercase tracking-[0.6em] font-bold">Tangible Outcomes & Future Projections</p>
      </section>

      {/* ================= RESULTS SECTION ================= */}
      
      {/* 1. Outcomes & Metrics */}
      <section id="metrics" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-12">
            <BarChart3 className="text-blue-500" size={32} />
            <h2 className="text-5xl font-black tracking-tighter uppercase">Metrics</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Fiscal Efficiency', value: '42%', desc: 'Average increase in capital utilization.' },
              { label: 'Risk Mitigation', value: '98.2%', desc: 'Successful threat neutralization rate.' },
              { label: 'Growth Acceleration', value: '3.5x', desc: 'Average speed to market for new ventures.' }
            ].map((metric, i) => (
              <div key={i} className="p-8 bg-black/60 border border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
                <div className="text-5xl font-black text-blue-500 mb-4 group-hover:scale-110 transition-transform origin-left">{metric.value}</div>
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-300 mb-2">{metric.label}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Case Studies & Stories */}
      <section id="stories" className="min-h-screen flex items-center justify-center px-8 bg-black/40 border-b border-white/5">
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <BookOpen className="text-zinc-500" size={32} />
              <h2 className="text-5xl font-black tracking-tighter uppercase">Case Studies</h2>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-500 hover:text-white hover:border-white transition-all">View Archive</button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Project: Nexus Shift', client: 'Global FinTech', result: 'Seamless market entry into 4 MENA regions.' },
              { title: 'Project: Titan Core', client: 'Logistics Titan', result: '90% reduction in operational friction via AI.' }
            ].map((study, i) => (
              <div key={i} className="relative p-1 bg-linear-to-br from-white/10 to-transparent rounded-4xl">
                <div className="bg-zinc-950 p-10 rounded-[30px] h-full">
                  <div className="text-blue-500 mb-4 font-black text-[10px] uppercase tracking-widest">{study.client}</div>
                  <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                  <p className="text-zinc-400 mb-8">{study.result}</p>
                  <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase cursor-pointer group">
                    Read Intelligence Report <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Quote className="text-blue-500 mx-auto mb-10" size={60} />
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tight mb-12">
            "CID didn't just give us a strategy; they gave us a new way to see the world."
          </h2>
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 rounded-full bg-zinc-800 mb-4" />
             <div className="text-sm font-black uppercase tracking-[0.2em]">Chief Strategy Officer</div>
             <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Fortune 500 Enterprise</div>
          </div>
        </div>
      </section>

      {/* ================= FUTURE SECTION ================= */}
      
      {/* 1. Innovation */}
      <section id="innovation" className="min-h-screen flex items-center justify-center px-8 bg-blue-600/5 border-b border-white/5">
        <div className="max-w-5xl grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Lightbulb className="text-zinc-500 mb-6" size={40} />
            <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Next-Gen <br/> Logic</h2>
            <p className="text-xl text-zinc-400 leading-relaxed italic">
              "We are developing autonomous strategic nodes that predict market shifts before they happen."
            </p>
          </div>
          <div className="space-y-6">
            {['Predictive Modeling', 'Cognitive Automation', 'Quantum Fiscal Strategies'].map((text, i) => (
              <div key={i} className="p-6 border border-white/5 bg-black/40 rounded-2xl flex items-center gap-4">
                <Sparkles className="text-blue-500" size={16} />
                <span className="text-xs font-black uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Visualization */}
      <section id="visual" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <LineChart className="text-zinc-500 mx-auto mb-8" size={48} />
          <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase">Impact Mapping</h2>
          <p className="text-xl text-zinc-400 mb-12">
            Real-time visual data layers that allow executives to see the direct consequences of their decisions.
          </p>
          <div className="w-full h-64 bg-zinc-900/50 border border-white/5 rounded-[40px] flex items-center justify-center overflow-hidden relative">
            {/* تمثيل جرافيك بسيط */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 to-transparent" />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-700">Dynamic Interface Placeholder</span>
          </div>
        </div>
      </section>

    </div>
  );
}