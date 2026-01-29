// src/pages/user/Dashboard.tsx
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, CheckCircle, Star, Eye, Settings, LogOut } from 'lucide-react';
import { bookingApi } from '../../api/bookingApi';

// تعريف واجهة البيانات لحل مشكلة النوع (Type)
interface Booking {
  id: number;
  service: string;
  date: string;
  time: string;
  consultant: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
}

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  
  // تحديد أن المصفوفة ستحتوي على عناصر من نوع Booking
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      setLoading(true);
      // محاولة جلب البيانات من الـ API
      const data = await bookingApi.getUserBookings();
      setBookings(data);
      
      // Mock data for now (سيتم استبدال الـ data القادمة من الـ API بهذه المصفوفة)
      const mockData: Booking[] = [
        { 
          id: 1, 
          service: 'Financial Consultation', 
          date: '2026-02-10', 
          time: '10:30', 
          consultant: 'Dr. Mohamed Ahmed', 
          status: 'upcoming', 
          price: 570 
        },
        { 
          id: 2, 
          service: 'Financial Planning', 
          date: '2026-01-15', 
          time: '14:00', 
          consultant: 'Nour Hassan', 
          status: 'completed', 
          price: 912 
        }
      ];
      setBookings(mockData);
    } catch (error) {
      console.error('Failed to load bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const stats = [
    { label: 'Upcoming Bookings', value: '1', icon: Calendar, color: 'blue' },
    { label: 'Completed', value: '2', icon: CheckCircle, color: 'green' },
    { label: 'Total Spent', value: '$1,482', icon: DollarSign, color: 'purple' },
    { label: 'Points', value: '150', icon: Star, color: 'yellow' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-blue-100">Here's your consultation overview</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-3">
                <stat.icon className={`w-10 h-10 text-${stat.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 flex gap-2">
          {['Bookings', 'Invoices', 'Settings'].map((tab, i) => {
            const tabKey = ['bookings', 'invoices', 'settings'][i];
            return (
              <button
                key={i}
                onClick={() => setActiveTab(tabKey)}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tabKey
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
              <button
                onClick={() => navigate('/booking')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all"
              >
                + New Booking
              </button>
            </div>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{booking.service}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {booking.date} - {booking.time}
                          </p>
                          <p>Consultant: {booking.consultant}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${
                          booking.status === 'upcoming' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {booking.status}
                        </span>
                        <p className="text-lg font-bold text-gray-800 mt-2">${booking.price}</p>
                      </div>
                    </div>
                    {booking.status === 'upcoming' && (
                      <div className="flex gap-3">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
                          View Details
                        </button>
                        <button className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold hover:bg-red-50 transition-all">
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Invoices</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Invoice #</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Date</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Service</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Amount</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Status</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, date: '2026-01-15', service: 'Financial Planning', amount: 912, status: 'Paid' }
                  ].map(invoice => (
                    <tr key={invoice.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">#{invoice.id}</td>
                      <td className="px-6 py-4">{invoice.date}</td>
                      <td className="px-6 py-4">{invoice.service}</td>
                      <td className="px-6 py-4 font-bold">${invoice.amount}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:underline font-bold flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Settings className="w-7 h-7" />
              Account Settings
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                  defaultValue={user?.name}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                  defaultValue={user?.email}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                  placeholder="+20 123 456 7890"
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}