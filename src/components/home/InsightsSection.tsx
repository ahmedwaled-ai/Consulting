import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar, TrendingUp, ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';

export default function InsightsUnique() {
  const [activeIdx, setActiveIdx] = useState(0);

  const articles = [
    {
      id: 1,
      category: "Strategic AI",
      title: "The CEO’s Guide to Generative AI Adoption",
      excerpt: "Moving beyond the hype: How to implement LLMs to drive real operational efficiency and competitive advantage in 2026.",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      date: "Jan 15, 2026",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      category: "Global Markets",
      title: "Navigating the Post-Inflation Economy",
      excerpt: "Strategies for capital allocation in a high-interest rate environment. Where to find yield when growth slows down.",
      author: "Michael Ross",
      readTime: "6 min read",
      date: "Jan 12, 2026",
      image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      category: "Sustainability",
      title: "ESG as a Value Driver, Not a Cost Center",
      excerpt: "Case studies on how sustainable supply chains are reducing overhead and increasing brand loyalty in the EU market.",
      author: "Emily Watson",
      readTime: "5 min read",
      date: "Jan 10, 2026",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      category: "Digital Transformation",
      title: "Legacy Modernization: The Hidden Risks",
      excerpt: "Why 70% of digital transformation projects fail, and the framework to ensure yours is in the 30% that succeed.",
      author: "David Kumar",
      readTime: "7 min read",
      date: "Jan 08, 2026",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    // Responsive Container: min-h-screen (Mobile) -> 2xl:h-screen (Large)
    <section className="relative min-h-screen 2xl:h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center py-12 md:py-8 2xl:py-24">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 2xl:w-200 h-96 2xl:h-200 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 2xl:px-16 relative z-10 w-full h-full flex flex-col justify-between max-h-none md:max-h-[90vh] 2xl:max-h-none">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 2xl:mb-16 border-b border-white/10 pb-4 2xl:pb-8">
            <div>
                <div className="flex items-center gap-2 mb-2 2xl:mb-4">
                    <div className="w-2 2xl:w-3 h-2 2xl:h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-zinc-400 font-bold text-[10px] 2xl:text-xs tracking-[0.3em] uppercase">Intelligence</span>
                </div>
                <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-black text-white tracking-tighter leading-none">
                    Market <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">Perspectives.</span>
                </h2>
            </div>
            {/* Hidden on Mobile, Visible on Desktop */}
            <div className="hidden md:flex items-center gap-2 text-zinc-500 text-xs 2xl:text-base mt-4 md:mt-0">
                <TrendingUp size={14} className="text-amber-500 2xl:w-5 2xl:h-5" />
                <span>Trending: AI Strategy, Green Energy, M&A</span>
            </div>
        </div>

        {/* --- Main Content (Split Layout) --- */}
        {/* Mobile: 1 Column, Desktop: 12 Columns */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 min-h-0">
            
            {/* LEFT: Active Article Preview (Big Visual) - 7 Columns */}
            {/* Height: h-72 (Mobile) -> h-full (Desktop) */}
            <div className="lg:col-span-7 h-72 lg:h-full 2xl:h-200 relative group cursor-pointer overflow-hidden rounded-lg order-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full w-full"
                    >
                        {/* Background Image */}
                        <img 
                            src={articles[activeIdx].image} 
                            alt="Article Cover" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-90"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 p-6 2xl:p-12 w-full">
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-3 2xl:mb-6">
                                    <span className="bg-amber-500 text-black text-[9px] 2xl:text-xs font-black uppercase px-2 2xl:px-3 py-1 2xl:py-1.5">
                                        {articles[activeIdx].category}
                                    </span>
                                    <span className="text-zinc-300 text-[10px] 2xl:text-xs flex items-center gap-1">
                                        <Clock size={12} className="2xl:w-4 2xl:h-4" /> {articles[activeIdx].readTime}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-black text-white leading-tight mb-4 2xl:mb-8 group-hover:text-amber-400 transition-colors">
                                    {articles[activeIdx].title}
                                </h3>
                                
                                {/* Excerpt: Hidden on Mobile to save space */}
                                <p className="text-zinc-400 text-sm 2xl:text-lg leading-relaxed max-w-xl 2xl:max-w-2xl mb-6 2xl:mb-10 border-l-2 border-amber-500/50 pl-4 2xl:pl-6 hidden md:block">
                                    {articles[activeIdx].excerpt}
                                </p>

                                <div className="flex items-center justify-between border-t border-white/10 pt-4 2xl:pt-8">
                                    <div className="flex items-center gap-2 2xl:gap-4">
                                        <div className="w-8 h-8 2xl:w-12 2xl:h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-xs 2xl:text-base border border-white/10">
                                            {articles[activeIdx].author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-white text-[10px] 2xl:text-sm font-bold uppercase">{articles[activeIdx].author}</div>
                                            <div className="text-zinc-500 text-[10px] 2xl:text-sm">{articles[activeIdx].date}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="w-10 h-10 2xl:w-14 2xl:h-14 bg-white text-black flex items-center justify-center rounded-full group-hover:bg-amber-500 transition-colors">
                                        <ArrowUpRight size={20} className="2xl:w-6 2xl:h-6" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* RIGHT: Article List (Interactive Navigation) - 5 Columns */}
            <div className="lg:col-span-5 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar order-2">
                <div className="flex flex-col gap-2 2xl:gap-4">
                    {articles.map((article, index) => (
                        <div 
                            key={index}
                            onClick={() => setActiveIdx(index)}
                            className={`p-5 2xl:p-8 cursor-pointer border-l-2 transition-all duration-300 group/item ${
                                activeIdx === index 
                                ? 'bg-white/5 border-amber-500' 
                                : 'bg-transparent border-transparent hover:bg-white/5 hover:border-zinc-700'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-1 2xl:mb-2">
                                <span className={`text-[9px] 2xl:text-xs font-black uppercase tracking-widest ${
                                    activeIdx === index ? 'text-amber-500' : 'text-zinc-500 group-hover/item:text-zinc-300'
                                }`}>
                                    0{index + 1} / {article.category}
                                </span>
                                {activeIdx === index && <motion.div layoutId="activeDot" className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 bg-amber-500 rounded-full" />}
                            </div>
                            
                            <h4 className={`text-sm 2xl:text-xl font-bold leading-snug mb-2 2xl:mb-4 ${
                                activeIdx === index ? 'text-white' : 'text-zinc-400 group-hover/item:text-white'
                            }`}>
                                {article.title}
                            </h4>

                            <div className="flex items-center gap-2 text-[10px] 2xl:text-xs text-zinc-600">
                                <Calendar size={10} className="2xl:w-3 2xl:h-3" />
                                <span>{article.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Box */}
                <div className="mt-8 lg:mt-auto pt-6">
                    <div className="p-5 2xl:p-8 bg-linear-to-br from-zinc-900 to-black border border-white/10 rounded-lg">
                        <div className="flex items-center gap-2 mb-3 text-white">
                            <Mail size={16} className="text-amber-500 2xl:w-6 2xl:h-6" />
                            <span className="text-xs 2xl:text-base font-bold uppercase tracking-wide">Daily Briefing</span>
                        </div>
                        <p className="text-[10px] 2xl:text-sm text-zinc-400 mb-3 2xl:mb-5">
                            Join 15k+ leaders receiving our strategic insights.
                        </p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="w-full bg-black border border-white/10 px-3 2xl:px-5 py-2 2xl:py-3 text-xs 2xl:text-base text-white placeholder-zinc-600 focus:border-amber-500 outline-none rounded-sm"
                            />
                            <button className="bg-amber-500 hover:bg-amber-400 text-black p-2 2xl:p-3 rounded-sm transition-colors">
                                <ChevronRight size={16} className="2xl:w-6 2xl:h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}