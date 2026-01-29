import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "CID transformed our digital infrastructure in record time. Their strategic vision and execution excellence exceeded every expectation.",
      author: "Jennifer Morrison",
      role: "CEO",
      company: "Global Financial Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      rating: 5,
      impact: "$40M Savings"
    },
    {
      quote: "The level of expertise and dedication is unmatched. They didn't just consult—they became an extension of our leadership team.",
      author: "David Chen",
      role: "CTO",
      company: "Tech Innovations Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      rating: 5,
      impact: "250% Gain"
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative h-screen bg-white overflow-hidden flex flex-col justify-center py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full flex flex-col h-full justify-between max-h-[95vh]">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 mb-2">
            <Quote className="text-yellow-600" size={16} />
            <span className="text-yellow-600 font-black text-[8px] tracking-[0.4em] uppercase">Client Voices</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-none">
            Testimonials
          </h2>
        </motion.div>

        {/* Carousel Area - Balanced Grid */}
        <div className="relative flex-1 flex flex-col justify-center min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image Side - Fixed smaller height */}
              <div className="relative h-64 md:h-80 w-full max-w-sm mx-auto">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-yellow-500 z-20"></div>
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 border-l-4 border-yellow-500">
                  <div className="text-white text-lg font-black">{testimonials[activeIndex].author}</div>
                  <div className="text-yellow-500 text-[10px] font-bold uppercase">{testimonials[activeIndex].role}</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-4">
                <Quote className="text-yellow-500 opacity-20" size={48} />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-light text-black leading-snug italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                {/* Impact Badge - Compact */}
                <div className="inline-flex items-center gap-4 bg-black p-3 border-l-4 border-yellow-500">
                  <span className="text-[8px] font-black uppercase tracking-wider text-yellow-500">Impact</span>
                  <span className="text-lg font-black text-white">{testimonials[activeIndex].impact}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Minimal */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 border-2 border-black hover:bg-yellow-500 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-yellow-500' : 'w-2 bg-black/10'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 border-2 border-black hover:bg-yellow-500 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Stats - Very Compact */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/10 mt-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-black leading-none">98%</div>
            <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Retention</div>
          </div>
          <div className="text-center border-x border-black/10">
            <div className="text-2xl md:text-3xl font-black text-black leading-none">4.9/5</div>
            <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-black leading-none">500+</div>
            <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}