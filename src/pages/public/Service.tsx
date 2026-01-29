// src/pages/public/Services.tsx
import { 
  BarChart3, 
  Briefcase, 
  FileText, 
  ShieldCheck, 
  PieChart, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "strategic-planning",
      title: "Strategic Planning",
      icon: Briefcase,
      price: "From $1,500",
      description: "Comprehensive business strategy development to ensure long-term growth and market competitiveness.",
      features: ["Market Analysis", "Growth Roadmap", "Competitor Benchmarking", "Risk Assessment"],
      color: "bg-blue-500"
    },
    {
      id: "financial-consulting",
      title: "Financial Consulting",
      icon: BarChart3,
      price: "From $1,200",
      description: "Expert financial advice to optimize your capital structure, manage risks, and improve profitability.",
      features: ["Audit Preparation", "Tax Optimization", "Investment Strategy", "Cash Flow Management"],
      color: "bg-indigo-500"
    },
    {
      id: "legal-clearance",
      title: "Legal & Documentation",
      icon: FileText,
      price: "From $800",
      description: "Handling all legal paperwork and government clearances for business establishment and operations.",
      features: ["Company Registration", "License Renewals", "Contract Drafting", "Compliance Audit"],
      color: "bg-emerald-500"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      icon: Zap,
      price: "From $2,000",
      description: "Modernizing your business processes through cutting-edge technology and digital solutions.",
      features: ["Cloud Integration", "ERP Implementation", "Process Automation", "Data Security"],
      color: "bg-orange-500"
    },
    {
      id: "market-entry",
      title: "Market Entry Support",
      icon: Globe,
      price: "From $1,800",
      description: "End-to-end support for businesses looking to expand into new local or international markets.",
      features: ["Local Partnership", "Feasibility Studies", "Brand Localization", "Regulatory Guidance"],
      color: "bg-purple-500"
    },
    {
      id: "risk-management",
      title: "Risk Management",
      icon: ShieldCheck,
      price: "From $1,000",
      description: "Identifying and mitigating potential threats to your business continuity and reputation.",
      features: ["Crisis Planning", "Cybersecurity Strategy", "Internal Controls", "Compliance Monitoring"],
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-linear-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-300/30 backdrop-blur-md mb-6">
            <PieChart className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Consulting Solutions <br />
            <span className="text-blue-400">Tailored for Success</span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            We provide expert advice and practical solutions to help your business overcome hurdles and scale effectively.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-6 transition-transform shadow-lg`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-black text-gray-900 mb-2">{service.title}</h3>
                <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {service.price}
                </span>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8 grow">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/booking" 
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors group-hover:shadow-lg"
              >
                Book This Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to ensuring your project's success from start to finish.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and objectives." },
              { step: "02", title: "Strategy", desc: "Developing a customized roadmap for success." },
              { step: "03", title: "Execution", desc: "Implementing solutions with expert precision." },
              { step: "04", title: "Follow-up", desc: "Monitoring results and providing support." }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-black text-blue-50 mb-4 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                  Not sure which service is <br /> right for you?
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/contact" 
                    className="px-10 py-4 bg-white text-blue-900 rounded-full font-black hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
                  >
                    Get Free Advice
                  </Link>
                  <Link 
                    to="/about" 
                    className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-black hover:bg-white/10 transition-all"
                  >
                    Learn Our Methodology
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}