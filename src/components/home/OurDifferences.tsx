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
    // Responsive Container: min-h-screen (Mobile) -> 2xl:h-screen (Large)
    <section className="relative min-h-screen 2xl:h-screen bg-zinc-950 flex items-center justify-center overflow-hidden py-16 md:py-8 2xl:py-24">
      
      {/* --- 1. Background Layers --- */}
      
      {/* A. Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 2xl:w-300 h-125 2xl:h-200 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* B. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      {/* C. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 2xl:px-16 relative z-10 w-full h-full flex flex-col justify-between max-h-none md:max-h-[90vh] 2xl:max-h-none 2xl:justify-center 2xl:gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-4 mb-8 md:mb-0"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6 2xl:w-10 bg-amber-500/50"></div>
            <span className="text-amber-500 font-bold text-[9px] 2xl:text-xs tracking-[0.4em] uppercase">Why Choose CID</span>
            <div className="h-px w-6 2xl:w-10 bg-amber-500/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-black text-white tracking-tighter">
            The Competitive <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-700">Advantage</span>
          </h2>
        </motion.div>

        {/* Differences Grid */}
        {/* Mobile: grid-cols-1, Desktop: grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-8 flex-1 items-center py-6">
          {differences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Mobile height: h-auto (flexible), Desktop: max-h-40, Large: max-h-64
              className="group h-full md:max-h-40 2xl:max-h-64 min-h-35 2xl:min-h-55"
            >
              {/* Card Style */}
              <div className="relative h-full p-5 2xl:p-8 bg-zinc-900/40 border border-white/5 hover:border-amber-500/50 transition-all duration-500 backdrop-blur-sm rounded-lg group-hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                
                {/* Hover Glow Effect */}
                <div className="absolute -right-10 -top-10 w-32 2xl:w-48 h-32 2xl:h-48 bg-amber-500/10 blur-[50px] rounded-full group-hover:bg-amber-500/20 transition-all duration-500"></div>

                {/* Top Row: Icon + Metric */}
                <div className="flex justify-between items-start relative z-10 mb-4 md:mb-0">
                  <div className="p-2 2xl:p-4 bg-zinc-800/50 rounded border border-white/5 text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-colors duration-300">
                    <item.icon size={18} className="2xl:w-8 2xl:h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl 2xl:text-4xl font-black text-white leading-none font-mono">{item.metric}</div>
                    <div className="text-[8px] 2xl:text-xs text-zinc-500 uppercase font-bold tracking-widest mt-1 group-hover:text-amber-500 transition-colors">{item.label}</div>
                  </div>
                </div>

                {/* Bottom Row: Content */}
                <div className="relative z-10">
                  <h3 className="text-base 2xl:text-2xl font-bold text-white mb-1 2xl:mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] 2xl:text-base leading-relaxed line-clamp-2 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Floating Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-2 mt-8 md:mt-0"
        >
          <div className="flex flex-col md:flex-row items-center justify-between px-6 2xl:px-10 py-4 2xl:py-6 border border-zinc-800 bg-zinc-900/80 backdrop-blur-md rounded-lg shadow-2xl gap-4 md:gap-0">
            <div className="flex items-center gap-4 text-center md:text-left">
                <div className="hidden md:flex w-10 2xl:w-14 h-10 2xl:h-14 rounded-full bg-amber-500/10 border border-amber-500/20 items-center justify-center">
                    <Sparkles className="text-amber-500 2xl:w-6 2xl:h-6" size={16} />
                </div>
                <div>
                    <p className="text-white text-xs 2xl:text-lg font-bold uppercase tracking-wider mb-0.5">
                    Ready to transform your business?
                    </p>
                    <p className="text-[10px] 2xl:text-sm text-zinc-500">
                        Join the industry leaders working with us.
                    </p>
                </div>
            </div>
            
            <button className="w-full md:w-auto group relative px-6 2xl:px-10 py-2.5 2xl:py-4 bg-amber-500 hover:bg-white text-black font-black uppercase text-[10px] 2xl:text-sm tracking-widest transition-all rounded-sm flex items-center justify-center gap-2">
              <span>Start Consultation</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform 2xl:w-5 2xl:h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}