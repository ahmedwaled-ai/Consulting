import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users, ArrowRight, X, Quote } from 'lucide-react';

export default function Teams() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const team = [
    {
      name: "Michael Chen",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "Former Strategy Lead at BCG. Scaling operational efficiency for Fortune 500s.",
      detailedBio: "Michael brings over 15 years of experience in strategic consulting. Before founding our firm, he led major restructuring projects at BCG, helping Fortune 500 companies optimize their operational workflows and increase profitability by an average of 24%. He specializes in corporate governance and scalable architecture.",
      links: {
        linkedin: "https://www.linkedin.com/in/",
        email: "mailto:michael@company.com",
        whatsapp: "https://wa.me/201000000000" 
      }
    },
    {
      name: "Sarah Williams",
      role: "Director of Analytics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Expert in predictive modeling and data-driven decision making via AI.",
      detailedBio: "Sarah is a visionary in the field of Data Science with a Master's degree from Stanford. She has pioneered several predictive modeling frameworks used by leading fintech startups. Her focus is on translating complex data sets into actionable strategic insights for non-technical stakeholders.",
      links: {
        linkedin: "https://www.linkedin.com/in/",
        email: "mailto:sarah@company.com",
        whatsapp: "https://wa.me/201000000000"
      }
    },
    {
      name: "David Kumar",
      role: "Innovation Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      bio: "MIT PhD. specialized in digital transformation and fintech architectures.",
      detailedBio: "Holding a PhD from MIT, David oversees all technological innovations within the firm. His background in blockchain and secure fintech architectures allows him to guide clients through secure digital transformations. He is a frequent keynote speaker at global tech summits.",
      links: {
        linkedin: "https://www.linkedin.com/in/",
        email: "mailto:david@company.com",
        whatsapp: "https://wa.me/201000000000"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Partner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      bio: "Led $2B+ restructuring initiatives across EMEA and APAC regions.",
      detailedBio: "Emily is known for her rigorous approach to operational excellence. She successfully managed restructuring initiatives valued at over $2B across Europe and Asia-Pacific. Her expertise lies in supply chain optimization and cross-border team management.",
      links: {
        linkedin: "https://www.linkedin.com/in/",
        email: "mailto:emily@company.com",
        whatsapp: "https://wa.me/201000000000"
      }
    }
  ];

  return (
    // Responsive Padding: py-12 (Mobile) -> 2xl:py-24 (Large Screen)
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center py-12 2xl:py-24 border-t border-white/10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 2xl:w-200 2xl:h-200 bg-blue-900/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 2xl:w-200 2xl:h-200 bg-amber-600/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Container: Expanded for 2xl screens */}
      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 md:px-8 2xl:px-16 relative z-10 w-full flex flex-col h-full justify-between">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-1.5 2xl:p-2.5 bg-zinc-900 border border-white/10 rounded-md">
                <Users className="text-amber-500 w-3.5 h-3.5 2xl:w-5 2xl:h-5" />
            </div>
            <span className="text-amber-500/80 font-bold text-[10px] 2xl:text-sm tracking-[0.4em] uppercase">Leadership</span>
          </div>
          
          {/* Responsive Title Size */}
          <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black text-white tracking-tighter leading-none">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-700">Visionaries.</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        {/* gap-6 (Mobile) -> 2xl:gap-10 (Large Screen) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-10 my-12 2xl:my-20">
          {team.map((member, i) => (
            // Card Height Control:
            // h-96 (Mobile) -> h-105 (Desktop) -> 2xl:h-[600px] (Large Screen)
            <div key={i} className="h-96 md:h-105 2xl:h-150 w-full perspective-[1000px] group">
              
              <motion.div
                initial={false}
                animate={{ rotateY: flippedCards[i] ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                className="w-full h-full relative preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >

                {/* ================= FRONT FACE ================= */}
                <div 
                  className="absolute inset-0 backface-hidden w-full h-full bg-zinc-900/50 border border-white/5 hover:border-amber-500/50 transition-all duration-500 flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Image Area: Responsive Height */}
                  <div className="relative h-56 md:h-64 2xl:h-96 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4">
                        <div className="flex gap-3">
                          {/* Icons scaled for 2xl */}
                          <a href={member.links.linkedin} className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] transition-all">
                              <Linkedin className="w-4 h-4 2xl:w-6 2xl:h-6" />
                          </a>
                          <a href={member.links.email} className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                              <Mail className="w-4 h-4 2xl:w-6 2xl:h-6" />
                          </a>
                        </div>

                        <button 
                          onClick={() => toggleFlip(i)}
                          className="flex items-center gap-2 text-white text-[10px] 2xl:text-xs uppercase font-bold tracking-widest mt-2 border-b border-white/30 pb-1 hover:text-amber-400 hover:border-amber-400 transition-colors"
                        >
                          View Profile <ArrowRight size={12} className="2xl:w-4 2xl:h-4" />
                        </button>
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="p-5 2xl:p-8 border-t border-white/5 bg-zinc-950 relative z-10 flex-1 flex flex-col justify-end">
                    <h3 className="text-lg 2xl:text-3xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{member.name}</h3>
                    <div className="text-zinc-500 text-[10px] 2xl:text-xs uppercase tracking-widest font-bold">{member.role}</div>
                    <p className="text-zinc-600 text-[10px] 2xl:text-sm mt-2 line-clamp-2 leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* ================= BACK FACE ================= */}
                <div 
                  className="absolute inset-0 backface-hidden w-full h-full bg-zinc-900 border border-amber-500/30 flex flex-col items-center justify-center p-6 2xl:p-10 text-center shadow-2xl shadow-black/50"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <button 
                    onClick={() => toggleFlip(i)}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X size={20} className="2xl:w-8 2xl:h-8" />
                  </button>

                  <div className="relative mb-6 2xl:mb-10">
                    {/* Image Circle scaled */}
                    <div className="w-24 h-24 2xl:w-36 2xl:h-36 rounded-full overflow-hidden border-2 border-amber-500 p-1">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-zinc-950 p-1.5 2xl:p-3 rounded-full border border-white/10">
                      <Quote size={14} className="text-amber-500 2xl:w-5 2xl:h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl 2xl:text-3xl font-black text-white mb-1">{member.name}</h3>
                  <span className="text-amber-500 text-[10px] 2xl:text-xs font-bold uppercase tracking-widest mb-4 2xl:mb-6 block">{member.role}</span>
                  
                  <div className="w-8 2xl:w-12 h-px bg-white/20 mb-4 2xl:mb-6"></div>

                  <p className="text-zinc-400 text-xs 2xl:text-base leading-relaxed overflow-y-auto max-h-30 2xl:max-h-60 px-2 custom-scrollbar">
                    {member.detailedBio}
                  </p>

                  <button 
                    onClick={() => toggleFlip(i)}
                    className="mt-6 2xl:mt-10 text-[10px] 2xl:text-sm font-bold text-white border-b border-amber-500 pb-0.5 hover:text-amber-500 transition-colors"
                  >
                     
                  </button>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
        </motion.div>

      </div>
    </section>
  );
}