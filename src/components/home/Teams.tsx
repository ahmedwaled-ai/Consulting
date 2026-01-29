import { motion } from 'framer-motion';
import { Linkedin, Mail, Users, MessageCircle, ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

export default function Teams() {
  
  const team = [
    {
      name: "Michael Chen",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "Former Strategy Lead at BCG. Scaling operational efficiency for Fortune 500s.",
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
      links: {
        linkedin: "https://www.linkedin.com/in/",
        email: "mailto:emily@company.com",
        whatsapp: "https://wa.me/201000000000"
      }
    }
  ];

  return (
    <section className="relative h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center py-12 border-t border-white/10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full flex flex-col h-full justify-between">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-1.5 bg-zinc-900 border border-white/10 rounded-md">
                <Users size={14} className="text-amber-500" />
            </div>
            <span className="text-amber-500/80 font-bold text-[10px] tracking-[0.4em] uppercase">Leadership</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">Visionaries.</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden bg-zinc-900/50 border border-white/5 hover:border-amber-500/50 transition-all duration-500 h-full flex flex-col">
                
                {/* Image Area */}
                <div className="relative h-60 lg:h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4">
                      
                      {/* Social Actions */}
                      <div className="flex gap-3">
                        <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                        <a href={member.links.email} className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                            <Mail size={18} />
                        </a>
                        <a href={member.links.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300">
                            <MessageCircle size={18} />
                        </a>
                      </div>

                      {/* View Profile Text Button */}
                      <div className="flex items-center gap-2 text-white text-[10px] uppercase font-bold tracking-widest mt-2 border-b border-white/30 pb-1">
                        View Profile <ArrowRight size={12} />
                      </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-5 border-t border-white/5 bg-zinc-950 relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{member.name}</h3>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{member.role}</div>
                  <p className="text-zinc-600 text-[10px] mt-2 line-clamp-2 leading-relaxed group-hover:text-zinc-400 transition-colors">{member.bio}</p>
                </div>
                
                {/* Gold Line Bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MAIN FOOTER CTA (The Buttons you wanted) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Ready to scale?</h3>
            <p className="text-zinc-500 text-xs">Book a consultation with our senior partners today.</p>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Secondary: Join Team */}
             <button className="px-6 py-3 text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                Careers
             </button>

             {/* Primary: Schedule Consultation (Gold Button) */}
             <button className="group relative px-8 py-3 bg-amber-500 hover:bg-white text-black text-[10px] font-black uppercase tracking-widest transition-all overflow-hidden flex items-center gap-2 shadow-lg shadow-amber-500/20">
                <Calendar size={14} />
                <span>Schedule Consultation</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}