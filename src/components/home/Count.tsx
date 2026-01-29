import { useState, useEffect, useRef, memo } from 'react';
import { Globe, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

interface CounterProps {
  target: string;
  duration?: number; // توحيد مدة الأنيميشن لكل الأرقام
}

const Counter = memo(({ target, duration = 1200 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // Sanitization: تنقية المدخلات أمنياً
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
      
      // توحيد سرعة النهاية لكل الأرقام
      setCount(Math.floor(progress * numericTarget));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isVisible, numericTarget, duration]);

  return (
    <div ref={domRef} className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">
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
    /* شيلنا الـ BG والـ Shadow لزيادة النقاء البصري */
    <section className="relative w-[95%] mx-auto py-24 mt-10 overflow-hidden">
      
      {/* 🎯 الـ Container الموحد بالملّي: max-w-7xl و px الجانبي */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-12 lg:px-24 z-10">
        
        {/* سطر الحماية (Security Badge) */}
        <div className="flex items-center gap-2 mb-16 justify-center lg:justify-start">
          <div className="h-px w-8 bg-blue-600/30"></div>
          <ShieldCheck size={14} className="text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Verified Impact Analytics</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {stats.map((stat) => (
            <div key={stat.id} className="group flex flex-col items-center lg:items-start space-y-6">
              
              {/* أيقونة بسيطة بدون تعقيد بصري */}
              <div className="text-slate-300 group-hover:text-blue-600 transition-colors duration-500">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>

              {/* العداد السريع */}
              <div className="space-y-1 text-center lg:text-left">
                {/* مدة 1200ms تجعل الأرقام تنتهي بسرعة وبشكل متزامن */}
                <Counter target={stat.value} duration={1200} />
                <div className="h-1 w-8 bg-blue-600/20 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500 mx-auto lg:mx-0"></div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] pt-4">
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