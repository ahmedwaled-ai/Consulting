import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enterprise network analysis",
      description: "A comprehensive guide for leaders to understand internal relationships and organizational health through data-driven insights.",
      image: 'https://images.pexels.com/photos/4960341/pexels-photo-4960341.jpeg'
    },
    {
      title: "DORNA",
      description: "DORNA understand internal relationships and organizational health through data-driven understand internal relationships and organizational health through data-driven understand internal relationships and organizational health through data-driven  .",
      Image: '',
      slideImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000'
    }
    // {
    //   title: "Passion for making an impact",
    //   description: "Our team consists of exceptional professionals passionate about creating sustainable impact for our global partners.",
    //   image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000'
    // }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden ">
    {slides.map((slide, index) => (
      <div 
        key={index} 
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
      >
        
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        
        <div className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 ${slide.slideImage ? 'bg-black/90' : ''}`}>
          
          
          <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
            <div className="max-w-xl text-left text-white space-y-6 pointer-events-auto">
              
              
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-600/20 border border-blue-400/30 backdrop-blur-md">
                {/* <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> */}
                {/* <span className="text-blue-100 text-xs uppercase tracking-widest font-bold">Global Expertise</span> */}
              {/* </div> */}

              
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                {slide.title}
              </h1>

              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                {slide.description}
              </p>

              
              <div className="pt-4">
                <button className="inline-flex items-center gap-2 px-10 py-3 bg-white text-blue-900 rounded-full font-black text-lg hover:bg-blue-50 transition-all hover:-translate-y-1 shadow-2xl">
                  Explore <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full overflow-hidden hidden lg:block">
            {slide.slideImage && (
              <>
                <img 
                  src={slide.slideImage} 
                  className="h-full w-full object-cover animate-fade-in transition-opacity duration-1000" 
                  style={{ opacity: 0.8 }}
                  alt="Side Graphic"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent"></div>
              </>
            )}
          </div>
        </div>
      </div>
    ))}

    {/* المؤشرات (Dots) */}
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-30">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className={`h-2 rounded-full transition-all duration-500 ${
            idx === currentSlide ? 'w-12 bg-blue-500' : 'w-3 bg-white/50'
          }`}
        />
      ))}
    </div>
  </section>
  );
}
