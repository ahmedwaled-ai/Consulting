// src/components/home/HorizontalInsights.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Newspaper, Library, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

const insights = [
  { id: '01', title: "Autonomous Fiscal Nodes", cat: "AI Strategy", icon: Newspaper, desc: "Restructuring international tax optimization via neural networks." },
  { id: '02', title: "Global Intelligence Report", cat: "Whitepaper", icon: Library, desc: "The 2026 outlook on digital sovereignty and market entry." },
  { id: '03', title: "The Ethics of Precision", cat: "Editorial", icon: MessageSquare, desc: "Why data integrity is the only currency that matters in 2026." },
  { id: '04', title: "Quantum Tax Models", cat: "Research", icon: Sparkles, desc: "Predictive modeling for high-stakes capital efficiency." },
];

export default function HorizontalInsights() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // يحول السكرول من (0 لـ 1) إلى حركة أفقية من (0% لـ -75%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* خلفية نصية ضخمة جمالية */}
        <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[20vw] font-black leading-none text-white">INSIGHTS</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-[10vw]">
          {insights.map((item) => (
            <div 
              key={item.id} 
              className="group relative w-[85vw] md:w-[35vw] h-[65vh] shrink-0 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                <item.icon size={120} className="text-white" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-blue-500 font-black tracking-widest text-[10px] uppercase">{item.cat}</span>
                </div>
                <h3 className="text-4xl font-black leading-tight uppercase tracking-tighter text-white">
                  {item.title}
                </h3>
              </div>

              <div>
                <p className="text-zinc-400 text-sm mb-8 max-w-70 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors">{item.id}</span>
                  <div className="h-0.5 flex-1 bg-white/5" />
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}