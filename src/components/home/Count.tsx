import { useState, useEffect, useRef, memo } from 'react';
import { Globe, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

interface CounterProps {
  target: string;
  duration?: number;
}

const Counter = memo(({ target, duration = 1200 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  const safeValue = target.replace(/[^-0-9+%.]/g, ''); 
  const numericTarget = parseInt(safeValue.replace(/\D/g, ''), 10) || 0;
  const suffix = safeValue.replace(/[0-9]/g, '');

  useEffect(() => {
    let isMounted = true;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && isMounted) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => { isMounted = false; observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!isVisible || numericTarget <= 0) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * numericTarget));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isVisible, numericTarget, duration]);

  return (
    /* 📱 Mobile: text-4xl 
       💻 Laptop: text-7xl 
       🖥️ Large Screen (2xl): text-8xl 
    */
    <div ref={domRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black tracking-tighter text-slate-900">
      {count}{suffix}
    </div>
  );
});

export default function ImpactSection() {
  const stats = [
    { id: 'st1', icon: Globe, value: "12", label: "Countries Covered" },
    { id: 'st2', icon: TrendingUp, value: "500+", label: "Projects Delivered" },
    { id: 'st3', icon: Users, value: "40+", label: "Expert Consultants" },
    { id: 'st4', icon: Award, value: "15", label: "Industry Awards" }
  ];

  return (
    /* تعديل الـ padding والـ width ليتناسب مع الموبايل والشاشات الكبيرة 
       2xl:py-32 (زيادة الارتفاع للشاشات العملاقة)
    */
    <section className="relative w-full md:w-[95%] mx-auto py-16 md:py-24 2xl:py-32 mt-10 overflow-hidden">
      
      {/* 2xl:max-w-[1600px] -> توسيع الكونتينر في الشاشات الكبيرة جداً 
      */}
      <div className="relative max-w-7xl 2xl:max-w-400 mx-auto px-6 md:px-12 lg:px-24 z-10">
        
        {/* Security Badge */}
        <div className="flex items-center gap-2 mb-12 md:mb-16 justify-center lg:justify-start">
          <div className="h-px w-8 bg-blue-600/30"></div>
          
          {/* أيقونة الحماية تكبر قليلاً في الشاشات الكبيرة */}
          <ShieldCheck className="text-blue-600 w-3.5 h-3.5 2xl:w-5 2xl:h-5" />
          
          <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Verified Impact Analytics
          </span>
        </div>

        {/* Grid Layout:
           gap-y-12 للموبايل عشان نوفر مساحة
           gap-y-16 للتابلت
           2xl:gap-y-24 للشاشات الكبيرة لإعطاء فخامة
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 2xl:gap-y-24 gap-x-4 md:gap-x-8">
          {stats.map((stat) => (
            <div key={stat.id} className="group flex flex-col items-center lg:items-start space-y-4 md:space-y-6 2xl:space-y-8">
              
              {/* أيقونة مرنة الحجم */}
              <div className="text-slate-300 group-hover:text-blue-600 transition-colors duration-500">
                {/* w-8 h-8 للموبايل
                    w-10 h-10 للديسك توب
                    w-14 h-14 للشاشات الكبيرة (2xl)
                */}
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 2xl:w-14 2xl:h-14" strokeWidth={1.5} />
              </div>

              {/* العداد */}
              <div className="space-y-1 text-center lg:text-left w-full">
                <Counter target={stat.value} duration={1200} />
                
                {/* الخط الفاصل يكبر مع الشاشة */}
                <div className="h-1 w-8 bg-blue-600/20 group-hover:w-16 2xl:group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500 mx-auto lg:mx-0"></div>
                
                {/* Label:
                   text-[9px] للموبايل الصغير
                   text-[10px] للطبيعي
                   text-xs للشاشات الكبيرة
                */}
                <p className="text-slate-400 text-[9px] md:text-[10px] 2xl:text-xs font-black uppercase tracking-[0.25em] pt-4 2xl:pt-6">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}