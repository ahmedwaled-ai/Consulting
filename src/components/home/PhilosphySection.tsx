import { motion } from 'framer-motion';
import { Target, Compass, Mountain, Zap } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: Target,
      title: "Purpose",
      subtitle: "Why We Exist",
      description: "To redefine the boundaries of strategic consulting through relentless innovation.",
      stat: "100%",
      label: "Client Focus"
    },
    {
      icon: Compass,
      title: "Vision",
      subtitle: "Where We're Going",
      description: "Becoming the world's most trusted partner in complex business transformations.",
      stat: "40+",
      label: "Countries"
    },
    {
      icon: Mountain,
      title: "Mission",
      subtitle: "What We Do",
      description: "Deliver transformative insights that empower organizations to achieve advantage.",
      stat: "500+",
      label: "Projects"
    },
    {
      icon: Zap,
      title: "Values",
      subtitle: "How We Work",
      description: "Integrity, innovation, and impact guide every decision and relationship.",
      stat: "25Y",
      label: "Experience"
    }
  ];

  return (
    // استخدام h-screen مع flex-col وتصغير الـ padding
    <section className="relative h-screen bg-white overflow-hidden flex flex-col justify-center py-4">
      {/* Subtle Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col h-full justify-around">
        
        {/* Centered Header - تقليل المسافات mb-28 إلى mb-6 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-black"></div>
            <span className="text-[8px] font-black tracking-[0.5em] uppercase text-zinc-400">Our Foundation</span>
            <div className="w-12 h-px bg-black"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black leading-tight mb-4">
            Philosophy
          </h2>
          
          <p className="text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            Four core principles that define our approach to excellence and impact.
          </p>
        </motion.div>

        {/* Pillars Grid - تحويل gap-16 إلى gap-4 أو gap-6 */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto w-full">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-500 to-black group-hover:w-full transition-all duration-700"></div>
                
                {/* تقليل الـ padding الداخلي pt-12 pb-16 إلى pt-6 pb-6 */}
                <div className="pt-6 pb-6 px-6 border-b border-black/10">
                  <div className="flex gap-6 items-start">
                    {/* تصغير حجم الأيقونة من w-20 لـ w-14 */}
                    <div className="shrink-0 w-14 h-14 bg-black group-hover:bg-linear-to-br group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-500 flex items-center justify-center">
                      <pillar.icon className="text-white" size={24} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600 mb-1">
                        {pillar.subtitle}
                      </div>
                      <h3 className="text-xl font-black text-black tracking-tight mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-snug font-light">
                        {pillar.description}
                      </p>
                    </div>

                    {/* وضع الإحصائية في الجانب بدلاً من الأسفل لتوفير مساحة طولية */}
                    <div className="hidden lg:flex flex-col items-end">
                       <div className="text-2xl font-black text-black tracking-tighter">{pillar.stat}</div>
                       <div className="text-[8px] font-black uppercase tracking-wider text-zinc-400">{pillar.label}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote - تقليل المسافات mt-32 لـ mt-8 وتصغير الخط */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-light text-black italic leading-tight">
              "Excellence is not an act, but a habit."
            </p>
            <div className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              — CID Philosophy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}