import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    // استخدام h-screen بدلاً من الـ padding الكبير
    <section className="relative h-screen bg-white overflow-hidden flex flex-col justify-center py-8">
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

      <div className="max-w-5xl mx-auto px-8 relative z-10 text-center flex flex-col h-full justify-around max-h-[90vh]">
        
        {/* Animated Icon - صغرنا الحجم mb-12 لـ mb-6 */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-black mx-auto relative mb-4"
        >
          <Sparkles className="text-yellow-500" size={32} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-yellow-500"
          ></motion.div>
        </motion.div>

        {/* Headline - صغرنا الـ text-9xl لـ text-6xl */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] mb-4">
            Transform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Your Future
            </span>
          </h2>
        </motion.div>

        {/* Description - صغرنا mb-16 لـ mb-8 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
        >
          Partner with CID to unlock unprecedented growth and sustainable competitive advantage.
        </motion.p>

        {/* CTA Buttons - تقليص الـ padding والـ gap */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-10 py-4 bg-black text-white overflow-hidden transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2 text-sm font-black uppercase tracking-wider">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <button className="px-10 py-4 border-2 border-black hover:border-yellow-500 text-black hover:text-yellow-600 text-sm font-black uppercase tracking-wider transition-all duration-300">
            View Case Studies
          </button>
        </motion.div>

        {/* Trust Indicators - ضغط المساحة mt-24 لـ mt-8 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-black/10"
        >
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-black text-black">500+</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Projects</div>
            </div>
            <div className="border-x border-black/10">
              <div className="text-3xl font-black text-black">98%</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-black text-black">25Y</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}