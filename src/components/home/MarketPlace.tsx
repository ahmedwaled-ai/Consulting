import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap, Lock, ArrowUpRight } from 'lucide-react';

export default function MarketPlace() {
  const products = [
    { id: 1, name: "Strategic Framework Toolkit", category: "Templates", description: "50+ battle-tested frameworks for planning.", price: 299, rating: 4.9, downloads: "15K+", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800", features: ["50+ Templates", "Customizable"], badge: "Bestseller" },
    { id: 2, name: "AI Intelligence Platform", category: "Software", description: "Real-time market analysis powered by ML.", price: 1499, pricing: "/mo", rating: 4.8, downloads: "8K+", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", features: ["Live Data", "API Access"], badge: "New" },
    { id: 3, name: "Executive Masterclass", category: "Training", description: "12-week intensive program for leaders.", price: 4999, rating: 5.0, downloads: "2K+", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", features: ["Live Sessions", "Certificate"], badge: "Premium" },
    { id: 4, name: "Risk Assessment Tools", category: "Tools", description: "Enterprise-grade modeling with AI.", price: 799, rating: 4.7, downloads: "11K+", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", features: ["Risk Matrices", "Reports"], badge: null }
  ];

  return (
    <section className="relative h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center py-4">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full flex flex-col h-full justify-between max-h-[96vh]">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShoppingCart className="text-yellow-500" size={16} />
              <span className="text-yellow-500 font-black text-[8px] tracking-[0.4em] uppercase">Digital Assets</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Resource <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">Marketplace</span>
            </h2>
          </div>
          
          <button className="hidden md:flex items-center gap-2 bg-yellow-500 text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black hover:border-white transition-all text-[10px] font-black uppercase tracking-widest rounded-sm">
                View All Products <ArrowUpRight size={14} />
            </button>
      
        </motion.div>

        {/* Products Grid - 4 Columns on desktop to save vertical space */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1 min-h-0 py-2">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group h-full flex flex-col bg-zinc-900 border border-white/5 hover:border-yellow-500/30 transition-all overflow-hidden"
            >
              {/* Image - Fixed small height */}
              <div className="relative h-32 md:h-40 shrink-0 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" />
                {product.badge && (
                  <div className={`absolute top-2 right-2 px-2 py-1 font-black text-[7px] uppercase tracking-wider ${product.badge === 'Bestseller' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-white mb-1 group-hover:text-yellow-400 line-clamp-1">{product.name}</h3>
                  <p className="text-slate-500 text-[10px] leading-tight line-clamp-2 mb-3">{product.description}</p>
                  
                  {/* Features - Compact */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                    {product.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-1 text-[8px] text-slate-400">
                        <Zap className="text-yellow-500" size={8} /> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-3 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1 text-[10px] text-white font-bold">
                      <Star className="text-yellow-500 fill-yellow-500" size={10} /> {product.rating}
                    </div>
                    <div className="text-white font-black text-lg">
                      ${product.price}<span className="text-[8px] text-slate-500 font-normal">{product.pricing}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-yellow-500 text-black font-black uppercase text-[9px] tracking-widest hover:bg-yellow-400 transition-all">Buy Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Completely flattened into a bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 p-4 bg-yellow-500/5 border border-yellow-500/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <Lock className="text-yellow-500 shrink-0" size={24} />
            <div className="text-left">
              <h3 className="text-white font-black text-sm uppercase leading-none">Enterprise Licensing Available</h3>
              <p className="text-slate-500 text-[10px] mt-1">Custom solutions and volume pricing for organizations.</p>
            </div>
          </div>
          <button className="px-6 py-2 bg-white text-black font-black uppercase text-[9px] tracking-widest hover:bg-yellow-500 transition-all">Request Quote</button>
        </motion.div>
      </div>
    </section>
  );
}