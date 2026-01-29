import { motion } from 'framer-motion';

export default function ClientBrands() {
  // قائمة شركات التكنولوجيا الكبرى
  const brands = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    // { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" },
  ];

  // تكرار المصفوفة لضمان الحركة المستمرة
  const scrollingBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-24 overflow-hidden flex flex-col justify-center">
      
      {/* 1. الخلفية: لمسة ذهبية خفيفة (Background & Gold Accents) */}
      <div className="absolute inset-0 bg-white z-0">
        {/* تدرج لوني خفيف جداً من الأعلى يميل للذهبي الفاتح */}
        <div className="absolute inset-0 bg-linear-to-b from-[#FFFDF5] via-white to-white"></div>
        
        {/* بقعة ذهبية كبيرة وناعمة في المنتصف (Gold Blob) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full mb-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            {/* Header Accents - Gold */}
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-px w-12 bg-yellow-500/50"></div>
              <span className="text-yellow-600 font-bold text-[10px] tracking-[0.4em] uppercase">Market Leaders</span>
              <div className="h-px w-12 bg-yellow-500/50"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-700">Giants</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* --- Scrolling Marquee Area --- */}
      <div className="relative w-full py-10 z-10">
        
        {/* ماسك الجوانب */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-20 items-center px-4"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {scrollingBrands.map((brand, i) => (
              <div 
                key={i} 
                className="group relative shrink-0 flex flex-col items-center justify-center cursor-default min-w-40"
              >
                 {/* تم تعديل كلاسات الصورة هنا:
                    - تم حذف grayscale و opacity لتظهر الألوان كاملة دائماً.
                    - أبقيت على group-hover:scale-110 لتكبير بسيط عند الوقوف عليها.
                 */}
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-10 md:h-14 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
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

 