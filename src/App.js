import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Dentists from './components/Dentists';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Login from './components/Login';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';  // Add this import
import BookingPage from './components/BookingPage';
import Appointments from './components/Appointments';
import ProtectedRoute from './components/ProtectedRoute';
import FAQs from './components/FAQs';
import ForgotPassword from './components/ForgotPassword';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

function App() {
  // Remove the navigate hook from here
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Create a new component to use hooks
function AppContent() {
  const navigate = useNavigate();

  const handleAppointment = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      navigate('/booking', { state: { category: 'General Consultation' } });
    } else {
      sessionStorage.setItem('redirectAfterLogin', '/booking');
      sessionStorage.setItem('selectedService', 'General Consultation');
      navigate('/login');
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={
          <ProtectedRoute>
            <BookingPage />
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute>
            <Appointments />
          </ProtectedRoute>
        } />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Dentists />
            <Partners />
            <section className="appointment-section">
              <div className="container text-center py-5">
                <h2 className="mb-4">Ready to schedule your appointment?</h2>
                <div>
                  <button 
                    className="btn btn-primary rounded-pill me-3"
                    onClick={handleAppointment}
                  >
                    Book an Appointment Now
                  </button>
                  <button className="btn btn-dark rounded-pill">Call for Info</button>
                </div>
              </div>
            </section>
            <Footer />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </div>
  );
}

export default App;