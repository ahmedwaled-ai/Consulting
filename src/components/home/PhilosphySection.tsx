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
    // التعديل 1: استخدام min-h-screen بدلاً من h-screen لتجنب قص المحتوى على الموبايل
    // 2xl:h-screen للشاشات الكبيرة لضمان توسيط المحتوى
    <section className="relative min-h-screen 2xl:h-screen bg-white overflow-hidden flex flex-col justify-center py-20 md:py-0">
      
      {/* Subtle Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>

      {/* التعديل 2: توسيع الكونتينر للشاشات العملاقة max-w-[1800px] */}
      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 md:px-8 2xl:px-16 w-full flex flex-col h-full justify-center md:justify-around">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-6 2xl:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 md:w-12 2xl:w-20 h-px bg-black"></div>
            <span className="text-[8px] 2xl:text-xs font-black tracking-[0.5em] uppercase text-zinc-400">Our Foundation</span>
            <div className="w-8 md:w-12 2xl:w-20 h-px bg-black"></div>
          </div>
          
          {/* تكبير العنوان للشاشات الكبيرة */}
          <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black tracking-tighter text-black leading-tight mb-4">
            Philosophy
          </h2>
          
          <p className="text-sm md:text-base 2xl:text-xl text-zinc-600 max-w-2xl 2xl:max-w-4xl mx-auto leading-relaxed font-light">
            Four core principles that define our approach to excellence and impact.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        {/* التعديل 3: زيادة الـ gap للشاشات الكبيرة */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 2xl:gap-12 max-w-6xl 2xl:max-w-full mx-auto w-full">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full"
            >
              <div className="relative h-full bg-white border border-black/5 hover:border-black/0 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-linear-to-r from-yellow-500 to-black group-hover:w-full transition-all duration-700"></div>
                
                {/* تكبير الـ Padding الداخلي للكروت على الشاشات الكبيرة */}
                <div className="p-6 2xl:p-10">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    
                    {/* Icon Box */}
                    {/* تكبير المربع والأيقونة للشاشات الكبيرة */}
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 2xl:w-20 2xl:h-20 bg-black group-hover:bg-linear-to-br group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-500 flex items-center justify-center rounded-lg">
                      <pillar.icon className="text-white w-6 h-6 2xl:w-10 2xl:h-10" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-start">
                          <div>
                             <div className="text-[9px] 2xl:text-xs font-black uppercase tracking-[0.3em] text-yellow-600 mb-1">
                                {pillar.subtitle}
                             </div>
                             <h3 className="text-lg md:text-xl 2xl:text-3xl font-black text-black tracking-tight mb-2">
                                {pillar.title}
                             </h3>
                          </div>
                          {/* إظهار الإحصائيات على الموبايل أيضاً في الجانب */}
                          <div className="flex flex-col items-end sm:hidden">
                            <div className="text-xl font-black text-black tracking-tighter">{pillar.stat}</div>
                          </div>
                      </div>
                      
                      <p className="text-zinc-600 text-sm 2xl:text-lg leading-snug font-light mt-2">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Stats for Desktop/Large Screens */}
                    <div className="hidden sm:flex flex-col items-end">
                       <div className="text-2xl 2xl:text-4xl font-black text-black tracking-tighter">{pillar.stat}</div>
                       <div className="text-[8px] 2xl:text-[10px] font-black uppercase tracking-wider text-zinc-400">{pillar.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-8 2xl:mt-16 text-center"
        >
          <div className="max-w-2xl 2xl:max-w-4xl mx-auto px-4">
            <p className="text-lg md:text-xl 2xl:text-3xl font-light text-black italic leading-tight">
              "Excellence is not an act, but a habit."
            </p>
            <div className="mt-3 text-[10px] 2xl:text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
              — CID Philosophy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}