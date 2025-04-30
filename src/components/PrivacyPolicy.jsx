import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import './PrivacyPolicy.css';
import BackButton from './BackButton';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <BackButton />
      <Container className="privacy-policy-container">
        <h1 className="text-center mb-5">Privacy Policy</h1>
        
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>At SMYL, we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or receive services at our dental facilities.</p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <ul>
            <li>Contact information (name, email address, phone number, home address)</li>
            <li>Date of birth and government-issued identification</li>
            <li>Health insurance information</li>
            <li>Dental and medical history</li>
            <li>Payment information</li>
            <li>Appointment details and service history</li>
            <li>Communications with our staff</li>
          </ul>
        </section>

        {/* Add remaining sections as per the content provided */}
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;