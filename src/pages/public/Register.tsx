// src/pages/public/Register.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Eye, EyeOff, User, AlertCircle, TrendingUp, CheckCircle, X } from 'lucide-react';

export function Register() {
  // ==================== LOGIC SECTION ====================
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthColors = ['', 'bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-emerald-500'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (passwordStrength < 3) {
      setError('Please use a stronger password');
      return;
    }

    setLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/pricing', { 
        state: { 
          fromRegistration: true,
          userData: { name: formData.name, email: formData.email }
        } 
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // Main Container: 100vh Fixed Height (No Window Scroll)
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      
      {/* ================= LEFT SIDE: IMAGE (50%) ================= */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 order-1">
        <img 
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Financial consulting" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
        
        {/* Close Button */}
        <div className="absolute top-8 left-8 z-20">
            <Link to="/" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all border border-white/20">
              <X className="w-5 h-5 text-white" />
            </Link>
        </div>

        {/* Widgets */}
        <div className="absolute inset-0 z-10 p-16 flex flex-col justify-between pointer-events-none">
          <div className="self-end mt-12 animate-in fade-in slide-in-from-right-4 duration-700">
             <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl w-auto min-w-[180px] border border-white/50 flex items-center gap-3">
               <div className="p-2.5 bg-blue-50 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
               </div>
               <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Strategic Growth</p>
                  <p className="text-[11px] font-medium text-green-600">+24% YoY Optimized</p>
               </div>
             </div>
          </div>
          
          <div className="self-start mb-4 animate-in fade-in slide-in-from-left-4 duration-1000 delay-100">
              <div className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-[28px] shadow-2xl border border-white/10 max-w-sm text-white">
                 <h2 className="text-xl font-semibold mb-2 leading-snug">Expertise in Strategy.</h2>
                 <p className="text-sm font-light text-gray-200 leading-relaxed mb-4">
                   Navigating complex corporate landscapes with precision.
                 </p>
                 <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-yellow-400" />
                    </div>
                    <p className="text-xs font-medium text-white">Trusted Advisors</p>
                 </div>
              </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: FORM (50%) ================= */}
      <div className="w-full lg:w-1/2 bg-[#F8F7F4] flex flex-col order-2 relative h-full">
        
        {/* 1. Header Area: Fixed padding from top so it's not stuck */}
        <div className="px-8 lg:px-12 pt-8 pb-2 flex justify-between items-center flex-shrink-0">
            {/* Empty placeholder for alignment or Logo */}
            <div className="w-8"></div>
            
            {/* Toggle Buttons */}
            <div className="bg-gray-200/50  rounded-full flex items-center shadow-sm border border-white/50">
                <Link 
                  to="/login"
                  className="px-5 py-1 w-28  text-gray-600 rounded-full text-balance font-medium hover:text-gray-900 transition-colors"
                >
                  Login
                </Link>
                <span className="px-5 py-3 w-28 bg-black text-white rounded-full text-balance font-medium  shadow-sm cursor-default">
                  Sign up
                </span>
            </div>
        </div>

        {/* 2. Scrollable Form Container */}
        {/* Using justify-center to vertically center the form if height allows */}
        <div className="flex-1 overflow-y-auto px-8  lg:px-12 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto py-6">
                
                <h1 className="text-2xl font-semibold -mt-12 -mx-12 text-gray-800 mb-1">Create Account</h1>
                <p className="text-sm text-gray-500 -mx-12 mb-5">Start your 30-day free trial.</p>

                {error && (
                    <div className="mb-4 p-3  bg-red-50 border border-red-100 rounded-xl flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-800">{error}</p>
                    </div>
                )}

                {/* Compact Form Spacing: space-y-3 instead of 4 */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    
                    {/* Name */}
                    <div className='-mx-12'>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Full Name</label>
                      <div className="relative group">
                          <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          // Compact padding: py-2.5 instead of py-3
                          className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          placeholder="Ahmed Mohamed"
                          disabled={loading}
                          />
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 -mx-12 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Email</label>
                          <div className="relative">
                              <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                              placeholder="you@co.com"
                              disabled={loading}
                              />
                          </div>
                        </div>
                        <div>
                          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Phone</label>
                          <div className="relative">
                              <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                              placeholder="+20 123..."
                              disabled={loading}
                              />
                          </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className='-mx-12'>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Password</label>
                      <div className="relative">
                          <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          placeholder="••••••••"
                          disabled={loading}
                          />
                          <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                      </div>
                      {/* Slim Strength Meter */}
                      {formData.password && (
                          <div className="flex gap-1 mt-1.5 px-0.5">
                          {[1, 2, 3, 4, 5].map((level) => (
                              <div
                              key={level}
                              className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                                  level <= passwordStrength ? strengthColors[passwordStrength] : 'bg-gray-200'
                              }`}
                              />
                          ))}
                          </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className='-mx-12'>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1 mb-1 block">Confirm</label>
                      <div className="relative">
                          <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          placeholder="••••••••"
                          disabled={loading}
                          />
                          <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 pt-1">
                        <input type="checkbox" required className="mt-0.5 w-3.5 h-3.5 text-yellow-500 rounded border-gray-300 focus:ring-yellow-400 cursor-pointer" />
                        <div className="text-[10px] text-gray-500 leading-tight">
                            I agree to <Link to="/terms" className="text-gray-800 font-medium hover:underline">Terms</Link> and <Link to="/privacy" className="text-gray-800 font-medium hover:underline">Privacy Policy</Link>.
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FCD34D] hover:bg-[#fbbf24] text-gray-900 font-bold py-3 rounded-xl text-sm transition-all transform active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                    >
                    {loading ? 'Creating...' : 'Create Account'}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}