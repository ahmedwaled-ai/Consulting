import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Zap, Database, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- مكون التمويج (Wave) ---
const SimpleWave = ({ color = "fill-zinc-100" }: { color?: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-px">
    <svg 
      className="relative block w-[calc(100%+1.3px)] h-8 md:h-14 2xl:h-20"
      data-name="Layer 1" 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className={color} 
        transform="scale(1, -1) translate(0, -120)" 
      ></path>
    </svg>
  </div>
);

// 👇 1. أضفنا روابط لكل كارت هنا
const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "The Foundation",
    icon: Layers,
    desc: "Mapping your digital DNA. We uncover hidden bottlenecks.",
    points: ["Audit", "Health Check", "Analysis"],
    link: "/services/discovery" // 👈 الرابط الخاص بهذا الكارت
  },
  {
    id: "02",
    title: "Blueprint",
    subtitle: "Architecture",
    icon: Database,
    desc: "Designing the bridge between capabilities and intelligence.",
    points: ["Stack Selection", "Governance", "ROI"],
    link: "/services/blueprint"
  },
  {
    id: "03",
    title: "Execution",
    subtitle: "Deployment",
    icon: Zap,
    desc: "Rapid implementation cycles. Deploy, test, and refine.",
    points: ["Launch", "Integration", "Training"],
    link: "/services/execution"
  },
  {
    id: "04",
    title: "Evolution",
    subtitle: "Optimization",
    icon: ShieldCheck,
    desc: "Turning the system into a self-improving engine.",
    points: ["Global Rollout", "Maintenance", "Legacy"],
    link: "/services/evolution"
  }
];

export default function HorizontalProcess() {
  const targetRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section 
      ref={targetRef} 
      className={`relative bg-slate-900 ${isDesktop ? 'h-[150vh] 2xl:h-[180vh]' : 'h-auto py-20'}`} 
    >
      <div className={`${isDesktop ? 'sticky top-0 h-screen flex items-center overflow-hidden' : 'relative flex flex-col'}`}>
        
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-[#0f172a] to-[#1e293b]"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)`, backgroundSize: '50px 50px' }}></div>
        </div>

        {isDesktop && (
           <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent z-0 transform -translate-y-1/2"></div>
        )}

        <div className="relative z-10 w-full h-full flex items-center" ref={containerRef}>
            <motion.div 
                style={{ x: isDesktop ? x : 0 }} 
                className={`
                  flex items-center 
                  ${isDesktop ? 'gap-16 pl-16 md:pl-32 2xl:pl-48 flex-row' : 'flex-col gap-12 px-6 w-full'}
                `}
            >
                {/* Title Card */}
                <div className={`
                    relative select-none
                    ${isDesktop ? 'min-w-112.5 md:min-w-150 2xl:min-w-200 pr-10' : 'w-full text-center'}
                `}>
                    <div className={`
                        p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm
                        ${isDesktop ? 'absolute -top-16 left-0' : 'mx-auto mb-6 w-fit'}
                    `}>
                        <Sparkles size={24} className="text-amber-400" />
                    </div>

                    <h2 className={`text-slate-400 font-bold tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-3 ${!isDesktop && 'justify-center'}`}>
                        <span className="w-12 h-px bg-amber-500"></span>
                        Operational Workflow
                    </h2>
                    
                    <h3 className="text-5xl md:text-8xl 2xl:text-9xl font-black text-white leading-[0.9] mb-8">
                        Precision <br/>
                        In <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">Motion.</span>
                    </h3>
                    
                    <p className={`
                        text-amber-400/50 text-xs 2xl:text-sm max-w-md leading-relaxed mb-8
                        ${!isDesktop && 'mx-auto'}
                    `}>
                        Detailed strategic planning meets execution excellence. We ensure every step adds measurable value to your ecosystem.
                    </p>
                    
                    {/* (تم إزالة الزر من هنا بناءً على طلبك، الرابط الآن داخل الكروت) */}
                </div>

                {/* Steps Cards */}
                {steps.map((step, i) => (
                    <div key={i} className={`
                        group relative shrink-0 select-none
                        ${isDesktop ? 'h-112.5 2xl:h-137.5 w-80 2xl:w-96' : 'w-full max-w-sm h-auto aspect-4/5'}
                    `}>
                        {/* جعلنا الكارت flex-col ليتم توزيع المحتوى */}
                        <div className="absolute inset-0 bg-[#000000] border border-white/10 p-8 2xl:p-10 flex flex-col justify-between transition-all duration-500 group-hover:border-amber-500/50 group-hover:-translate-y-2.5 shadow-2xl shadow-black/50">
                            
                            {/* الجزء العلوي للكارت */}
                            <div>
                                <div className="flex justify-between items-end mb-6">
                                    <div className="p-3 bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-all">
                                        <step.icon size={24} className="2xl:w-8 2xl:h-8" />
                                    </div>
                                    <span className="text-5xl 2xl:text-6xl font-black text-slate-800 group-hover:text-amber-500/20 transition-colors font-serif italic">{step.id}</span>
                                </div>
                                <h4 className="text-2xl 2xl:text-3xl font-black text-white mb-1 group-hover:text-amber-100">{step.title}</h4>
                                <p className="text-amber-600 text-[9px] 2xl:text-[10px] font-bold uppercase tracking-widest mb-4">{step.subtitle}</p>
                                <p className="text-zinc-500 text-xs 2xl:text-sm leading-relaxed mb-6">{step.desc}</p>

                                <ul className="space-y-3 border-t border-white/10 pt-4">
                                  {step.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[11px] 2xl:text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                      <div className="p-0.5 rounded-full bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                        <Check size={10} strokeWidth={4} />
                                      </div>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                            </div>

                            {/* 👇 2. رابط Explore أسفل كل كارت 👇 */}
                            <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                                <Link 
                                    to={step.link} 
                                    className="flex items-center gap-2 text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-amber-500 hover:text-white transition-colors group/link"
                                >
                                    Explore {step.title}
                                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
                
            </motion.div>
        </div>

        <SimpleWave color="fill-zinc-100" />
      </div>
    </section>
  );
}