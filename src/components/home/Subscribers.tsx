import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Subscribers() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setEmail(''); }, 3000);
  };

  return (
    // تقليل الارتفاع واستخدام justify-center فقط ليكون ملموم في منتصف الشاشة
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden py-12">
      {/* Background Glow - أهدى بكتير */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
        {/* Main Box - تصميم مدمج بعرض الشاشة */}
        <div className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 backdrop-blur-xl relative overflow-hidden group">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-yellow-500/20 group-hover:border-yellow-500 transition-colors duration-700"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={12} /> Weekly Intelligence
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                Stay Ahead of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">The Curve.</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Join 50,000+ leaders receiving exclusive strategic frameworks directly in their inbox.
              </p>
              
              {/* Benefits: ملمومة جداً في سطر واحد */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                {["Industry Insights", "Research Reports", "Templates"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <CheckCircle className="text-yellow-500" size={12} /> {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Form & Social Proof */}
            <div className="space-y-8">
              {!subscribed ? (
                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex flex-col gap-3">
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-yellow-500 transition-colors" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="business@company.com"
                        required
                        className="w-full bg-black border border-white/10 px-12 py-4 text-sm text-white focus:border-yellow-500 outline-none transition-all"
                      />
                    </div>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-widest py-4 text-xs transition-all flex items-center justify-center gap-2 group">
                      Join Intelligence Network <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <p className="text-[9px] text-slate-600 mt-4 text-center uppercase tracking-[0.2em]">
                    Zero Spam • Secure Data • Instant Unsubscribe
                  </p>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="p-8 border-2 border-yellow-500 bg-yellow-500/5 text-center">
                  <CheckCircle className="text-yellow-500 mx-auto mb-2" size={32} />
                  <h3 className="text-lg font-black text-white uppercase tracking-tighter">Subscription Confirmed</h3>
                </motion.div>
              )}

              {/* Social Proof - ملمومة جداً تحت بعض */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                <div className="text-center">
                  <div className="text-xl font-black text-white">50K+</div>
                  <div className="text-[8px] text-slate-500 uppercase font-bold">Readers</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-xl font-black text-white">98%</div>
                  <div className="text-[8px] text-slate-500 uppercase font-bold">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black text-white">4.9★</div>
                  <div className="text-[8px] text-slate-500 uppercase font-bold">Review</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}