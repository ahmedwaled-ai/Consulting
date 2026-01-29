import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function Advisory() {
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
        <Target className="text-blue-500 mb-4" size={40} />
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase">Strategic Advisory</h1>
        <p className="text-zinc-500 uppercase tracking-[0.5em] mt-4 font-bold text-[10px]">Tactical Intelligence Node</p>
      </section>

      <section id="strategy" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Lightbulb className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Market Strategy</h2>
          <p className="text-xl text-zinc-400 italic">High-stakes market positioning designed for industry dominance.</p>
        </div>
      </section>

      <section id="m-a" className="min-h-screen flex items-center justify-center px-8 bg-black/40">
        <div className="max-w-4xl text-center">
          <Users className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">M&A Support</h2>
          <p className="text-xl text-zinc-400">Full-lifecycle support for mergers and acquisitions, from due diligence to integration.</p>
        </div>
      </section>
    </div>
  );
}