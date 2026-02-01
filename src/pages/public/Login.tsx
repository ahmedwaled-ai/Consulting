// src/pages/public/Login.tsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Mail, AlertCircle, Check, X, TrendingUp } from 'lucide-react';

export default function Login() {
  // ==================== LOGIC SECTION (UNCHANGED) ====================
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };
  // ==================== END LOGIC SECTION ====================

  return (
    // Main Container: Full Screen, No Padding
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      
      {/* ================= LEFT SIDE: FORM (50% Width) ================= */}
      {/* Order-1 ensures form is on the Left */}
      <div className="w-full lg:w-1/2 bg-[#F8F7F4] flex flex-col order-1 relative h-full">
        
        {/* 1. Header Area: Fixed padding from top */}
        <div className="px-8 lg:px-12 pt-8 pb-2 flex justify-between items-center shrink-0">
            {/* Empty placeholder */}
            <div className="w-8"></div>
            
            {/* Toggle Buttons */}
            <div className="bg-gray-200/50  rounded-full flex items-center shadow-sm border border-white/50">
                <span className="px-5 py-3 w-28 bg-black text-white rounded-full text-balance font-medium shadow-sm cursor-default">
                  Login
                </span>
                <Link 
                  to="/register"
                  className="px-5 py-3 w-28  text-gray-600 rounded-full text-balance font-medium hover:text-gray-900 transition-colors"
                >
                  Sign up
                </Link>
            </div>
        </div>

        {/* 2. Scrollable Form Container */}
        <div className="flex-1 overflow-y-auto px-8 lg:px-12 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto py-4">
                
                <h1 className="text-2xl font-semibold text-yellow-500 mb-1">Welcome Back</h1>
                <p className="text-sm text-gray-700 mb-6">Enter your details to access your account.</p>

                {/* Error Alert */}
                {error && (
                  <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Email Input */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Email</label>
                    <div className="relative group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-3 text-sm text-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                        placeholder="name@example.com"
                        autoComplete="email"
                        disabled={loading}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-yellow-500 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Password</label>
                    <div className="relative group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                        disabled={loading}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Extras: Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${loading ? 'opacity-50' : ''} border-gray-300 group-hover:border-gray-400`}>
                        <input type="checkbox" className="hidden peer" />
                        <Check className="w-3 h-3 text-yellow-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-gray-700">Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-xs text-gray-500 hover:text-black font-medium underline decoration-gray-300 underline-offset-2">
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-gray-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                        Signing in...
                      </span>
                    ) : (
                      'Login'
                    )}
                  </button>
                </form>

                {/* Social Logins */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mb-4">Or continue with</p>
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-white hover:border-gray-300 transition-all bg-white/50">
                        {/* Apple Icon */}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.84 3.44-.79 1.57.06 2.54.74 3.24 1.63-2.5 1.48-2.09 5.86.35 6.94-.49 1.44-1.18 2.87-2.11 4.45zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                        <span className="text-xs font-semibold text-gray-600">Apple</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-white hover:border-gray-300 transition-all bg-white/50">
                      {/* Google Icon */}
                      <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      <span className="text-xs font-semibold text-gray-600">Google</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                   <Link to="/terms" className="text-[10px] text-gray-400 hover:text-gray-600 hover:underline transition-colors">Terms & Conditions</Link>
                </div>
            </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: IMAGE (50% Width) ================= */}
      {/* Order-2 ensures Image is on the Right */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 order-2">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
          alt="Team collaboration" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10"></div>
        
        {/* Close Button */}
        <div className="absolute top-8 right-8 z-20">
            <Link to="/" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all border border-white/20">
              <X className="w-5 h-5 text-white" />
            </Link>
        </div>

        {/* Widgets */}
        <div className="absolute inset-0 z-10 p-16 flex flex-col justify-between pointer-events-none">
          {/* Top Widget */}
          <div className="self-start mt-12 animate-in fade-in slide-in-from-left-4 duration-700">
             <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl w-auto min-w-44 border border-white/50 flex items-center gap-3">
               <div className="p-2.5 bg-yellow-50 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
               </div>
               <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Daily Progress</p>
                  <p className="text-[11px] font-medium text-gray-500">Updated just now</p>
               </div>
             </div>
          </div>
          
          {/* Bottom Widget */}
          <div className="self-end mb-4 animate-in fade-in slide-in-from-right-4 duration-1000 delay-100">
              <div className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-[28px] shadow-2xl border border-white/10 max-w-sm text-white">
                 <h2 className="text-xl font-semibold mb-2 leading-snug">Review with Team.</h2>
                 <p className="text-sm font-light text-gray-200 leading-relaxed mb-4">
                   Scheduled for today at 09:30 AM. Don't miss the updates.
                 </p>
                 <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="flex -space-x-2">
                       <div className="w-6 h-6 rounded-full bg-gray-500 border border-gray-600"></div>
                       <div className="w-6 h-6 rounded-full bg-gray-400 border border-gray-600"></div>
                       <div className="w-6 h-6 rounded-full bg-gray-300 border border-gray-600"></div>
                    </div>
                    <p className="text-xs font-medium text-white">Team Online</p>
                 </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}