import { useState, memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Shield, Zap, Globe, Layers, Command, Cpu, ChevronRight,
  Target, Eye, Flag, Scale, Anchor, Users, ShieldCheck, 
  MessageSquare, FileBarChart, Star, LucideIcon, TrendingUp, 
  SearchCheck, Briefcase, Globe2, BarChart3, BookOpen, Quote, 
  Lightbulb, LineChart, Newspaper, Library, Megaphone, Database, 
  Wrench, Calendar, Sparkles, Menu, X 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/logo.png'; // تأكد من المسار

// --- Types & Data (نفس البيانات السابقة) ---
interface MenuItemData { icon: LucideIcon; title: string; desc?: string; sectionId?: string; }
interface MenuConfig { 
  label: string; 
  type: 'grid' | 'sections' | 'octopus'; 
  content?: MenuItemData[]; 
  sections?: { title: string; items: MenuItemData[] }[]; 
}

const menuConfigs: Record<string, MenuConfig> = {
  Firm: {
    label: "Firm",
    type: "grid",
    content: [
      { icon: Rocket, title: "Overview", desc: "Core strategic platform", sectionId: "overview" },
      { icon: Zap, title: "Governance", desc: "Decision structures", sectionId: "governance" },
      { icon: Shield, title: "Partners", desc: "Global networks", sectionId: "partners" },
      { icon: Cpu, title: "Experts", desc: "Strategic minds", sectionId: "experts" },
      { icon: Globe, title: "Career", desc: "Join our mission", sectionId: "career" },
      { icon: MessageSquare, title: "Contact", desc: "Get in touch", sectionId: "contact" }
    ]
  },
  Principles: {
    label: "Principles",
    type: "sections",
    sections: [
      { title: "Approach", items: [
        { icon: Layers, title: "Methodology", desc: "4-stage framework", sectionId: "methodology" },
        { icon: MessageSquare, title: "Engagement", desc: "Stakeholder alignment", sectionId: "engagement" },
        { icon: Zap, title: "Delivery", desc: "Execution logic", sectionId: "delivery"},
        { icon: ShieldCheck, title: "Quality", desc: "High standards", sectionId: "quality" },
        { icon: FileBarChart, title: "Reporting", desc: "Data insights", sectionId: "reporting" }
      ]},
      { title: "Philosophy", items: [
        { icon: Target, title: "Purpose", desc: "The core 'Why'", sectionId: "purpose" },
        { icon: Star, title: "Values", desc: "Guiding beliefs", sectionId: "values" },
        { icon: Eye, title: "Vision", desc: "Future aspiration", sectionId: "vision" },
        { icon: Flag, title: "Mission", desc: "Daily commitment", sectionId: "mission" },
        { icon: Scale, title: "Ethics", desc: "Integrity pillar", sectionId: "ethics" },
        { icon: Anchor, title: "Independence", desc: "Objective advice", sectionId: "independence" },
        { icon: Users, title: "Partnership", desc: "Collaborative success", sectionId: "partnership" }
      ]}
    ]
  },
  Industry: { label: "Industry", type: "octopus" },
  Impact: {
    label: "Impact",
    type: "sections",
    sections: [
      { title: "Results", items: [
        { icon: BarChart3, title: "Metrics", desc: "Performance data", sectionId: "metrics" },
        { icon: BookOpen, title: "Stories", desc: "Success journeys", sectionId: "stories" },
        { icon: Quote, title: "Testimonials", desc: "Client voices", sectionId: "testimonials" },
      ]},
      { title: "Future", items: [
        { icon: Lightbulb, title: "Innovation", desc: "Next-gen logic", sectionId: "innovation" },
        { icon: LineChart, title: "Visualization", desc: "Impact mapping", sectionId: "visual" },
      ]}
    ]
  },
  Insights: {
    label: "Insights",
    type: "sections",
    sections: [
      { title: "Knowledge", items: [
        { icon: Newspaper, title: "Articles", desc: "Latest thinking", sectionId: "articles" },
        { icon: Library, title: "Publications", desc: "Deep dives", sectionId: "pubs" },
        { icon: MessageSquare, title: "Opinions", desc: "Expert views", sectionId: "opinions" },
        { icon: Megaphone, title: "News", desc: "CID in media", sectionId: "news" },
      ]},
      { title: "Resources", items: [
        { icon: Database, title: "Research", desc: "Market intel", sectionId: "research" },
        { icon: Wrench, title: "Toolkits", desc: "Actionable assets", sectionId: "tools" },
        { icon: Calendar, title: "Events", desc: "Live sessions", sectionId: "events" },
      ]}
    ]
  },
  MarketPlace: {
    label: "MarketPlace",
    type: "sections",
    sections: [
      { title: "Knowledge", items: [
        { icon: Newspaper, title: "Business ", desc: "Setup Packages", sectionId: "articles" },
        { icon: Library, title: "Accounting", desc: "Finance Plans ", sectionId: "pubs" }
       
      ]},
      { title: "Tax Services", items: [
        { icon: Database, title: "CFO", desc: "Advisory Subscriptions", sectionId: "research" },
        { icon: Wrench, title: "Compliance", desc: "Legal Services", sectionId: "tools" },
        { icon: Calendar, title: "PRO", desc: "Government Services", sectionId: "events" },
        { icon: Calendar, title: "Digital Products", desc: "Tools", sectionId: "events" }
      ]}
    ]
  }
};

const industryData = {
  packages: [
    { 
      id: "finance", icon: FileBarChart, title: "Core Finance", 
      services: [
        { icon: Cpu, title: "Digital Trans.", sectionId: "digital" },
        { icon: Globe2, title: "Global Reporting", sectionId: "reporting" },
        { icon: Zap, title: "Audit Automation", sectionId: "audit" },
      ]
    },
    { 
      id: "tax", icon: TrendingUp, title: "Tax Optimization",
      services: [
        { icon: Shield, title: "Risk Mitigation", sectionId: "risk" },
        { icon: Globe, title: "Cross-border Tax", sectionId: "international" },
      ]
    },
    { 
      id: "audit", icon: SearchCheck, title: "Audit & Assurance",
      services: [
        { icon: Briefcase, title: "Legal Compliance", sectionId: "legal" },
        { icon: Database, title: "Forensic Data", sectionId: "forensic" },
      ]
    },
    { 
      id: "advisory", icon: Target, title: "Advisory",
      services: [
        { icon: Lightbulb, title: "Market Strategy", sectionId: "strategy" },
        { icon: Users, title: "M&A Support", sectionId: "m-a" },
      ]
    },
    { 
      id: "growth", icon: ShieldCheck, title: "Growth",
      services: [
        { icon: Rocket, title: "Scale-up Logic", sectionId: "scale" },
        { icon: TrendingUp, title: "ROI Visualization", sectionId: "roi" },
      ]
    },
  ]
};

// --- Sub-Components ---
const MenuItem = ({ item, compact, baseUrl }: { item: MenuItemData, compact?: boolean, baseUrl: string }) => (
  <Link 
    to={item.sectionId ? `${baseUrl}#${item.sectionId}` : baseUrl} 
    className="flex items-start gap-2.5 p-1.5 rounded-md hover:bg-white/5 transition-all group overflow-hidden no-underline"
  >
    <div className="text-zinc-500 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5">
        <item.icon size={16} />
    </div>
    <div className="min-w-0">
      <div className="text-[11px] font-bold text-white leading-tight group-hover:text-blue-400">
          {item.title}
      </div>
      {!compact && item.desc && (
          <div className="text-[9px] text-zinc-500 mt-0.5 line-clamp-1 group-hover:text-zinc-400 transition-colors">
              {item.desc}
          </div>
      )}
    </div>
  </Link>
);

const ClientsInfo = () => (
  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-2 pt-1">
    <div className="p-2.5 border border-white/10 rounded-lg bg-white/5">
      <h3 className="text-[9px] font-black uppercase text-zinc-400 mb-1 tracking-widest">Our Clients</h3>
      <p className="text-[10px] text-zinc-300 italic leading-tight">Strategic partners across Global 500 enterprises.</p>
    </div>
    <div className="p-2.5 border border-white/10 rounded-lg bg-white/5">
      <h3 className="text-[9px] font-black uppercase text-zinc-400 mb-1 tracking-widest">Who we serve</h3>
      <p className="text-[10px] text-zinc-300 italic leading-tight">Visionary leaders seeking tactical OS integration.</p>
    </div>
  </motion.div>
);

// --- Main Header Component ---
const Header = memo(() => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activePackage, setActivePackage] = useState<typeof industryData.packages[0] | null>(null);
  
  // 📱 Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // غلق قائمة الموبايل عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
        className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/95 backdrop-blur-md h-13"
        onMouseLeave={() => { setActiveTab(null); setActivePackage(null); }}
    >
      {/* 🖥️ Large Screen Container (Increased max-width for big screens) */}
      <div className="max-w-480 mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        
        {/* --- Logo Section --- */}
        <Link to="/" className="flex-none flex justify-start items-center gap-2 cursor-pointer group no-underline z-50">
          <div className="w-8 h-8 flex items-center justify-center">
             <img src={Img1} alt="CID Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-[12px] font-black text-white uppercase tracking-tight">CORPORATE SOLUTIONS</span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="flex-none hidden lg:flex h-full">
          <ul className="flex items-center h-full gap-1">
            {Object.keys(menuConfigs).map((key) => (
              <li key={key} className="h-full flex items-center relative" onMouseEnter={() => setActiveTab(key)}>
                <button className={`px-4 py-2 text-[11px] font-bold tracking-wide transition-colors uppercase ${activeTab === key ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                  {menuConfigs[key].label}
                </button>
                {activeTab === key && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 w-1/2 shadow-[0_-1px_6px_rgba(59,130,246,0.5)]" />}
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Action Buttons (Desktop) --- */}
        <div className="hidden lg:flex flex-none justify-end items-center gap-3 text-[10px] font-bold text-zinc-500">
          <Link to="/login" className="hover:text-white transition-colors no-underline">Log in</Link>
          <Link to="/StartAbusiness" className="px-3 py-1.5 bg-white text-black rounded-sm hover:bg-zinc-200 transition-colors no-underline uppercase tracking-tight">Start a Business</Link>
        </div>

        {/* --- 📱 Mobile Menu Button --- */}
        <button 
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- 📱 Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-13 bg-black z-40 overflow-y-auto lg:hidden border-t border-white/10"
          >
             <div className="flex flex-col p-6 space-y-6">
                {/* Mobile Links */}
                {Object.keys(menuConfigs).map((key) => (
                   <div key={key} className="border-b border-white/10 pb-4">
                      <h3 className="text-white font-bold text-sm uppercase mb-3">{menuConfigs[key].label}</h3>
                      <div className="grid grid-cols-2 gap-3">
                         {/* Simple links for mobile for now - expandable later */}
                         <Link to={`/${key.toLowerCase()}`} className="text-zinc-500 text-xs hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
                            Explore {key}
                         </Link>
                      </div>
                   </div>
                ))}
                
                <div className="pt-4 flex flex-col gap-3">
                   <Link to="/login" className="w-full py-3 text-center border border-white/20 rounded text-white text-xs uppercase font-bold" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                   <Link to="/StartAbusiness" className="w-full py-3 text-center bg-white text-black rounded text-xs uppercase font-bold" onClick={() => setMobileMenuOpen(false)}>Start a Business</Link>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Desktop Mega Menu Overlay --- */}
      <AnimatePresence>
        {activeTab && !mobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full flex justify-center pointer-events-none perspective-1000 z-40"
            initial={{ opacity: 0, y: -4 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -4 }}
          >
            {/* 🛠️ الإصلاح هنا: استخدام pt-2 بدلاً من margin لإغلاق الفجوة */}
            <div className="pt-2 w-full flex justify-center">
                <motion.div 
                    layoutId="mega-box" 
                    className="pointer-events-auto relative bg-[#09090b] border border-white/10 rounded-lg shadow-2xl overflow-hidden w-160 min-h-75 flex flex-col"
                >
                  
                  <div className="flex-1 p-5 overflow-hidden relative">
                    {(() => {
                      const config = menuConfigs[activeTab];
                      
                      // 🐙 OCTOPUS (INDUSTRY) VIEW 🐙
                      if (activeTab === 'Industry') {
                        return (
                          <div className="grid grid-cols-12 gap-4 h-full relative z-10">
                              {/* Background Effect */}
                              <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-blue-900/10 to-transparent pointer-events-none -z-10" />
                              <img 
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                                className="absolute right-0 top-0 w-1/3 h-full object-cover opacity-[0.03] pointer-events-none -z-10 mix-blend-screen"
                                alt=""
                              />

                            {/* Column 1: Packages */}
                            <div className="col-span-4 space-y-1">
                              <h3 className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-2 pl-1.5">Select Industry</h3>
                              {industryData.packages.map((pkg, i) => (
                                <div key={i} onMouseEnter={() => setActivePackage(pkg)} className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-all group ${activePackage?.id === pkg.id ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-zinc-400 hover:text-white'}`}>
                                  <div className="flex items-center gap-2.5">
                                    <pkg.icon size={14} className={activePackage?.id === pkg.id ? 'text-blue-500' : 'text-zinc-500 group-hover:text-zinc-300'} />
                                    <span className="text-[11px] font-bold">{pkg.title}</span>
                                  </div>
                                  <ChevronRight size={12} className={`transition-all ${activePackage?.id === pkg.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`} />
                                </div>
                              ))}
                            </div>

                            {/* Column 2: Services */}
                            <div className="col-span-4 border-l border-white/10 pl-4">
                              <AnimatePresence mode="wait">
                                {activePackage ? (
                                  <motion.div key={activePackage.id} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 5 }} className="space-y-1">
                                    <h3 className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-2 pl-1.5">Services</h3>
                                    {activePackage.services.map((service, i) => (
                                      <MenuItem key={i} item={service} compact baseUrl={`/industry/${activePackage.id}`} />
                                    ))}
                                  </motion.div>
                                ) : (
                                  <div className="h-full flex items-center justify-center text-zinc-600 text-[10px]">Select an industry</div>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* Column 3: Clients & Image Info */}
                            <div className="col-span-4 border-l border-white/10 pl-4 relative">
                              <AnimatePresence>
                                {activePackage && (
                                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}>
                                    <ClientsInfo />
                                    {/* Image Card inside Industry */}
                                    <div className="mt-4 relative overflow-hidden rounded-md border border-blue-500/20 group cursor-pointer">
                                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors z-10" />
                                        <img 
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                                            alt="Data" 
                                            className="w-full h-20 object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 p-2.5 z-20">
                                            <div className="flex items-center gap-1.5 text-blue-400 mb-0.5">
                                                <Sparkles size={10} />
                                                <span className="text-[8px] font-black uppercase tracking-widest">Feature</span>
                                            </div>
                                            <p className="text-white text-[10px] font-bold">AI Audit 2.0</p>
                                        </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        );
                      }

                      // SECTIONS VIEW
                      if (config.type === 'sections') {
                        return (
                          <div className="grid grid-cols-2 gap-0 h-full w-full">
                            {config.sections!.map((section, idx) => {
                              let currentBaseUrl = `/${activeTab?.toLowerCase()}`;
                              if (activeTab === 'Principles') currentBaseUrl = section.title === 'Approach' ? '/approach' : '/philosophy';
                              
                              return (
                                <div key={idx} className={`flex flex-col h-full ${idx > 0 ? 'border-l border-white/10 pl-6' : 'pr-6'}`}>
                                  <h3 className="text-[9px] font-black uppercase text-zinc-500 mb-3 pl-1.5 tracking-widest">{section.title}</h3>
                                  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                                    {section.items.map((item, i) => (
                                      <MenuItem key={i} item={item} baseUrl={currentBaseUrl} />
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      }

                      // DEFAULT GRID VIEW (FIRM)
                      return (
                        <div className="grid grid-cols-12 gap-4 h-full">
                              {/* Columns for Links */}
                            <div className="col-span-8 grid grid-cols-2 gap-4">
                                {[0, 1].map(col => (
                                    <div key={col} className={`space-y-1 ${col > 0 ? 'border-l border-white/10 pl-4' : ''}`}>
                                        <h3 className="text-[9px] font-black uppercase text-zinc-500 mb-2 pl-1.5">{col === 0 ? 'Core Operations' : 'Global Network'}</h3>
                                        {config.content!.slice(col * 3, col * 3 + 3).map((item, i) => <MenuItem key={i} item={item} baseUrl="/firm" />)}
                                    </div>
                                ))}
                            </div>

                            {/* Image Column */}
                            <div className="col-span-4 border-l border-white/10 pl-4">
                                  <h3 className="text-[9px] font-black uppercase text-zinc-500 mb-2 pl-1.5">Featured</h3>
                                  <div className="h-full rounded-lg  border border-white/10 overflow-hidden relative group cursor-pointer max-h-50">
                                    <img 
                                        src="https://images.pexels.com/photos/4960341/pexels-photo-4960341.jpeg" 
                                        alt="Office" 
                                        className="w-full h-full object-cover opacity-60  group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 to-transparent p-4 flex flex-col justify-end">
                                        <span className="text-blue-500 text-[9px] font-bold uppercase tracking-widest mb-0.5">Culture</span>
                                        <h4 className="text-white text-[12px] font-black leading-tight">Future of strategy.</h4>
                                        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-white/80 font-bold group-hover:text-white group-hover:translate-x-1 transition-all">
                                            Read <ChevronRight size={12} />
                                        </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* System Footer */}
                  <div className="bg-[#050505] border-t border-white/10 p-2.5 px-5 flex justify-between items-center shrink-0 mt-auto">
                    <div className="flex items-center gap-2 text-[9px] text-zinc-500 font-bold uppercase tracking-widest leading-none">
                        <Command size={10} className="text-blue-600" />
                        <span>CID OS v1.2</span>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-tight leading-none">
                        <span className="text-zinc-600 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/>Stable</span>
                        <span className="text-blue-500 hover:text-blue-400 cursor-pointer flex items-center gap-0.5 transition-colors">Metrics <ChevronRight size={10} /></span>
                    </div>
                  </div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Header;