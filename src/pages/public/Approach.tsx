import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layers, MessageSquare, Zap, ShieldCheck, FileBarChart, ArrowDown } from 'lucide-react';

export default function Approach() {
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
    <div className="min-h-screen font-sans">
      
      {/* --- Header Section --- 
          Bg: Dark (#222222) | Text: Light Beige (#FAF3E1) | Accent: Orange (#FA8112)
      */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-[#222222] px-6 relative">
        <div className="max-w-4xl space-y-6">
          <p className="text-[#FA8112] text-sm md:text-base uppercase tracking-[0.4em] font-bold animate-pulse">
            Operational Excellence
          </p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-[#FAF3E1] uppercase mb-4">
            Our <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FA8112] to-[#F5E7C6]">
              Approach
            </span>
          </h1>
          <p className="text-[#F5E7C6] text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Precision in execution. Transparency in engagement. Excellence in delivery.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce text-[#FA8112]">
          <ArrowDown size={32} />
        </div>
      </section>

      {/* 1. Methodology
          Bg: Light Beige (#FAF3E1) | Text: Dark (#222222)
      */}
      <section id="methodology" className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#FAF3E1]">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="w-20 h-20 bg-[#F5E7C6] rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Layers className="text-[#FA8112]" size={40} />
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-[#222222] mb-6 tracking-tight uppercase">
               Methodology
             </h2>
             <div className="h-1 w-24 bg-[#FA8112] mb-8"></div>
             <p className="text-xl text-[#222222]/80 leading-relaxed font-medium">
               "A 4-stage proprietary framework designed for surgical precision in execution."
             </p>
             <p className="mt-6 text-[#222222]/60">
               We don't guess. We deploy a battle-tested structure that minimizes risk and maximizes output velocity.
             </p>
          </div>
          {/* Abstract Visual */}
          <div className="order-1 md:order-2 h-full min-h-100 bg-[#F5E7C6] rounded-3xl border-4 border-[#222222] relative overflow-hidden flex items-center justify-center">
             <span className="text-[#222222]/10 text-9xl font-black rotate-[-15deg]">01</span>
          </div>
        </div>
      </section>

      {/* 2. Engagement
          Bg: Dark (#222222) | Text: Light Beige (#FAF3E1)
      */}
      <section id="engagement" className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#222222] border-t border-[#FA8112]/20">
        <div className="max-w-4xl text-center">
          <div className="inline-block p-4 border border-[#FA8112] rounded-full mb-8 hover:bg-[#FA8112] hover:text-[#222222] transition-colors duration-500 group cursor-default">
            <MessageSquare className="text-[#FA8112] group-hover:text-[#222222]" size={48} />
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase text-[#FAF3E1]">
            Engagement
          </h2>
          <p className="text-2xl md:text-3xl text-[#F5E7C6] font-light leading-snug">
            Ensuring full stakeholder alignment through <span className="text-[#FA8112] font-bold underline decoration-2 underline-offset-4">radical transparency</span> protocols.
          </p>
        </div>
      </section>

      {/* 3. Delivery
          Bg: Medium Beige (#F5E7C6) | Text: Dark (#222222)
          Use this color to bridge the gap between light and dark sections.
      */}
      <section id="delivery" className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#F5E7C6]">
        <div className="max-w-6xl w-full">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-[#222222] pb-6">
              <h2 className="text-6xl md:text-8xl font-black text-[#222222] uppercase">Delivery</h2>
              <Zap className="text-[#FA8112] mb-4 md:mb-0" size={64} fill="#FA8112" />
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FAF3E1] p-10 border-l-8 border-[#FA8112] shadow-xl">
                 <h3 className="text-2xl font-bold text-[#222222] mb-4">Speed</h3>
                 <p className="text-[#222222]/70">Turning strategic blueprints into reality with unmatched velocity.</p>
              </div>
              <div className="bg-[#FAF3E1] p-10 border-l-8 border-[#222222] shadow-xl">
                 <h3 className="text-2xl font-bold text-[#222222] mb-4">Precision</h3>
                 <p className="text-[#222222]/70">Every milestone is hit with mathematical accuracy.</p>
              </div>
              <div className="bg-[#FAF3E1] p-10 border-l-8 border-[#FA8112] shadow-xl">
                 <h3 className="text-2xl font-bold text-[#222222] mb-4">Impact</h3>
                 <p className="text-[#222222]/70">Focusing on high-leverage activities that move the needle.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Quality
          Bg: Dark (#222222) | Accent Style
      */}
      <section id="quality" className="min-h-screen flex items-center px-8 py-20 bg-[#222222] relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#222222] border-l border-[#FA8112]/20 hidden md:block"></div>
        
        <div className="max-w-5xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-black text-[#FAF3E1] mb-6 uppercase tracking-tight">Quality <br/>Control</h2>
            <p className="text-xl text-[#F5E7C6] mb-8 leading-relaxed">
              Uncompromising standards. Every deliverable is audited for maximum precision before it ever reaches your desk.
            </p>
            <ul className="space-y-4">
               {['Zero-Defect Policy', 'Peer Review Systems', 'Automated Audits'].map((item, i) => (
                  <li key={i} className="flex items-center text-[#FAF3E1] text-lg font-bold">
                     <span className="w-3 h-3 bg-[#FA8112] mr-4"></span>
                     {item}
                  </li>
               ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <ShieldCheck className="text-[#FA8112] animate-pulse" size={200} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* 5. Reporting
          Bg: Light Beige (#FAF3E1) | Footer style
      */}
      <section id="reporting" className="min-h-[80vh] flex flex-col items-center justify-center px-8 py-20 bg-[#FAF3E1]">
        <div className="max-w-4xl text-center">
          <FileBarChart className="text-[#222222] mb-8 mx-auto hover:text-[#FA8112] transition-colors duration-300 cursor-pointer" size={64} />
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase text-[#222222]">
            Reporting & Insights
          </h2>
          <p className="text-2xl text-[#222222]/70 max-w-2xl mx-auto mb-12">
            Data-driven insights that empower decision-makers with <span className="bg-[#F5E7C6] px-2">real-time clarity</span>.
          </p>
          
          <button className="px-12 py-5 bg-[#222222] text-[#FA8112] text-lg font-bold uppercase tracking-widest hover:bg-[#FA8112] hover:text-[#222222] transition-all duration-300 shadow-2xl">
            Download Sample Report
          </button>
        </div>
      </section>

    </div>
  );
}