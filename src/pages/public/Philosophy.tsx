import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Target, Star, Eye, Flag, Scale, Anchor, Users, Minus } from 'lucide-react';

export default function Philosophy() {
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
    <div className="min-h-screen font-sans bg-[#313647] text-[#FFF8D4]">
      
      {/* --- Header --- 
          Bg: Navy (#313647) | Text: Cream (#FFF8D4) | Accent: Green (#A3B087)
      */}
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-6 border-b border-[#A3B087]/20">
        <span className="text-[#A3B087] font-bold tracking-[0.5em] uppercase mb-6 text-sm md:text-base animate-pulse">
          The CID Core Existence
        </span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase text-[#FFF8D4]">
          Philo<span className="text-[#435663]">sophy</span>.
        </h1>
        <div className="w-24 h-1 bg-[#A3B087] mb-8"></div>
        <p className="text-[#FFF8D4]/60 text-xl md:text-2xl max-w-3xl font-light">
          The principles that guide our intelligence, our structure, and our future.
        </p>
      </section>

      {/* 1. Purpose
          Bg: Cream (#FFF8D4) | Text: Navy (#313647)
          Style: Clean, High Contrast
      */}
      <section id="purpose" className="min-h-screen flex items-center justify-center px-8 bg-[#FFF8D4] text-[#313647]">
        <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Target className="text-[#A3B087] absolute -top-10 -left-10 opacity-20" size={200} />
            <Target className="text-[#313647] relative z-10" size={64} />
            <h2 className="text-7xl font-black mt-6 mb-6 tracking-tighter uppercase">Purpose</h2>
          </div>
          <div className="border-l-4 border-[#313647] pl-8">
            <p className="text-3xl font-bold leading-tight">
              To build the <span className="text-[#435663]">infrastructure</span> of future intelligence and organizational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Values
          Bg: Navy (#313647) | Text: Cream (#FFF8D4)
          Style: Grid Cards
      */}
      <section id="values" className="min-h-screen flex items-center justify-center px-8 bg-[#313647]">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <Star className="text-[#A3B087] mb-6 mx-auto" size={48} />
            <h2 className="text-6xl font-black tracking-tighter uppercase text-[#FFF8D4]">Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {['Integrity', 'Precision', 'Decisive Action'].map((val, i) => (
               <div key={i} className="group p-10 border border-[#435663] hover:bg-[#435663] transition-colors duration-500 cursor-default">
                  <span className="text-4xl font-black text-[#A3B087] mb-4 block">0{i+1}</span>
                  <h3 className="text-2xl font-bold text-[#FFF8D4] uppercase mb-2">{val}</h3>
                  <p className="text-[#FFF8D4]/50 group-hover:text-[#FFF8D4] transition-colors">
                    Non-negotiable pillars of our operation.
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Vision
          Bg: Slate (#435663) | Text: Cream (#FFF8D4)
          Style: Broad, Horizon-like
      */}
      <section id="vision" className="min-h-[80vh] flex items-center justify-center px-8 bg-[#435663] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <Eye size={800} strokeWidth={0.5} className="text-[#000000] -translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">The Vision</h2>
          <p className="text-3xl md:text-4xl text-[#FFF8D4] leading-normal font-serif italic">
            "To be the global standard for strategic execution and AI-human synergy."
          </p>
        </div>
      </section>

      {/* 4. Mission
          Bg: Green (#A3B087) | Text: Navy (#313647)
          Style: Action Oriented
      */}
      <section id="mission" className="min-h-screen flex items-center justify-center px-8 bg-[#A3B087] text-[#313647]">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-start justify-between">
          <div className="mb-12 md:mb-0">
             <Flag className="mb-6" size={64} />
             <h2 className="text-8xl font-black tracking-tighter uppercase">Mission</h2>
          </div>
          <div className="md:w-1/2 space-y-8">
             <p className="text-3xl font-bold leading-snug border-b-2 border-[#313647] pb-8">
               Empowering leaders with the tools and intelligence to conquer complexity.
             </p>
             <div className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><Minus /> Tools</div>
                <div className="flex items-center gap-2"><Minus /> Intelligence</div>
                <div className="flex items-center gap-2"><Minus /> Strategy</div>
                <div className="flex items-center gap-2"><Minus /> Complexity</div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Ethics & Independence Combined
          Bg: Navy (#313647) | Text: Cream (#FFF8D4)
          Style: Split Screen / Compare
      */}
      <section className="min-h-screen flex flex-col md:flex-row bg-[#313647]">
         {/* Ethics Side */}
         <div id="ethics" className="flex-1 flex flex-col justify-center p-12 md:p-20 border-b md:border-b-0 md:border-r border-[#435663]">
            <Scale className="text-[#A3B087] mb-8" size={48} />
            <h2 className="text-5xl font-black mb-6 uppercase text-[#FFF8D4]">Ethics</h2>
            <p className="text-xl text-[#FFF8D4]/70 leading-relaxed">
               Ethics is not a checkbox; it is the <span className="text-[#A3B087] font-bold">foundation code</span> of every algorithm we deploy. We adhere to truth before profit.
            </p>
         </div>

         {/* Independence Side */}
         <div id="independence" className="flex-1 flex flex-col justify-center p-12 md:p-20">
            <Anchor className="text-[#A3B087] mb-8" size={48} />
            <h2 className="text-5xl font-black mb-6 uppercase text-[#FFF8D4]">Independence</h2>
            <p className="text-xl text-[#FFF8D4]/70 leading-relaxed">
               Uncompromised counsel. We maintain absolute objectivity to ensure that every strategic engagement serves the <span className="text-[#A3B087] font-bold">mission</span>, not the politics.
            </p>
         </div>
      </section>

      {/* 7. Partnership
          Bg: Cream (#FFF8D4) | Text: Navy (#313647)
      */}
      <section id="partnership" className="min-h-[70vh] flex items-center justify-center px-8 bg-[#FFF8D4] text-[#313647]">
        <div className="max-w-4xl text-center">
          <div className="flex justify-center -space-x-4 mb-8">
             <Users className="text-[#435663] z-10" size={64} />
             <Users className="text-[#A3B087] opacity-70" size={64} />
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Partnership</h2>
          <p className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto mb-12">
            "We don't work for you; we work <span className="bg-[#A3B087] px-2 text-[#FFF8D4]">with you</span> as a single, unified executive force."
          </p>
          <button className="px-10 py-4 border-2 border-[#313647] text-[#313647] hover:bg-[#313647] hover:text-[#FFF8D4] transition-all duration-300 font-bold uppercase tracking-widest">
            Initiate Collaboration
          </button>
        </div>
      </section>

    </div>
  );
}