import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, CheckCircle, ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OperatingModel() {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Diagnosis",
      subtitle: "The Audit",
      description: "Deep-dive analysis of current operational bottlenecks and market positioning gaps.",
      deliverables: ["SWOT Analysis", "Process Audit"],
      duration: "2 Weeks",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      subtitle: "The Blueprint",
      description: "Architecting a bespoke operating model aligned with long-term corporate vision.",
      deliverables: ["Strategic Roadmap", "Fin. Modeling"],
      duration: "4 Weeks",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execution",
      subtitle: "The Rollout",
      description: "Agile implementation of the new framework with minimal business disruption.",
      deliverables: ["Change Mgmt", "System Integ."],
      duration: "8 Weeks",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Optimization",
      subtitle: "The Scale",
      description: "Continuous monitoring and refinement to ensure sustainable ROI and growth.",
      deliverables: ["KPI Dashboard", "Growth Plan"],
      duration: "Ongoing",
    }
  ];

  return (
    // Responsive Container: 
    // min-h-screen (Mobile) -> 2xl:h-screen (Large)
    <section className="relative min-h-screen 2xl:h-screen bg-white overflow-hidden flex flex-col justify-center py-16 md:py-12 2xl:py-24 font-sans text-zinc-900">
      
      {/* Background Decor (Grid) */}
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(to right, #f1f5f9 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main Content Wrapper: Expanded for 2xl */}
      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 lg:px-8 2xl:px-16 relative z-10 w-full flex flex-col h-full justify-between max-h-none md:max-h-[90vh] 2xl:max-h-none 2xl:justify-center 2xl:gap-16">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-4 mb-8 md:mb-0"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 2xl:w-12 h-0.5 bg-amber-500"></div>
            <span className="text-amber-600 font-bold text-[10px] 2xl:text-xs tracking-[0.4em] uppercase">Our Methodology</span>
            <div className="w-8 2xl:w-12 h-0.5 bg-amber-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black text-zinc-900 tracking-tighter leading-none mb-2 2xl:mb-4">
            Operating <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700">Model.</span>
          </h2>
          <p className="text-sm 2xl:text-xl text-zinc-500 max-w-lg 2xl:max-w-3xl mx-auto font-medium">
            A proven 4-step framework transforming strategic ambition into measurable results.
          </p>
        </motion.div>

        {/* --- Timeline Grid --- */}
        {/* Grid: 1 col (Mobile) -> 4 cols (Desktop) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 2xl:gap-10 flex-1 items-center">
          
          {/* Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 -z-10 transform -translate-y-1/2"></div>

          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              // Responsive Height: Auto on mobile, Fixed max on desktop
              className="group h-full md:max-h-95 2xl:max-h-125"
            >
              <div className="bg-white border border-zinc-200 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 p-6 2xl:p-10 flex flex-col h-full rounded-lg relative overflow-hidden group-hover:-translate-y-2">
                
                {/* Step Number */}
                <div className="absolute top-2 right-4 text-6xl 2xl:text-8xl font-black text-zinc-50 opacity-50 group-hover:text-amber-50 transition-colors pointer-events-none">
                  {phase.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 2xl:w-20 2xl:h-20 shrink-0 bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 rounded-lg flex items-center justify-center mb-5 2xl:mb-8 transition-all duration-300 shadow-sm">
                  <phase.icon size={20} className="2xl:w-10 2xl:h-10" />
                </div>

                {/* Title */}
                <div className="mb-3 2xl:mb-6 relative z-10">
                  <div className="text-[9px] 2xl:text-xs font-bold uppercase text-amber-600 tracking-wider mb-1">{phase.subtitle}</div>
                  <h3 className="text-xl 2xl:text-3xl font-black text-zinc-900">{phase.title}</h3>
                </div>

                {/* Description */}
                <p className="text-zinc-500 text-[11px] 2xl:text-base font-medium leading-relaxed mb-6 2xl:mb-10 line-clamp-3 relative z-10">
                  {phase.description}
                </p>

                {/* Deliverables Box */}
                <div className="mt-auto bg-zinc-50 rounded border border-zinc-100 p-3 2xl:p-5 group-hover:border-amber-100 transition-colors">
                  <div className="text-[9px] 2xl:text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Target size={10} className="2xl:w-4 2xl:h-4" /> Key Deliverables
                  </div>
                  <ul className="space-y-1.5 2xl:space-y-3">
                    {phase.deliverables.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-[10px] 2xl:text-sm text-zinc-700 font-bold">
                        <div className="w-1 h-1 2xl:w-1.5 2xl:h-1.5 bg-amber-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-0 right-0 bg-zinc-900 text-white text-[9px] 2xl:text-xs font-black uppercase px-3 py-1 2xl:px-5 2xl:py-2 rounded-tl-lg">
                  {phase.duration}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Stats & CTA --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pb-6 pt-8 md:pt-4 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-8 md:mt-0"
        >
          {/* Stats */}
          <div className="flex gap-8 lg:gap-16">
            <div className="text-center md:text-left">
              <div className="text-2xl 2xl:text-5xl font-black text-zinc-900">100%</div>
              <div className="text-[9px] 2xl:text-xs uppercase tracking-widest text-zinc-400 font-bold">Completion Rate</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl 2xl:text-5xl font-black text-zinc-900">4-12</div>
              <div className="text-[9px] 2xl:text-xs uppercase tracking-widest text-zinc-400 font-bold">Weeks Avg. Timeline</div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/operating-model" className="w-full md:w-auto">
            <button className="group w-full md:w-auto flex items-center justify-center md:justify-start gap-3 px-6 py-3 2xl:px-8 2xl:py-5 bg-zinc-900 hover:bg-amber-600 text-white text-[10px] 2xl:text-sm font-black uppercase tracking-widest transition-all rounded-sm shadow-lg hover:shadow-amber-200">
                Explore Full Process
                <div className="w-5 h-5 2xl:w-8 2xl:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-amber-600 transition-colors">
                  <ArrowRight size={10} className="2xl:w-4 2xl:h-4" />
                </div>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}