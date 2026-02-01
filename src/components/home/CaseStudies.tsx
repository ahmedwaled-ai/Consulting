import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, DollarSign, Users, Target, Sparkles, Briefcase, ChevronRight, LucideIcon, BarChart3, PieChart, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

// --- TypeScript Interfaces ---
interface ResultMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: ResultMetric[];
  image: string;
  accent: string;      // Text color
  bgAccent: string;    // Indicator/Dot color
  border: string;      // Border color
  glow: string;        // Shadow glow
  bgBase: string;      // Background color for the whole section
  buttonHover: string; // CTA Button hover style
  statHover: string;   // Stats Card hover style
}

export default function CaseStudiesProFinal() {
  const [activeCase, setActiveCase] = useState<number>(0);

  // --- Professional Content Configuration ---
  const cases: CaseStudy[] = [
    {
      id: 1,
      client: "Sentinel Financial",
      industry: "Banking & Fintech",
      challenge: "Legacy Infrastructure Bottlenecks",
      solution: "Engineered a cloud-native microservices architecture, reducing latency by 40% and enabling real-time cross-border transactions securely.",
      results: [
        { label: "Cost Efficiency", value: "$40M+", icon: DollarSign },
        { label: "User Acquisition", value: "2.5M", icon: Users },
        { label: "Processing Speed", value: "300%", icon: TrendingUp }
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      accent: "text-blue-400",
      bgAccent: "bg-blue-500",
      border: "border-blue-500/30",
      glow: "shadow-blue-900/20",
      bgBase: "bg-[#0f172a]", 
      buttonHover: "hover:bg-blue-500 hover:border-blue-500",
      statHover: "hover:border-blue-500/50 hover:bg-blue-500/10"
    },
    {
      id: 2,
      client: "Apex Capital Partners",
      industry: "Corporate Strategy",
      challenge: "Market Saturation & Growth",
      solution: "Developed an AI-driven M&A strategy identifying high-value undervalued assets, resulting in a diversified portfolio and market dominance.",
      results: [
        { label: "Revenue Surge", value: "180%", icon: BarChart3 },
        { label: "Strategic Mergers", value: "12+", icon: Briefcase },
        { label: "Annual ROI", value: "45%", icon: Target }
      ],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200", 
      accent: "text-amber-500",
      bgAccent: "bg-amber-500",
      border: "border-amber-500/30",
      glow: "shadow-amber-900/20",
      bgBase: "bg-[#1c1917]", 
      buttonHover: "hover:bg-amber-500 hover:border-amber-500",
      statHover: "hover:border-amber-500/50 hover:bg-amber-500/10"
    },
    {
      id: 3,
      client: "Nexus Operations",
      industry: "Supply Chain Ops",
      challenge: "Global Supply Chain Volatility",
      solution: "Implemented a predictive IoT digital twin system to forecast disruptions, optimizing inventory flow and reducing operational overhead.",
      results: [
        { label: "Lead Time", value: "-60%", icon: PieChart },
        { label: "Net Savings", value: "$25M", icon: DollarSign },
        { label: "Risk Mitigation", value: "99%", icon: ShieldCheck }
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-500",
      border: "border-emerald-500/30",
      glow: "shadow-emerald-900/20",
      bgBase: "bg-[#022c22]", 
      buttonHover: "hover:bg-emerald-500 hover:border-emerald-500",
      statHover: "hover:border-emerald-500/50 hover:bg-emerald-500/10"
    }
  ];

  const nextIndex = (activeCase + 1) % cases.length;
  const nextCaseData = cases[nextIndex];
  const currentCase = cases[activeCase];

  return (
    // Responsive Outer Section:
    // min-h-screen للموبايل للسماح بالسكرول
    // 2xl:h-screen للشاشات الكبيرة للتوسيط
    <section className={`relative min-h-screen 2xl:h-screen overflow-hidden flex flex-col justify-center py-16 md:py-8 2xl:py-20 transition-colors duration-1000 ease-in-out ${currentCase.bgBase}`}>
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Main Container: Expanded width for 2xl screens */}
      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 md:px-8 2xl:px-16 relative z-10 w-full flex flex-col h-full 2xl:justify-center">
        
        {/* --- HEADER --- */}
        {/* gap-6 للموبايل، gap-12 للكبير */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-6 mb-8 md:mb-4 2xl:mb-12 gap-6 md:gap-0">
          
          {/* Left: Title */}
          <div>
            <motion.div 
                key={currentCase.id} 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-2"
            >
              <Sparkles className={`w-3.5 h-3.5 2xl:w-5 2xl:h-5 ${currentCase.accent}`} />
              <span className={`font-bold text-[10px] 2xl:text-xs tracking-[0.4em] uppercase ${currentCase.accent}`}>Success Stories</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black text-white tracking-tighter leading-none">
              Proven <span className="text-zinc-500">Impact.</span>
            </h2>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-8 pb-2 w-full md:w-auto justify-between md:justify-end">
              
              {/* Scroll Indicators */}
              <div className="flex items-center gap-3"> 
                {cases.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveCase(i)}
                    className={`h-1 rounded-full transition-all duration-500 cursor-pointer hover:bg-white/50 ${
                        i === activeCase 
                        ? `w-12 2xl:w-16 ${currentCase.bgAccent}` 
                        : 'w-3 bg-white/10'
                    }`} 
                  />
                ))}
              </div>

              {/* Next Button */}
              <button 
                onClick={() => setActiveCase(nextIndex)}
                className="group flex items-center gap-3 text-right pl-4 border-l border-white/10"
              >
                <div className="flex flex-col items-end">
                    <span className="text-[9px] 2xl:text-[10px] text-zinc-500 uppercase font-bold tracking-widest group-hover:text-zinc-300 transition-colors">Next</span>
                    <span className="text-xs 2xl:text-sm font-bold text-white transition-colors max-w-25 truncate md:max-w-none">
                        {nextCaseData.client}
                    </span>
                </div>
                <div className={`w-10 h-10 2xl:w-12 2xl:h-12 rounded-full flex items-center justify-center bg-white text-black shadow-lg shadow-white/10 transition-transform duration-300 group-hover:scale-110`}>
                    <ChevronRight size={18} className="2xl:w-6 2xl:h-6" />
                </div>
              </button>

          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        {/* Grid: 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 2xl:gap-32 items-center flex-1">
          
          {/* Left: Image Card */}
          {/* Increased height for 2xl screens */}
          <div className="relative h-full w-full flex items-center justify-center p-2 order-1 md:order-0">
             <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCase}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }} 
                  className={`relative w-full h-64 md:h-105 2xl:h-150 rounded-2xl overflow-hidden shadow-2xl ${currentCase.glow} border ${currentCase.border} group cursor-pointer`}
                >
                  <img 
                    src={currentCase.image} 
                    alt={currentCase.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Pill */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 2xl:px-5 2xl:py-2.5 rounded-full flex items-center gap-2 shadow-lg z-10">
                      <div className={`w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full ${currentCase.bgAccent}`}></div>
                      <span className="text-[9px] 2xl:text-xs font-bold text-white tracking-widest uppercase">{currentCase.industry}</span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </motion.div>
             </AnimatePresence>
          </div>

          {/* Right: Content Info */}
          <div className="flex flex-col justify-center h-full order-2 md:order-0">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="space-y-6 2xl:space-y-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-black text-white mb-3 2xl:mb-6 leading-tight">{currentCase.client}</h3>
                    <p className="text-zinc-400 text-sm 2xl:text-lg leading-relaxed border-l-2 border-white/10 pl-4 2xl:pl-6">
                      {currentCase.solution}
                    </p>
                  </div>

                  {/* Results List - Responsive Padding/Text */}
                  <div className="space-y-3 2xl:space-y-5">
                    {currentCase.results.map((result, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center justify-between p-4 2xl:p-6 rounded-lg border border-white/5 bg-white/5 transition-all duration-300 group cursor-default ${currentCase.statHover}`}
                      >
                        <div className="flex items-center gap-3 2xl:gap-5">
                          <div className={`p-2 2xl:p-3 rounded-full bg-white/5 ${currentCase.accent} group-hover:bg-white/10 transition-colors`}>
                            <result.icon className="w-4 h-4 2xl:w-6 2xl:h-6" />
                          </div>
                          <span className="text-[10px] 2xl:text-xs text-zinc-500 uppercase font-bold tracking-wider group-hover:text-zinc-300 transition-colors">{result.label}</span>
                        </div>
                        <span className="text-xl 2xl:text-3xl font-bold text-white font-mono">{result.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className={`mt-2 w-full group flex items-center justify-center gap-3 p-4 2xl:p-6 rounded-lg border border-white/10 bg-white/5 transition-all duration-300 ${currentCase.buttonHover}`}
                  >
                    <span className="text-xs 2xl:text-sm font-black uppercase tracking-widest text-white group-hover:text-black transition-colors">
                        Full Case Study
                    </span>
                    <ArrowRight size={16} className="text-white group-hover:text-black transition-colors group-hover:translate-x-1 2xl:w-5 2xl:h-5" />
                  </motion.button>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}