import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Send, Globe } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function FooterPro() {
  const [email, setEmail] = useState<string>('');
  
  // --- Mouse Movement Logic for Background ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 }; // Smooth physics
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate percentage from center
      mouseX.set((clientX - innerWidth / 2) / 40); 
      mouseY.set((clientY - innerHeight / 2) / 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  // --- Data ---
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Leadership", "Careers", "Newsroom"]
    },
    {
      title: "Services",
      links: ["Strategy", "Digital Transformation", "Operations", "M&A Advisory"]
    },
    {
      title: "Industries",
      links: ["Financial Services", "Technology", "Healthcare", "Energy"]
    }
  ];

  return (
    <footer className="relative bg-zinc-950 overflow-hidden pt-20 pb-10 border-t border-white/5">
      
      {/* --- 1. Animated Background Grid --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <motion.div style={{ x, y }} className="w-[120%] h-[120%] -ml-[10%] -mt-[10%]">
          <div style={{
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* --- 2. Ambient Glow --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ==============================================
            TOP SECTION: LOGO (Left) vs INPUT (Right)
           ============================================== */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-white/10 pb-16 mb-16">
            
            {/* Left: Brand Identity */}
            <div className="max-w-md">
                <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                    <div className="w-12 h-12 bg-amber-500 flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-500">
                        <span className="text-black font-black text-2xl">C</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tighter leading-none">CID GROUP</h2>
                        <span className="text-[10px] text-amber-500 uppercase tracking-[0.3em] font-bold">Global Consulting</span>
                    </div>
                </Link>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    We partner with the world's most ambitious leaders to define the future. 
                    From strategy to execution, we deliver measurable results.
                </p>
            </div>

            {/* Right: Premium Newsletter Input */}
            <div className="w-full lg:w-auto">
                <div className="mb-3 text-right">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-end gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                        Join our Intelligence Brief
                    </span>
                </div>
                
                <form onSubmit={handleSubmit} className="relative w-full lg:w-[400px] group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your corporate email"
                        className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 pr-16 text-sm focus:outline-none focus:border-amber-500 focus:bg-white/10 transition-all duration-300 rounded-sm placeholder:text-zinc-600"
                    />
                    <button 
                        type="submit" 
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 hover:bg-white text-black flex items-center justify-center rounded-sm transition-all duration-300 group-focus-within:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    >
                        <ArrowRight size={18} />
                    </button>
                </form>
                <p className="text-[10px] text-zinc-600 mt-2 text-right">
                    Protected by reCAPTCHA. <span className="underline cursor-pointer hover:text-zinc-400">Privacy Policy</span>.
                </p>
            </div>
        </div>

        {/* ==============================================
            MIDDLE SECTION: LINKS & CONTACT CARDS
           ============================================== */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
            
            {/* Links Columns (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">{section.title}</h4>
                        <ul className="space-y-4">
                            {section.links.map((link) => (
                                <li key={link}>
                                    <Link to="#" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-amber-500 transition-all duration-300"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Contact Cards (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {[
                    { icon: Mail, label: "Business Inquiries", val: "partners@cid.com", color: "hover:border-amber-500/50" },
                    { icon: Phone, label: "Global HQ", val: "+1 (212) 555-0199", color: "hover:border-blue-500/50" },
                    { icon: MapPin, label: "Main Office", val: "350 Fifth Ave, New York", color: "hover:border-emerald-500/50" }
                ].map((item, i) => (
                    <div key={i} className={`group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 ${item.color} transition-all duration-300 rounded-sm cursor-pointer hover:bg-white/[0.05]`}>
                        <div className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all">
                            <item.icon size={18} />
                        </div>
                        <div>
                            <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-0.5">{item.label}</div>
                            <div className="text-white font-medium text-sm">{item.val}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ==============================================
            BOTTOM SECTION
           ============================================== */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-500 text-xs flex items-center gap-1">
                © 2026 CID Consulting Group. <span className="hidden md:inline">Built for visionaries.</span>
            </div>
            
            <div className="flex gap-4">
                {[Linkedin, Twitter, Facebook, Globe].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-zinc-400 transition-all duration-300">
                        <Icon size={14} />
                    </a>
                ))}
            </div>
        </div>

      </div>
    </footer>
  );
}