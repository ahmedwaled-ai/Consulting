// ============================================
// src/pages/admin/StaffManagement.tsx

import { Star } from "lucide-react";

// ============================================
export function StaffManagement() {
  const staff = [
    { id: 1, name: 'Dr. Mohamed Ahmed', role: 'Financial Expert', email: 'mohamed@company.com', bookings: 45, rating: 4.9, status: 'Active' },
    { id: 2, name: 'Sarah Ali', role: 'Investment Analyst', email: 'sara@company.com', bookings: 34, rating: 4.8, status: 'Active' },
    { id: 3, name: 'Khaled Mahmoud', role: 'Tax Consultant', email: 'khaled@company.com', bookings: 28, rating: 4.7, status: 'On Leave' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Staff Management</h1>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
            + Add New Staff
          </button>
        </div>

        {/* Staff Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {staff.map(member => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 bg-linear-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{member.bookings}</div>
                  <div className="text-xs text-gray-600">Bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    {member.rating}
                  </div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-xs text-gray-600">Hours/Week</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
                  Schedule
                </button>
                <button className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Time</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Saturday</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Sunday</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Monday</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Tuesday</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Wednesday</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-bold">Thursday</th>
                </tr>
              </thead>
              <tbody>
                {['09:00', '11:00', '13:00', '15:00', '17:00'].map((time, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">{time}</td>
                    {[...Array(6)].map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <div className={`px-3 py-2 rounded text-sm text-center ${
                          Math.random() > 0.5 ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {Math.random() > 0.5 ? 'Booked' : 'Available'}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}