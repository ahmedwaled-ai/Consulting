// ============================================
// 4. src/pages/user/PaymentSuccess.tsx - NEW FILE
// Shows payment confirmation
// ============================================
import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Home, Calendar, Download } from 'lucide-react';

export function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const bookingData = location.state?.bookingData;
  const paymentData = location.state?.paymentData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/dashboard');
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
        
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-black text-gray-800 mb-4">
          Payment Successful!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your booking has been confirmed
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Booking Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-semibold">{bookingData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-semibold">{bookingData.duration}</span>
            </div>
            {bookingData.date !== 'To be scheduled' && (
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">{bookingData.date}</span>
              </div>
            )}
            {bookingData.time !== 'Flexible' && (
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold">{bookingData.time}</span>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="text-green-600 font-bold text-lg">
                ${paymentData?.amount?.toFixed(2)}
              </span>
            </div>
            {paymentData?.cardLast4 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Card:</span>
                <span className="font-semibold">•••• {paymentData.cardLast4}</span>
              </div>
            )}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-bold text-blue-900 mb-3">What's Next?</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✅ Confirmation email sent to {bookingData.customerEmail || 'your email'}</li>
            <li>✅ Our team will contact you within 24 hours to schedule your session</li>
            <li>✅ You can view your booking in the Dashboard</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go to Dashboard
          </Link>
          
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
          >
            <Download className="w-5 h-5" />
            Download Receipt
          </button>
          
          <Link
            to="/bookings"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
          >
            <Calendar className="w-5 h-5" />
            View Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}
