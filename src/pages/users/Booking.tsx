// src/pages/user/Booking.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Clock, Star, CheckCircle, ArrowRight, ArrowLeft, DollarSign } from 'lucide-react';
import type { BookingData } from '../../api/bookingApi';

export default function Booking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading] = useState(false);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({
    service: '',
    date: '',
    time: '',
    consultant: '',
    notes: '',
    price: 0
  });

  const services = [
    { id: 1, name: 'Financial Consultation', price: 500, duration: '60 min' },
    { id: 2, name: 'Company Formation', price: 2000, duration: '120 min' },
    { id: 3, name: 'Investment Management', price: 1500, duration: '90 min' },
    { id: 4, name: 'Financial Planning', price: 800, duration: '60 min' },
    { id: 5, name: 'Tax Consulting', price: 1000, duration: '75 min' }
  ];

  const consultants = [
    { id: 1, name: 'Dr. Mohamed Ahmed', specialty: 'Financial Expert', rating: 4.9 },
    { id: 2, name: 'Sarah Ali', specialty: 'Investment Analyst', rating: 4.8 },
    { id: 3, name: 'Khaled Mahmoud', specialty: 'Tax Consultant', rating: 4.7 },
    { id: 4, name: 'Nour Hassan', specialty: 'Planning Expert', rating: 4.9 }
  ];

  const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];

  const handleNext = async () => {
    if (step === 1 && !bookingData.service) {
      alert('Please select a service');
      return;
    }
    if (step === 2 && (!bookingData.date || !bookingData.time)) {
      alert('Please select date and time');
      return;
    }
    if (step === 3 && !bookingData.consultant) {
      alert('Please select a consultant');
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Save booking and go to payment
      navigate('/payment', { state: { bookingData } });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Book Your Consultation</h1>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-12">
          {['Service', 'Date & Time', 'Consultant', 'Confirmation'].map((label, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                step > i + 1 ? 'bg-green-500 text-white' : 
                step === i + 1 ? 'bg-blue-600 text-white' : 
                'bg-gray-300 text-gray-600'
              }`}>
                {step > i + 1 ? <CheckCircle className="w-6 h-6" /> : i + 1}
              </div>
              <p className="text-xs mt-2 text-center text-gray-600 font-medium">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Select Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map(service => (
                  <div
                    key={service.id}
                    onClick={() => setBookingData({...bookingData, service: service.name, price: service.price})}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                      bookingData.service === service.name 
                        ? 'border-blue-600 bg-blue-50 shadow-lg' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="text-blue-600 font-bold flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Select Date & Time</h2>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Available Times</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setBookingData({...bookingData, time})}
                      className={`py-3 rounded-lg font-bold transition-all ${
                        bookingData.time === time 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Consultant Selection */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose Consultant</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {consultants.map(consultant => (
                  <div
                    key={consultant.id}
                    onClick={() => setBookingData({...bookingData, consultant: consultant.name})}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                      bookingData.consultant === consultant.name 
                        ? 'border-blue-600 bg-blue-50 shadow-lg' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                      <div>
                        <h3 className="font-bold">{consultant.name}</h3>
                        <p className="text-sm text-gray-600">{consultant.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-700">{consultant.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Confirm Booking</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-bold">{bookingData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-bold">{bookingData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-bold">{bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consultant:</span>
                  <span className="font-bold">{bookingData.consultant}</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-xl">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold text-blue-600">${bookingData.price}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700 font-bold mb-2">Additional Notes (Optional)</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                  placeholder="Any special requirements or notes..."
                ></textarea>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all ml-auto disabled:opacity-50"
            >
              {step === 4 ? 'Proceed to Payment' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
