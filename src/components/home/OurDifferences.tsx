import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Users, Globe, Award, ArrowRight } from 'lucide-react';

export default function OurDifferences() {
  const differences = [
    { icon: Sparkles, title: "AI Insights", description: "Predict market shifts before they happen.", metric: "98%", label: "Accuracy" },
    { icon: Shield, title: "Integrity", description: "Independent, client-first strategic advice.", metric: "100%", label: "Unbiased" },
    { icon: Zap, title: "Deployment", description: "Measurable results in weeks, not quarters.", metric: "3-6", label: "Week Sprints" },
    { icon: Users, title: "Co-Creation", description: "We embed with teams for lasting impact.", metric: "24/7", label: "Partnership" },
    { icon: Globe, title: "Network", description: "Local expertise in 40+ countries.", metric: "40+", label: "Countries" },
    { icon: Award, title: "Results", description: "Track record of delivering 3-5x ROI.", metric: "5x", label: "Avg ROI" }
  ];

  return (
    <section className="relative h-screen bg-zinc-950 flex items-center justify-center overflow-hidden py-8">
      
      {/* --- 1. Background Layers (Breaking the Flat Black) --- */}
      
      {/* A. Spotlight: إضاءة ذهبية خافتة من الأعلى تكسر السواد */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* B. Grid Pattern: شبكة هندسية خفيفة جداً */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* C. Vignette: تعتيم الحواف للتركيز على المنتصف */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-between max-h-[90vh]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-4"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-6 bg-amber-500/50"></div>
            <span className="text-amber-500 font-bold text-[9px] tracking-[0.4em] uppercase">Why Choose CID</span>
            <div className="h-[1px] w-6 bg-amber-500/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            The Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">Advantage</span>
          </h2>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1 items-center py-6">
          {differences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full max-h-40"
            >
              {/* Card Style: Glassmorphism (Dark Glass) */}
              <div className="relative h-full p-5 bg-zinc-900/40 border border-white/5 hover:border-amber-500/50 transition-all duration-500 backdrop-blur-sm rounded-lg group-hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                
                {/* Hover Glow Effect inside card */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full group-hover:bg-amber-500/20 transition-all duration-500"></div>

                {/* Top Row: Icon + Metric */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="p-2 bg-zinc-800/50 rounded border border-white/5 text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-colors duration-300">
                    <item.icon size={18} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-white leading-none font-mono">{item.metric}</div>
                    <div className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mt-1 group-hover:text-amber-500 transition-colors">{item.label}</div>
                  </div>
                </div>

                {/* Bottom Row: Content */}
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] leading-relaxed line-clamp-2 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Floating Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-2"
        >
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border border-zinc-800 bg-zinc-900/80 backdrop-blur-md rounded-lg shadow-2xl">
            <div className="flex items-center gap-4 mb-3 md:mb-0">
                <div className="hidden md:flex w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 items-center justify-center">
                    <Sparkles className="text-amber-500" size={16} />
                </div>
                <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-0.5">
                    Ready to transform your business?
                    </p>
                    <p className="text-[10px] text-zinc-500">
                        Join the industry leaders working with us.
                    </p>
                </div>
            </div>
            
            <button className="group relative px-6 py-2.5 bg-amber-500 hover:bg-white text-black font-black uppercase text-[10px] tracking-widest transition-all rounded-sm flex items-center gap-2">
              <span>Start Consultation</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}