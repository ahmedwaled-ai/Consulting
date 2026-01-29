import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchCheck, Briefcase, Database } from 'lucide-react';

export default function Audit() {
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
        <SearchCheck className="text-blue-500 mb-4" size={40} />
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase">Audit & Assurance</h1>
        <p className="text-zinc-500 uppercase tracking-[0.5em] mt-4 font-bold text-[10px]">Operational Integrity Node</p>
      </section>

      <section id="legal" className="min-h-screen flex items-center justify-center px-8 border-b border-white/5">
        <div className="max-w-4xl text-center">
          <Briefcase className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Legal Compliance</h2>
          <p className="text-xl text-zinc-400 italic">Bulletproof auditing that goes beyond standard regulation into deep operational assurance.</p>
        </div>
      </section>

      <section id="forensic" className="min-h-screen flex items-center justify-center px-8 bg-black/40">
        <div className="max-w-4xl text-center">
          <Database className="text-blue-500 mx-auto mb-8" size={48} />
          <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Forensic Data</h2>
          <p className="text-xl text-zinc-400">Utilizing big-data forensics to identify and neutralize internal and external fiscal threats.</p>
        </div>
      </section>
    </div>
  );
}