// src/pages/public/StartBusiness.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Briefcase, 
  MessageSquare, 
  ChevronRight, 
  Rocket,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function StartBusiness() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    industry: 'Finance',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // التحقق من الحقول
    if (!formData.fullName || !formData.email || !formData.companyName) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // محاكاة إرسال الطلب (API Call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Proposal Received</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our strategic architects are reviewing your deployment request. We will contact you within 24 hours.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
            Return to HQ <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-100 rounded-xl mb-4 text-blue-600">
            <Rocket size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Start Your Business</h1>
          <p className="text-gray-600">Initiate your strategic evolution with CID OS</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Business Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="john@company.com"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Company Name */}
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Company Name *</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Acme Corp"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Industry Selection */}
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Industry Vertical</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                disabled={loading}
              >
                <option value="Finance">Finance & Accounting</option>
                <option value="Tech">Digital Transformation</option>
                <option value="Audit">Audit & Assurance</option>
                <option value="Strategy">Strategic Advisory</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Strategic Intent</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Briefly describe your project goals..."
                disabled={loading}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing Deployment...
              </>
            ) : (
              <>
                Initialize Engagement
                <ChevronRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Already have a strategic account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-bold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}