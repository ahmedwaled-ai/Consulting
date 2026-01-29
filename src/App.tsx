// src/App.tsx
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';

// Context Providers
import { AuthProvider } from './context/AuthProvider';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatBot from './components/layout/ChatBot';

// Auth Components
import ProtectedRoute from './components/auth/ProtectedRoute';
import { GuestRoute } from './components/auth/GuestRoute';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Services from './pages/public/Service';
import {Register} from './pages/public/Register';
import Firm from './pages/public/Firm';
import Approach from './pages/public/Approach';
import Philosophy from './pages/public/Philosophy';
import Industry from './pages/public/Industry';
import Impact from './pages/public/Impact';
import Login  from './pages/public/Login';
import Finance from './pages/public/Finance';
import Tax from './pages/public/Tax';
import Audit from './pages/public/Audit';
import Advisory from './pages/public/Advisory';
import Growth from './pages/public/Growth';
import Insights from './pages/public/Insights';



// User Pages (Protected)
import Booking from './pages/users/Booking';
import { Payment } from './pages/users/Payment';
import UserDashboard from './pages/users/UserDashboard';

// Admin Pages (Protected + Admin Only)
import {AdminDashboard} from './pages/admin/AdminDashboard';
import {StaffManagement} from './pages/admin/StaffManagement';

// Scroll to top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StartAbusiness from './pages/public/StartAbusiness';





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// 404 Not Found Page
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-50">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-black text-blue-600 animate-pulse">404</h1>
        <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          {/* Fixed Navbar */}
          <Navbar />
          
          
          {/* Main Content with padding-top for fixed navbar */}
          <main                                                       >
            <Routes>
              {/* ========== Public Routes ========== */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/firm" element={<Firm />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/startabusiness" element={<StartAbusiness />} />
              <Route path="/insights" element={<Insights />} />
              
              <Route path="/industry/finance" element={<Finance />} />
              <Route path="/industry/tax" element={<Tax />} />
              <Route path="/industry/audit" element={<Audit />} />
              <Route path="/industry/advisory" element={<Advisory />} />
              <Route path="/industry/growth" element={<Growth />} />

              

              
              

              
              {/* ========== Auth Routes (Guest Only) ========== */}
              <Route 
                path="/login" 
                element={
                  <GuestRoute>
                    <Login />
                  </GuestRoute>
                } 
              />
              <Route 
                path="/register" 
                element={
                  <GuestRoute>
                    <Register />
                  </GuestRoute>
                } 
              />
              
              {/* ========== Protected User Routes ========== */}
              <Route 
                path="/booking" 
                element={
                  <ProtectedRoute>
                    <Booking />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/payment" 
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* ========== Protected Admin Routes ========== */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/staff" 
                element={
                  <ProtectedRoute requireAdmin>
                    <StaffManagement />
                  </ProtectedRoute>
                } 
              />
              
              {/* ========== 404 Page ========== */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Floating ChatBot */}
          <ChatBot />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;