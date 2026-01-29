import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Firm() {
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
    <div className="font-sans antialiased">
      
      {/* 1. Overview Section 
          Theme: Deep Navy (#1A3263) -> Authority & Trust
          Text: Beige (#E8E2DB) & White
          Accent: Yellow (#FAB95B)
      */}
      <section id="overview" className="min-h-screen flex items-center px-8 py-20 bg-[#1A3263] text-[#E8E2DB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#FAB95B] font-bold tracking-widest uppercase text-sm mb-4 block">
              Who We Are
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic Vision <br />
              <span className="text-[#547792]">Global Impact.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              We redefine the landscape of corporate excellence through unwavering commitment to strategic governance and innovative partnerships.
            </p>
            <button className="px-8 py-4 bg-[#FAB95B] text-[#1A3263] font-bold rounded hover:bg-white transition-colors duration-300 shadow-lg">
              Explore Our Vision
            </button>
          </div>
          {/* Abstract Shape/Visual representation */}
          <div className="hidden md:block relative h-96 w-full bg-[#547792]/20 rounded-2xl overflow-hidden border border-[#547792]/30">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FAB95B] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[#547792] font-mono text-sm opacity-50">
              [ Strategic Platform Visualization ]
            </div>
          </div>
        </div>
      </section>

      {/* 2. Governance Section 
          Theme: Slate Blue (#547792) -> Stability & Structure
          Text: White & Beige (#E8E2DB)
      */}
      <section id="governance" className="min-h-screen flex items-center px-8 py-20 bg-[#547792]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="border-l-4 border-[#FAB95B] pl-6 mb-12">
            <h2 className="text-5xl font-bold text-white mb-2">Governance</h2>
            <p className="text-[#E8E2DB] text-lg">Structured Decision Making</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-[#1A3263]">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#E8E2DB] p-8 rounded shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#1A3263] mb-6 rounded-full flex items-center justify-center text-[#FAB95B] font-bold">
                  0{item}
                </div>
                <h3 className="text-2xl font-bold mb-4">Protocol Level {item}</h3>
                <p className="text-[#547792]">
                  Ensuring compliance and ethical standards across all operational verticals through rigorous oversight.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Partners Section 
          Theme: Beige (#E8E2DB) -> Openness & Network
          Text: Deep Navy (#1A3263)
      */}
      <section id="partners" className="min-h-screen flex items-center px-8 py-20 bg-[#E8E2DB] text-[#1A3263]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6">Our Partners</h2>
            <p className="text-xl text-[#547792] max-w-2xl mx-auto">
              Collaborating with world-class entities to drive mutual growth and sustainable success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder for Logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <div key={partner} className="h-32 border-2 border-[#1A3263]/10 flex items-center justify-center hover:border-[#FAB95B] hover:bg-white transition-all duration-300 cursor-pointer group">
                <span className="text-[#547792] font-semibold group-hover:text-[#FAB95B]">PARTNER {partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experts Section 
          Theme: White/Clean with Navy Accents
          Focus: Professionalism
      */}
      <section id="experts" className="min-h-screen flex items-center px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-[#E8E2DB] pb-6">
            <h2 className="text-6xl font-black text-[#1A3263]">The Experts</h2>
            <p className="text-[#547792] text-lg font-medium">Minds that shape the future.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Expert Card 1 */}
            <div className="group">
              <div className="h-80 bg-[#1A3263] mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#547792] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {/* Image Placeholder */}
                <div className="h-full w-full flex items-center justify-center text-[#E8E2DB] opacity-30">[Portrait]</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3263]">Alex Stratos</h3>
              <p className="text-[#FAB95B] font-bold text-sm uppercase">Senior Consultant</p>
            </div>
             {/* Expert Card 2 */}
             <div className="group">
              <div className="h-80 bg-[#547792] mb-4 relative overflow-hidden">
                 <div className="h-full w-full flex items-center justify-center text-[#E8E2DB] opacity-30">[Portrait]</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3263]">Sarah Vane</h3>
              <p className="text-[#FAB95B] font-bold text-sm uppercase">Head of Governance</p>
            </div>
             {/* Expert Card 3 */}
             <div className="group">
              <div className="h-80 bg-[#1A3263] mb-4 relative overflow-hidden">
                 <div className="h-full w-full flex items-center justify-center text-[#E8E2DB] opacity-30">[Portrait]</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3263]">James Orbit</h3>
              <p className="text-[#FAB95B] font-bold text-sm uppercase">Lead Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Career Section 
          Theme: Mustard Yellow (#FAB95B) -> Energy & Action
          Text: Navy (#1A3263)
      */}
      <section id="career" className="min-h-[70vh] flex items-center px-8 py-20 bg-[#FAB95B] text-[#1A3263]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">JOIN US.</h2>
          <p className="text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Be part of a team that doesn't just adapt to change, but creates it. 
            We are looking for visionaries.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-10 py-4 bg-[#1A3263] text-white font-bold text-lg hover:bg-[#547792] transition-colors shadow-2xl">
              View Openings
            </button>
            <button className="px-10 py-4 border-4 border-[#1A3263] text-[#1A3263] font-bold text-lg hover:bg-[#1A3263] hover:text-white transition-colors">
              Internship Program
            </button>
          </div>
        </div>
      </section>

      {/* 6. Contact Section 
          Theme: Deep Navy (#1A3263) -> Footer / Finality
          Text: White & Beige
      */}
      <section id="contact" className="min-h-[60vh] flex items-center px-8 py-20 bg-[#1A3263] border-t border-[#547792]/30">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl font-black text-white mb-8">Contact</h2>
            <div className="space-y-6 text-[#E8E2DB] text-lg">
              <p className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#FAB95B] rounded-full"></span>
                contact@firm-strategy.com
              </p>
              <p className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#FAB95B] rounded-full"></span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#FAB95B] rounded-full"></span>
                Financial District, Tower 7, Floor 42
              </p>
            </div>
          </div>

          <form className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full bg-[#547792]/20 border border-[#547792] p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAB95B]" />
                <input type="email" placeholder="Email" className="w-full bg-[#547792]/20 border border-[#547792] p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAB95B]" />
             </div>
             <textarea rows="4" placeholder="Message" className="w-full bg-[#547792]/20 border border-[#547792] p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAB95B]"></textarea>
             <button className="w-full py-4 bg-[#E8E2DB] text-[#1A3263] font-bold hover:bg-[#FAB95B] transition-colors">
                Send Message
             </button>
          </form>
        </div>
      </section>

    </div>
  );
}