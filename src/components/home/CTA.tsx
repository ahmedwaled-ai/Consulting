import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    // Responsive Container: 
    // min-h-screen (Mobile) -> 2xl:h-screen (Large)
    // Increased vertical padding for large screens
    <section className="relative min-h-screen 2xl:h-screen bg-white overflow-hidden flex flex-col justify-center py-16 md:py-8 2xl:py-24">
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, #000 40px, #000 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, #000 40px, #000 41px)
          `
        }}></div>
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"></div>

      {/* Main Content Wrapper: Expanded max-width for 2xl */}
      <div className="max-w-5xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16 relative z-10 text-center flex flex-col h-full justify-between md:justify-around max-h-none md:max-h-[90vh] 2xl:max-h-none 2xl:gap-16">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          // Scaled size: w-16 (Mobile) -> w-20 (Desktop) -> w-32 (Large)
          className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 2xl:w-32 2xl:h-32 bg-black mx-auto relative mb-6 md:mb-4 2xl:mb-10"
        >
          {/* Icon size scaled */}
          <Sparkles className="text-yellow-500 w-6 h-6 md:w-8 md:h-8 2xl:w-16 2xl:h-16" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 2xl:border-8 border-transparent border-t-yellow-500"
          ></motion.div>
        </motion.div>

        {/* Content Block */}
        <div>
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Responsive Text: text-5xl (Mobile) -> text-9xl (Large) */}
              <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black text-black tracking-tighter leading-[0.9] mb-4 2xl:mb-8">
                Transform<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                  Your Future
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl 2xl:text-3xl text-zinc-600 max-w-2xl 2xl:max-w-5xl mx-auto mb-8 2xl:mb-16 leading-relaxed font-light"
            >
              Partner with CID to unlock unprecedented growth and sustainable competitive advantage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 2xl:gap-8 justify-center items-center"
            >
              <button className="group relative w-full sm:w-auto px-10 py-4 2xl:px-16 2xl:py-8 bg-black text-white overflow-hidden transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm 2xl:text-xl font-black uppercase tracking-wider">
                  Start Your Journey
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 2xl:w-6 2xl:h-6" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-yellow-500 to-yellow-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>

              <button className="w-full sm:w-auto px-10 py-4 2xl:px-16 2xl:py-8 border-2 border-black hover:border-yellow-500 text-black hover:text-yellow-600 text-sm 2xl:text-xl font-black uppercase tracking-wider transition-all duration-300">
                View Case Studies
              </button>
            </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-8 2xl:mt-24 pt-8 2xl:pt-16 border-t border-black/10"
        >
          <div className="grid grid-cols-3 gap-6 2xl:gap-16">
            <div>
              <div className="text-3xl 2xl:text-6xl font-black text-black">500+</div>
              <div className="text-[9px] 2xl:text-sm uppercase tracking-widest text-zinc-400 font-bold mt-1 2xl:mt-3">Projects</div>
            </div>
            <div className="border-x border-black/10">
              <div className="text-3xl 2xl:text-6xl font-black text-black">98%</div>
              <div className="text-[9px] 2xl:text-sm uppercase tracking-widest text-zinc-400 font-bold mt-1 2xl:mt-3">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl 2xl:text-6xl font-black text-black">25Y</div>
              <div className="text-[9px] 2xl:text-sm uppercase tracking-widest text-zinc-400 font-bold mt-1 2xl:mt-3">Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}