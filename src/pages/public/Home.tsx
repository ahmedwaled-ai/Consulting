import HeroSlider from '../../components/home/HeroSlider';
import CaseStudies from '../../components/home/CaseStudies'; 
import ClientBrands from '../../components/home/ClientBrands';
import CTA from '../../components/home/CTA';
// import GroupServices from '../../components/home/GroupServices';
import InsightsSection from '../../components/home/InsightsSection';
import MarketPlace from '../../components/home/MarketPlace';
import OperatingModel from '../../components/home/OperatingModel';
import OurDifferences from '../../components/home/OurDifferences';
import PhilosphySection from '../../components/home/PhilosphySection';
import Teams from '../../components/home/Teams';
import Testimonials from '../../components/home/Testimonials';
// import Subscribers from '../../components/home/Subscribers';
import Metrics from '../../components/home/Metrics';

import { useEffect, useState, useRef } from 'react';
import { Layers, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import GroupPack from '../../components/home/GroupPack';

const stats = [
  { 
    id: 1,
    number: 150, 
    suffix: '+', 
    title: "Global Clients", 
    desc: "Partnering with world-class entities.",
    icon: Layers 
  },
  { 
    id: 2,
    number: 98, 
    suffix: '%', 
    title: "Success Rate", 
    desc: "Delivering measurable impact.",
    icon: ShieldCheck 
  },
  { 
    id: 3,
    number: 45, 
    suffix: 'M', 
    title: "Revenue Generated", 
    desc: "Value created for our partners.",
    icon: Zap 
  },
  { 
    id: 4,
    number: 12, 
    suffix: '', 
    title: "Global Offices", 
    desc: "Operating across major hubs.",
    icon: MessageSquare 
  },
];

interface CounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter = ({ end, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;  
    const step = (timestamp: number ) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

export default function Home() {
  return (
   <div className="relative font-sans">
      
      {/* 1. قسم الـ Hero الثابت (الطبقة الخلفية) */}
      <section className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <HeroSlider /> 
        {/* Placeholder لضمان وجود محتوى */}
        <div className="w-full h-full flex items-center justify-center pointer-events-none"></div>
      </section>

      {/* 2. الطبقة التي تزحف وتغطي (The Curtain) */}
      <main className="relative z-10 bg-black shadow-2xl shadow-black">
        
        {/* --- Full Screen Stats Section (Gold & Black) --- */}
        {/* جعلت هذا القسم h-screen ليكون شاشة كاملة بالضبط */}
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden border-t border-white/10">
          
            {/* أ. الخلفية (داخل السكشن نفسه لضمان احتوائها) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Data Analytics Background"
                    className="w-full h-full object-cover opacity-40" // تقليل الشفافية قليلاً للوضوح
                />
                {/* الصبغة الذهبية */}
                <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay"></div>
                {/* التدرج اللوني للدمج */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black"></div>
            </div>

            {/* ب. المحتوى (العنوان والعدادات) */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full h-full flex flex-col justify-center">
                
                {/* العنوان */}
                <div className="mb-12 md:mb-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-amber-500"></div>
                        <h2 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs">Our Impact</h2>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-4xl leading-[1.1]">
                        Quantifying excellence through <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">Golden Standards.</span>
                    </h3>
                </div>

                {/* شبكة العدادات */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-none shadow-2xl shadow-black/50 backdrop-blur-sm">
                    {stats.map((stat, i) => (
                        <div key={i} className="group relative bg-black/40 p-8 hover:bg-zinc-900/80 transition-all duration-500 border-r border-b border-white/5 lg:last:border-r-0">
                        
                            {/* Icon */}
                            <stat.icon 
                                className="absolute top-6 right-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-500 scale-[1.5] group-hover:rotate-12" 
                                size={32} 
                            />

                            <div className="relative z-10 pt-2">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-500">
                                        <AnimatedCounter end={stat.number} />
                                    </span>
                                    <span className="text-2xl font-light text-amber-500">{stat.suffix}</span>
                                </div>
                                
                                <h4 className="text-sm font-bold text-zinc-300 mb-2 uppercase tracking-widest border-l-2 border-amber-500 pl-3">
                                    {stat.title}
                                </h4>
                                <p className="text-zinc-500 text-xs leading-relaxed pl-4 line-clamp-2">
                                    {stat.desc}
                                </p>
                            </div>

                            {/* Gold Line Animation */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- باقي مكونات الصفحة (تأتي بعد سكشن العدادات) --- */}
        <div className="relative z-10 bg-black">
            <GroupPack />
            <ClientBrands />
            <PhilosphySection />
            <CaseStudies />
            <Teams />
            <Metrics />
            <OperatingModel />
            <OurDifferences />
            {/* <GroupServices /> */}
            <Testimonials />
            <InsightsSection />
            <MarketPlace />
            <CTA />
            {/* <Subscribers /> */}
        </div>

      </main>
   </div>
  );
}