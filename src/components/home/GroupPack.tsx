import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Zap, Database, ShieldCheck, Sparkles } from 'lucide-react';

// --- مكون التمويج البسيط (Simple Wave Component) ---
const SimpleWave = ({ color = "fill-zinc-100" }: { color?: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-px">
    <svg 
      // 👇👇👇 ركز هنا: هذا السطر يتحكم في "حدة" و"ارتفاع" التمويج 👇👇👇
      // h-[30px] : الارتفاع على الموبايل. (قللت الرقم عشان التمويج يبقا هادي)
      // md:h-[50px]: الارتفاع على الشاشات الكبيرة.
      // 💡 نصيحة: لو عايزه "مسطح" أكتر، صغر الأرقام دي (مثلاً خليها 20px و 40px)
      // 💡 لو عايزه "عميق" وطالع نازل جامد، كبر الأرقام دي (مثلاً 100px و 150px)
      className="relative block w-[calc(100%+1.3px)] h-8 md:h-14" 
      
      
      data-name="Layer 1" 
    //   xmlns="http://www.w3.org/2000/svg" 
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

const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "The Foundation",
    icon: Layers,
    desc: "Mapping your digital DNA. We uncover hidden bottlenecks.",
    points: ["Audit", "Health Check", "Analysis"]
  },
  {
    id: "02",
    title: "Blueprint",
    subtitle: "Architecture",
    icon: Database,
    desc: "Designing the bridge between capabilities and intelligence.",
    points: ["Stack Selection", "Governance", "ROI"]
  },
  {
    id: "03",
    title: "Execution",
    subtitle: "Deployment",
    icon: Zap,
    desc: "Rapid implementation cycles. Deploy, test, and refine.",
    points: ["Launch", "Integration", "Training"]
  },
  {
    id: "04",
    title: "Evolution",
    subtitle: "Optimization",
    icon: ShieldCheck,
    desc: "Turning the system into a self-improving engine.",
    points: ["Global Rollout", "Maintenance", "Legacy"]
  }
];

export default function HorizontalProcess() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  return (
    <section ref={targetRef} className="relative h-[200vh] bg-slate-900">
      
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-[#0f172a] to-[#1e293b]"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)`, backgroundSize: '50px 50px' }}></div>
        </div>

        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent z-0 transform -translate-y-1/2"></div>

        {/* Moving Content */}
        <div className="relative z-10 w-full h-full flex items-center" ref={containerRef}>
            <motion.div 
                style={{ x }} 
                className="flex gap-16 pl-16 md:pl-32 items-center cursor-grab active:cursor-grabbing"
            >
                {/* Title Card */}
                <div className="min-w-112.5 md:min-w-150 pr-20 relative select-none">
                    <div className="absolute -top-16 left-0 p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                        <Sparkles size={24} className="text-amber-400" />
                    </div>
                    <h2 className="text-slate-400 font-bold tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-3">
                        <span className="w-12 h-px bg-amber-500"></span>
                        Operational Workflow
                    </h2>
                    <h3 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8">
                        Precision <br/>
                        In <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">Motion.</span>
                    </h3>
                </div>

                {/* Steps Cards */}
                {steps.map((step, i) => (
                    <div key={i} className="group relative h-96 w-80 shrink-0 select-none">
                        <div className="absolute inset-0 bg-[#000000] border border-white/10 p-8 flex flex-col justify-between transition-all duration-500 group-hover:border-amber-500/50 group-hover:-translate-y-2.5 shadow-2xl shadow-black/50">
                            <div>
                                <div className="flex justify-between items-end mb-6">
                                    <div className="p-3 bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-all">
                                        <step.icon size={24} />
                                    </div>
                                    <span className="text-5xl font-black text-slate-800 group-hover:text-amber-500/20 transition-colors font-serif italic">{step.id}</span>
                                </div>
                                <h4 className="text-2xl font-black text-white mb-1 group-hover:text-amber-100">{step.title}</h4>
                                <p className="text-amber-600 text-[9px] font-bold uppercase tracking-widest mb-4">{step.subtitle}</p>
                                <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className="w-[20vw]"></div>
            </motion.div>
        </div>

        {/* استدعاء التمويج:
            تأكد أن الـ color هنا هو نفس لون السكشن القادم
            (مثال: لو السكشن اللي بعده لونه رمادي فاتح جداً zinc-100)
        */}
        <SimpleWave color="fill-zinc-100" />

      </div>
    </section>
  );
}