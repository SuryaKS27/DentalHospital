import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css';
import aboutimage from '../about.png';
import BackButton from './BackButton';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <div className="about-page">
        <div className="about-story">
          <h1>Our Story</h1>
          <div className="story-content">
            <div className="story-image">
              <img src={aboutimage} alt="Dental Care Products" />
            </div>
            <div className="story-text">
              <p>Founded in 2004, SMYL Plus began as a small practice with a big vision: to transform the dental experience by combining clinical excellence with exceptional patient care.</p>
              <p>Over the years, we've grown into a comprehensive dental care center while maintaining our commitment to personalized treatment. Our modern facility utilizes the latest technology and evidence-based techniques to provide superior care in a comfortable environment.</p>
              <p>Today, we proudly serve thousands of patients in our community, helping them achieve healthier smiles and improved quality of life through comprehensive dental services.</p>
            </div>
          </div>
        </div>

        <div className="core-values">
          <h2>Our Core Values</h2>
          <p className="values-subtitle">These principles guide everything we do at DentalCare Plus</p>
          
          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">🦷</div>
              <h3>Patient-Centered Care</h3>
              <p>We prioritize our patients' comfort, needs, and experiences above all else, ensuring every visit is positive and stress-free.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest standard of dental care through continuous education, advanced technology, and meticulous attention to detail.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We operate with honesty, transparency, and ethical standards in all aspects of our practice, building trust with every patient interaction.</p>
            </div>
          </div>
        </div>

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
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
