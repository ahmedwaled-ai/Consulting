import { useState, useEffect } from 'react';
import { 
  Sparkles, Bot, Calendar, ShieldCheck, 
  CheckCircle2, Users, FileCheck, Lock, Building2, UserCheck, ArrowRight 
} from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "AI-Powered Advisory",
      title: "Smart Financial & Tax Guidance",
      highlight: "Powered by AI",
      description: "Get instant expert guidance on tax compliance, financial strategy, and business formation — validated by industry professionals.",
      bullets: [
        "Instant business setup guidance",
        "Smart tax & compliance support",
        "Financial insights & planning",
        "Automated service recommendations"
      ],
      primaryBtn: { text: "Talk to AI Advisor", icon: Bot },
      secondaryBtn: { text: "Book Free Consultation", icon: Calendar },
      trustText: "Secure • Confidential • Compliant • Built on Verified Regulatory Knowledge",
      accentColor: "from-blue-400 via-indigo-400 to-violet-400",
      glowColor: "bg-blue-600/20",
      // صورة جديدة "Lite" (فاتحة ونظيفة) تعبر عن التكنولوجيا والداتا
      image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=2000', 
    },
    {
      id: 2,
      tag: "End-to-End Platform",
      title: "Total Corporate Services",
      highlight: "One Trusted Platform",
      description: "We help startups and enterprises structure, manage, and scale with confidence through expert financial advisory and tax consultancy.",
      bullets: [
        "Regulatory-first compliance approach",
        "Industry-specialized experts",
        "Technology-driven execution",
        "One partner — total business support"
      ],
      primaryBtn: { text: "Book Free Consultation", icon: Calendar },
      secondaryBtn: { text: "Talk to an Expert", icon: UserCheck },
      trustSignals: [
        { label: "Trusted by 500+ businesses", icon: Users },
        { label: "Certified consultants", icon: FileCheck },
        { label: "Government registered", icon: Building2 },
        { label: "Secure & compliant systems", icon: Lock },
      ],
      accentColor: "from-emerald-400 via-teal-400 to-cyan-400",
      glowColor: "bg-emerald-600/20",
      // الصورة الجانبية للشريحة الثانية
      slideImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000', 
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative h-screen 2xl:h-[90vh] overflow-hidden font-sans bg-[#050505] text-white">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'
          }`}
        >
          {/* ================= BACKGROUND LAYERS ================= */}
          
          {/* 1. Slide 1 Background Image (Lite Image with Smart Overlay) */}
          {slide.image && (
            <div className="absolute inset-0 z-0 overflow-hidden">
               {/* الصورة الفاتحة */}
               <img 
                 src={slide.image} 
                 alt="Background" 
                 className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom" 
                 // تقليل السطوع قليلاً جداً لضمان عدم إيذاء العين، لكن تظل فاتحة
                 style={{ filter: 'brightness(0.8) contrast(1.1)' }} 
               />
               
               {/* تدرج ذكي: داكن فقط في مكان النص (اليسار والأسفل) ليظهر النص الأبيض */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/60 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
            </div>
          )}

          {/* 2. Slide 2 Side Image (Right Side Split) */}
          {slide.slideImage && (
            <div className="hidden lg:block absolute right-0 top-0 w-[55%] h-full z-0">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent"></div>
              <img 
                src={slide.slideImage} 
                className="h-full w-full object-cover object-center opacity-80" 
                alt="Corporate Services"
              />
            </div>
          )}

          {/* 3. Ambient Glow */}
          <div className={`absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none ${slide.glowColor}`}></div>

          {/* ================= CONTENT CONTAINER ================= */}
          <div className="relative h-full flex flex-col justify-center max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 z-30">
            
            <div className="max-w-2xl 2xl:max-w-3xl">
                
                {/* 1. Glass Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mt-12 bg-white/5 backdrop-blur-md mb-6 w-fit shadow-2xl shadow-white/5">
                   <Sparkles size={14} className="text-white" />
                   <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                     {slide.tag}
                   </span>
                </div>

                {/* 2. Typography (تم تصغير الأحجام هنا) */}
                <h1 className="text-3xl md:text-5xl 2xl:text-7xl font-black leading-[1.1] tracking-tight mb-4 drop-shadow-2xl">
                  {slide.title} <br />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accentColor}`}>
                    {slide.highlight}
                  </span>
                </h1>

                <p className="text-sm md:text-base 2xl:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-xl drop-shadow-md">
                  {slide.description}
                </p>

                {/* 3. Bullets (تصغير الخط) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 mb-8">
                  {slide.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 group">
                      <div className={`p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors`}>
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <span className="text-xs md:text-sm text-gray-200 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* 4. Buttons (تصغير الحجم قليلاً) */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <button className={`group relative px-6 py-3 rounded-lg font-bold text-xs md:text-sm tracking-wide overflow-hidden transition-all hover:scale-105 shadow-lg`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.accentColor} opacity-90`}></div>
                    <div className="relative flex items-center justify-center gap-2 text-white">
                        <slide.primaryBtn.icon size={16} />
                        {slide.primaryBtn.text}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  <button className="px-6 py-3 rounded-lg font-bold text-xs md:text-sm tracking-wide border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white flex items-center justify-center gap-2 backdrop-blur-sm bg-black/20">
                    <slide.secondaryBtn.icon size={16} />
                    {slide.secondaryBtn.text}
                  </button>
                </div>

                {/* 5. Footer (تصغير الخط) */}
                {/* 5. Footer */}
                {/* التعديل هنا: استخدمنا شرط عشان نغير المسافة حسب الشريحة */}
                <div className={` ${
                  index === 0 
                    ? 'pb-10 '  // لو الشريحة الأولى: مسافة صغيرة (3)
                    : 'pb-14'   // لو الشريحة الثانية: مسافة كبيرة (8)
                }`}>
                  {slide.trustSignals ? (
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {slide.trustSignals.map((signal, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-300 font-medium">
                          <signal.icon size={12} className="text-gray-400" />
                          {signal.label}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-300 font-medium tracking-wide">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      {slide.trustText}
                    </div>
                  )}
                </div>

            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 flex gap-2 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-700 rounded-full ${
              idx === currentSlide ? 'w-12 bg-white shadow-lg' : 'w-3 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}