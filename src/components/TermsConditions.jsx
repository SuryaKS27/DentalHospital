import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import './TermsConditions.css';
import BackButton from './BackButton';

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <BackButton />
      <Container className="terms-container">
        <h1 className="text-center mb-5">Terms and Conditions</h1>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the SMYL website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our website or services.</p>
        </section>

        <section className="terms-section">
          <h2>2. Use of Services</h2>
          <p>SMYL provides dental healthcare services and information through our website, mobile applications, and physical locations. You agree to use these services only for lawful purposes and in accordance with these terms.</p>
        </section>

        {/* Add remaining sections as per the content provided */}
      </Container>
      <Footer />
    </>
  );
};

export default TermsConditions;