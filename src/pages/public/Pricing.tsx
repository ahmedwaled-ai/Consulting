// ============================================
// 2. src/pages/public/Pricing.tsx - NEW FILE
// User chooses plan after registration
// ============================================
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const fromRegistration = location.state?.fromRegistration;
  const userData = location.state?.userData;

  const plans = [
    {
      name: 'Basic Consultation',
      price: 99,
      duration: '30 minutes',
      features: [
        'One-on-one consultation',
        'Initial business assessment',
        'Action plan recommendations',
        'Email support for 7 days'
      ],
      popular: false
    },
    {
      name: 'Professional Package',
      price: 299,
      duration: '2 hours',
      features: [
        'In-depth business analysis',
        'Custom strategy development',
        'Financial review',
        'Market positioning advice',
        '30-day email & call support',
        'Follow-up session included'
      ],
      popular: true
    },
    {
      name: 'Enterprise Solution',
      price: 999,
      duration: 'Full day',
      features: [
        'Comprehensive audit',
        'Team workshops',
        'Implementation roadmap',
        'Ongoing support (90 days)',
        'Quarterly check-ins',
        'Priority access to consultants',
        'Custom reporting dashboard'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (plan: typeof plans[0]) => {
    // ✅ FIXED: Create booking data with plan info
    const bookingData = {
      service: plan.name,
      consultant: 'CID Consulting Team',
      date: 'To be scheduled',
      time: 'Flexible',
      duration: plan.duration,
      price: plan.price,
      description: plan.features.join(', '),
      customerName: userData?.name || '',
      customerEmail: userData?.email || ''
    };

    // Navigate to Payment with complete booking data
    navigate('/Payment', {
      state: {
        bookingData,
        fromPricing: true,
        isNewRegistration: fromRegistration
      }
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          {fromRegistration && (
            <div className="inline-block mb-4 px-6 py-2 bg-green-100 border border-green-300 rounded-full">
              <p className="text-green-800 font-semibold">
                ✅ Account Created! Welcome {userData?.name}!
              </p>
            </div>
          )}
          <h1 className="text-5xl font-black text-gray-800 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select the consulting package that best fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-2xl shadow-2xl p-8 
                transition-all duration-300 hover:scale-105
                ${plan.popular ? 'ring-4 ring-blue-500' : ''}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-black text-blue-600">
                  ${plan.price}
                </span>
                <span className="text-gray-500 ml-2">
                  / {plan.duration}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Select Button */}
              <button
                onClick={() => handleSelectPlan(plan)}
                className={`
                  w-full py-3 rounded-xl font-bold text-lg transition-all
                  ${plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }
                `}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg px-8 py-4">
            <p className="text-gray-700 font-semibold">
              💯 100% Satisfaction Guaranteed or Your Money Back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
