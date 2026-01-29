// ============================================
// 3. src/pages/user/Payment.tsx - UPDATED
// Receives booking data from Pricing or Booking pages
// ============================================
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // ✅ FIXED: Get booking data from location state
  const bookingData = location.state?.bookingData;
  // const fromPricing = location.state?.fromPricing;
  const isNewRegistration = location.state?.isNewRegistration;

  const [paymentData, setPaymentData] = useState({
    cardNumber: '', 
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ FIXED: Redirect if no booking data
  useEffect(() => {
    if (!bookingData) {
      navigate('/pricing');
    }
  }, [bookingData, navigate]);

  const handlePayment = async () => {
    if (!paymentData.cardNumber || !paymentData.cardName || !paymentData.expiryDate || !paymentData.cvv) {
      setError('Please fill in all card details');
      return;
    }

    // Basic card number validation
    if (paymentData.cardNumber.replace(/\s/g, '').length !== 16) {
      setError('Card number must be 16 digits');
      return;
    }

    // CVV validation
    if (paymentData.cvv.length !== 3) {
      setError('CVV must be 3 digits');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // ✅ TODO: Replace with real payment API call
      // const response = await api.post('/payments/create-intent', {
      //   booking_data: bookingData
      // });

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // ✅ Success - navigate to success page
      navigate('/payment-success', {
        state: {
          bookingData,
          paymentData: {
            amount: total,
            cardLast4: paymentData.cardNumber.slice(-4)
          }
        }
      });
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Payment failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Format card number as user types
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
    return formatted.slice(0, 19); // 16 digits + 3 spaces
  };

  // Format expiry date as user types
  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  // Calculate totals
  const tax = (bookingData?.price || 0) * 0.14;
  const total = (bookingData?.price || 0) + tax;

  if (!bookingData) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Complete Payment
        </h1>
        {isNewRegistration && (
          <p className="text-center text-green-600 font-semibold mb-8">
            🎉 Welcome! Complete your first booking
          </p>
        )}
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <CreditCard className="w-7 h-7 text-blue-600" />
              Card Details
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
            
            <div className="space-y-4">
              {/* Card Number */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({
                    ...paymentData, 
                    cardNumber: formatCardNumber(e.target.value)
                  })}
                  maxLength={19}
                />
              </div>
              
              {/* Cardholder Name */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Cardholder Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Ahmed Mohamed"
                  value={paymentData.cardName}
                  onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                />
              </div>
              
              {/* Expiry & CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Expiry Date</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData({
                      ...paymentData, 
                      expiryDate: formatExpiryDate(e.target.value)
                    })}
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">CVV</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="123"
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({
                      ...paymentData, 
                      cvv: e.target.value.replace(/\D/g, '').slice(0, 3)
                    })}
                    maxLength={3}
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 flex items-center gap-2">
                <Lock className="w-5 h-5 shrink-0" />
                <p>Your payment is 100% secure and encrypted with SSL</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-bold">{bookingData.service}</span>
                </div>
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-bold">{bookingData.duration}</span>
                </div>
                {bookingData.date !== 'To be scheduled' && (
                  <>
                    <div className="flex justify-between pb-3 border-b">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-bold">{bookingData.date}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-bold">{bookingData.time}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-gray-600">Consultant:</span>
                  <span className="font-bold">{bookingData.consultant}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Base Price:</span>
                  <span>${bookingData.price || 0}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (14%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold pt-4 border-t-2">
                  <span className="text-gray-800">Total:</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Pay ${total.toFixed(2)}
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="mt-6 flex justify-center gap-4">
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                SSL Secure
              </div>
              <div className="text-xs text-gray-500">256-bit Encryption</div>
              <div className="text-xs text-gray-500">PCI Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
