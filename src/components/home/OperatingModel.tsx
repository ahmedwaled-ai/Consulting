import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, CheckCircle, ArrowRight, Layers, Target } from 'lucide-react';
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
    <section className="relative h-screen bg-white overflow-hidden flex flex-col justify-center py-8 font-sans text-zinc-900">
      
      {/* Background Decor (Grid) */}
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(to right, #f1f5f9 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col h-full justify-between max-h-[90vh]">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-4"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-amber-500"></div>
            <span className="text-amber-600 font-bold text-[10px] tracking-[0.4em] uppercase">Our Methodology</span>
            <div className="w-8 h-[2px] bg-amber-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-none mb-2">
            Operating <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Model.</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            A proven 4-step framework transforming strategic ambition into measurable results.
          </p>
        </motion.div>

        {/* --- Timeline Grid --- */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 items-center">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-zinc-100 -z-10 transform -translate-y-1/2"></div>

          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group h-full max-h-[380px]"
            >
              <div className="bg-white border border-zinc-200 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 p-6 flex flex-col h-full rounded-lg relative overflow-hidden group-hover:-translate-y-2">
                
                {/* Step Number (Watermark style) */}
                <div className="absolute top-2 right-4 text-6xl font-black text-zinc-50 opacity-50 group-hover:text-amber-50 transition-colors pointer-events-none">
                  {phase.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 shrink-0 bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                  <phase.icon size={20} />
                </div>

                {/* Title */}
                <div className="mb-3 relative z-10">
                  <div className="text-[9px] font-bold uppercase text-amber-600 tracking-wider mb-1">{phase.subtitle}</div>
                  <h3 className="text-xl font-black text-zinc-900">{phase.title}</h3>
                </div>

                {/* Description */}
                <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mb-6 line-clamp-3 relative z-10">
                  {phase.description}
                </p>

                {/* Deliverables Box */}
                <div className="mt-auto bg-zinc-50 rounded border border-zinc-100 p-3 group-hover:border-amber-100 transition-colors">
                  <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Target size={10} /> Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {phase.deliverables.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-[10px] text-zinc-700 font-bold">
                        <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-0 right-0 bg-zinc-900 text-white text-[9px] font-black uppercase px-3 py-1 rounded-tl-lg">
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
          className="pb-6 pt-4 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Stats */}
          <div className="flex gap-8 lg:gap-16">
            <div>
              <div className="text-2xl font-black text-zinc-900">100%</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Completion Rate</div>
            </div>
            <div>
              <div className="text-2xl font-black text-zinc-900">4-12</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Weeks Avg. Timeline</div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/operating-model"> {/* تأكد أن هذا الرابط صحيح */}
            <button className="group flex items-center -translate-x-16 gap-3 px-6 py-3 bg-zinc-900 hover:bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest transition-all rounded-sm shadow-lg hover:shadow-amber-200">
                Explore Full Process
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-amber-600 transition-colors">
                    <ArrowRight size={10} />
                </div>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}