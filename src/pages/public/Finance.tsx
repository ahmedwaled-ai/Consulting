import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FileBarChart, Cpu, Globe2, Zap } from 'lucide-react';

export default function Finance() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-12">
      <section className="h-[40vh] flex flex-col justify-center items-center border-b border-white/5 bg-black/40 text-center px-6">
        <FileBarChart className="text-blue-500 mb-4" size={40} />
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase">Core Finance</h1>
        <p className="text-zinc-500 uppercase tracking-[0.5em] mt-4 font-bold text-[10px]">Fiscal Infrastructure Node</p>
      </section>

      <section id="digital" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Cpu className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Digital Transformation</h2>
          <p className="text-xl text-zinc-400 leading-relaxed italic">Automating complex ledgers with AI-driven nodes for error-free financial management.</p>
        </div>
      </section>

      <section id="reporting" className="min-h-screen flex items-center justify-center px-8 bg-black/40 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Globe2 className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Global Reporting</h2>
          <p className="text-xl text-zinc-400">Consolidated financial intelligence delivered in real-time across all global subsidiaries.</p>
        </div>
      </section>

      <section id="audit" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <Zap className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Audit Automation</h2>
          <p className="text-xl text-zinc-400">Continuous verification protocols that eliminate the need for traditional year-end friction.</p>
        </div>
      </section>
    </div>
  );
}