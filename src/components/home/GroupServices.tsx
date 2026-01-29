import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BarChart3, Shield, Lightbulb, TrendingUp, Globe2, 
  Cpu, Briefcase
} from 'lucide-react';

export default function GroupServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { id: 1, category: "Strategy", title: "Digital Transformation", icon: Cpu, description: "End-to-end digital strategy and implementation.", features: ["Cloud Migration", "Automation", "Data Infra", "Change Mgmt"], color: "from-blue-600 to-cyan-600", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" },
    { id: 2, category: "Analytics", title: "Business Intelligence", icon: BarChart3, description: "Transform raw data into actionable AI insights.", features: ["Predictive Models", "Dashboards", "Market Intel", "KPI Tracking"], color: "from-yellow-600 to-orange-600", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" },
    { id: 3, category: "Security", title: "Risk Management", icon: Shield, description: "Comprehensive cybersecurity and compliance.", features: ["Threat Assessment", "Audit", "Incident Response", "Training"], color: "from-red-600 to-pink-600", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" },
    { id: 4, category: "Innovation", title: "Product Dev", icon: Lightbulb, description: "Accelerate innovation from concept to market.", features: ["MVP Design", "Validation", "Agile Sprints", "Launch"], color: "from-purple-600 to-indigo-600", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" },
    { id: 5, category: "Growth", title: "Market Expansion", icon: TrendingUp, description: "Strategic roadmaps for entering new markets.", features: ["Research", "Go-to-Market", "Partnerships", "Rev Ops"], color: "from-emerald-600 to-teal-600", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" },
    { id: 6, category: "Operations", title: "Process Excellence", icon: Briefcase, description: "Optimize operations for maximum efficiency.", features: ["Six Sigma", "Supply Chain", "Quality Systems", "Cost Reduction"], color: "from-slate-600 to-zinc-600", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <section className="relative h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center py-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full flex flex-col h-full justify-between max-h-[95vh]">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-between items-end"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="text-yellow-500" size={16} />
              <span className="text-yellow-500 font-black text-[8px] tracking-[0.4em] uppercase">Service Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Integrated <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">Solutions</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs text-right hidden md:block leading-tight">
            Comprehensive consulting engineered for critical challenges.
          </p>
        </motion.div>

        {/* Services Navigation - Slimmer boxes */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setActiveService(i)}
              className={`relative p-3 border transition-all duration-300 text-left ${
                activeService === i 
                  ? 'bg-linear-to-br ' + service.color + ' border-transparent' 
                  : 'bg-zinc-900/50 border-white/5 hover:border-white/20'
              }`}
            >
              <service.icon 
                className={`mb-2 ${activeService === i ? 'text-white' : 'text-yellow-500'}`} 
                size={20} 
              />
              <div className={`text-[7px] font-black uppercase tracking-wider ${activeService === i ? 'text-white/80' : 'text-slate-500'}`}>
                {service.category}
              </div>
              <div className={`text-[10px] font-bold leading-none ${activeService === i ? 'text-white' : 'text-white/70'}`}>
                {service.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Service Detail - Balanced Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch flex-1 min-h-0">
          {/* Left: Image Container */}
          <motion.div 
            key={`img-${activeService}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden group h-full"
          >
            <img 
              src={services[activeService].image} 
              alt={services[activeService].title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className={`absolute inset-0 bg-linear-to-tr ${services[activeService].color} mix-blend-multiply opacity-40`}></div>
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-4 border border-white/10">
              <div className="text-yellow-500 text-[8px] font-black uppercase tracking-widest">{services[activeService].category}</div>
              <div className="text-white text-lg font-black">{services[activeService].title}</div>
            </div>
          </motion.div>

          {/* Right: Content - Compact spacing */}
          <motion.div 
            key={`content-${activeService}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-between py-2"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {services[activeService].description}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {services[activeService].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 text-xs">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rotate-45 shrink-0"></div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="flex-1 py-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-black uppercase tracking-wider text-[10px] hover:scale-[1.02] transition-all">
                Get Started
              </button>
              <button className="flex-1 py-3 border border-white/20 text-white font-black uppercase tracking-wider text-[10px] hover:bg-white/5 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}