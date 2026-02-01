import { motion } from 'framer-motion';

export default function ClientBrands() {
  const brands = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" },
  ];

  const scrollingBrands = [...brands, ...brands, ...brands];

  return (
    // تعديل الـ Padding:
    // py-16 للموبايل
    // py-24 للديسك توب
    // 2xl:py-36 للشاشات الكبيرة
    <section className="relative py-16 md:py-24 2xl:py-36 overflow-hidden flex flex-col justify-center">
      
      {/* 1. الخلفية */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#FFFDF5] via-white to-white"></div>
        {/* تكبير البقعة الذهبية للشاشات الكبيرة */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-200 h-100 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 md:px-8 w-full mb-10 md:mb-16 2xl:mb-24 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            {/* Header Accents */}
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-px w-8 md:w-12 bg-yellow-500/50"></div>
              <span className="text-yellow-600 font-bold text-[9px] md:text-[10px] 2xl:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase">
                Market Leaders
              </span>
              <div className="h-px w-8 md:w-12 bg-yellow-500/50"></div>
            </div>
            
            {/* Main Title Responsive Sizes */}
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black text-slate-900 tracking-tighter mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-700">Giants</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* --- Scrolling Marquee Area --- */}
      <div className="relative w-full py-4 md:py-10 z-10">
        
        {/* ماسك الجوانب (Gradient Fade) */}
        {/* w-16 للموبايل، w-32 للديسك توب، w-64 للكبير */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 2xl:w-64 bg-linear-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 2xl:w-64 bg-linear-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          <motion.div
            // تعديل المسافات بين اللوجوهات:
            // gap-12 للموبايل
            // gap-20 للديسك توب
            // 2xl:gap-32 للشاشات الكبيرة
            className="flex gap-12 md:gap-20 2xl:gap-32 items-center px-4"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35, // السرعة ثابتة ومناسبة
                ease: "linear",
              },
            }}
          >
            {scrollingBrands.map((brand, i) => (
              <div 
                key={i} 
                className="group relative shrink-0 flex flex-col items-center justify-center cursor-default min-w-25 md:min-w-40 2xl:min-w-55"
              >
                {/* تعديل حجم الصور (Logos):
                   h-8 للموبايل (عشان الزحمة)
                   h-14 للطبيعي
                   2xl:h-20 للشاشات العملاقة
                */}
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-8 md:h-14 2xl:h-20 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                />
                
                <div className="w-1 h-1 bg-yellow-500 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}