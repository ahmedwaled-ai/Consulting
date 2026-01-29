// ============================================
// src/pages/public/About.tsx
// ============================================
import { Shield, Award, TrendingUp, Globe, Heart } from 'lucide-react';

export default function About() {
  const values = [
    { 
      icon: Shield, 
      title: "Trust & Integrity", 
      desc: "Building long-term relationships based on transparency and ethical practices" 
    },
    { 
      icon: Award, 
      title: "Excellence", 
      desc: "Delivering exceptional quality in every project and interaction" 
    },
    { 
      icon: TrendingUp, 
      title: "Results-Driven", 
      desc: "Focused on achieving measurable outcomes and sustainable growth" 
    },
    { 
      icon: Heart, 
      title: "Client-Centric", 
      desc: "Your success is our success - we prioritize your goals" 
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Global Clients" },
    { number: "40+", label: "Expert Consultants" }
  ];

  const team = [
    { 
      name: "Dr. Mohamed Ahmed", 
      role: "CEO & Founder", 
      specialty: "Strategy & Leadership",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" 
    },
    { 
      name: "Sarah Ali", 
      role: "COO", 
      specialty: "Operations Management",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" 
    },
    { 
      name: "Khaled Mahmoud", 
      role: "Chief Consultant", 
      specialty: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" 
    },
    { 
      name: "Nour Hassan", 
      role: "Head of Marketing", 
      specialty: "Brand Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-linear-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-300/30 backdrop-blur-md mb-6">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Empowering Businesses Since 1995
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            We are a team of passionate experts dedicated to driving sustainable growth and innovation for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880212340-02d956371842?auto=format&fit=crop&q=80&w=800" 
                alt="Our Story" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-3xl z-0 hidden md:block"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1995, CID Consulting began with a simple mission: to help businesses navigate complex challenges and achieve sustainable growth. Over 25 years later, we've evolved into a leading management consulting firm, serving clients across 12 countries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines global best practices with deep local market insights, ensuring solutions that are both innovative and practical. We don't just advise – we partner with our clients to implement change and drive measurable results.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all">
                  Our Services
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A team of experienced professionals committed to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-bold text-sm mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your goals and drive sustainable growth.
          </p>
          <button className="px-12 py-4 bg-white text-blue-900 rounded-full font-black text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
