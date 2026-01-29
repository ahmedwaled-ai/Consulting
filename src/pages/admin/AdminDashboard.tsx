// ============================================
// src/pages/admin/Dashboard.tsx
// ============================================
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar, DollarSign, Users, Package, BarChart3, TrendingUp, Edit, Trash2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const stats = [
    { label: 'Total Bookings', value: '245', change: '+12%', icon: Calendar, color: 'blue' },
    { label: 'Revenue', value: '$125,000', change: '+18%', icon: DollarSign, color: 'green' },
    { label: 'Clients', value: '189', change: '+8%', icon: Users, color: 'purple' },
    { label: 'Active Services', value: '12', change: '+2', icon: Package, color: 'orange' }
  ];

  const recentBookings = [
    { id: 1, client: 'Ahmed Mohamed', service: 'Financial Consultation', date: '2026-02-10', status: 'upcoming', amount: 570 },
    { id: 2, client: 'Fatma Ali', service: 'Company Formation', date: '2026-02-08', status: 'upcoming', amount: 2280 },
    { id: 3, client: 'Khaled Said', service: 'Investment Management', date: '2026-02-05', status: 'completed', amount: 1710 }
  ];

  const services = [
    { id: 1, name: 'Financial Consultation', price: 500, bookings: 45, active: true },
    { id: 2, name: 'Company Formation', price: 2000, bookings: 23, active: true },
    { id: 3, name: 'Investment Management', price: 1500, bookings: 34, active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your consulting business</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-3">
                <stat.icon className={`w-10 h-10 text-${stat.color}-600`} />
                <span className="text-green-600 text-sm font-bold">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Monthly Bookings</h3>
              <div className="h-64 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-20 h-20 text-blue-400" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Revenue Growth</h3>
              <div className="h-64 bg-linear-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-green-400" />
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 flex gap-2">
          {['Overview', 'Bookings', 'Services', 'Clients'].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(['overview', 'bookings', 'services', 'clients'][i])}
              className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                activeTab === ['overview', 'bookings', 'services', 'clients'][i]
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Manage Bookings</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
                + New Booking
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Client</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Service</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Date</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Status</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Amount</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map(booking => (
                    <tr key={booking.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold">{booking.client}</td>
                      <td className="px-6 py-4">{booking.service}</td>
                      <td className="px-6 py-4">{booking.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          booking.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold">${booking.amount}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Manage Services</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
                + New Service
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map(service => (
                <div key={service.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Price: <span className="font-bold">${service.price}</span></p>
                        <p>Bookings: <span className="font-bold">{service.bookings}</span></p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      service.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {service.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
                      Edit
                    </button>
                    <button className="flex-1 px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold hover:bg-red-50 transition-all">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}