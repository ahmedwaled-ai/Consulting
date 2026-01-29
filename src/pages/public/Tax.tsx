import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp, Shield, Globe } from 'lucide-react';

export default function Tax() {
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
        <TrendingUp className="text-blue-500 mb-4" size={40} />
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase">Tax Optimization</h1>
        <p className="text-zinc-500 uppercase tracking-[0.5em] mt-4 font-bold text-[10px]">Capital Efficiency Node</p>
      </section>

      <section id="risk" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Shield className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Risk Mitigation</h2>
          <p className="text-xl text-zinc-400 italic">Advanced fiscal engineering to minimize liability and safeguard corporate assets.</p>
        </div>
      </section>

      <section id="international" className="min-h-screen flex items-center justify-center px-8 bg-black/40">
        <div className="max-w-4xl text-center">
          <Globe className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Cross-border Tax</h2>
          <p className="text-xl text-zinc-400">Navigating complex international tax treaties with surgical precision and 100% compliance.</p>
        </div>
      </section>
    </div>
  );
}