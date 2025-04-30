import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row className="main-footer">
          <Col md={4}>
            <h5>SMYL</h5>
            <p>Providing exceptional dental care with a patient-centered approach since 2004.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Nav.Link onClick={() => navigate('/')}>Home</Nav.Link></li>
              <li><Nav.Link onClick={() => navigate('/about')}>About Us</Nav.Link></li>
              <li><Nav.Link onClick={() => navigate('/services')}>Services</Nav.Link></li>
              <li><Nav.Link onClick={() => navigate('/#dentists')}>Dentists</Nav.Link></li>
              <li><Nav.Link onClick={() => navigate('/booking')}>Book Now</Nav.Link></li>
              <li><Nav.Link onClick={() => navigate('/faqs')}>FAQs</Nav.Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li>123 Dental Avenue, Suite 101</li>
              <li>Chennai, India 12345</li>
              <li>(555) 123-4567</li>
              <li>info@smylplus.com</li>
              <li>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</li>
            </ul>
          </Col>
        </Row>
        <Row className="bottom-footer">
          <Col md={6}>
            <p>© 2023 SMYL Plus. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav.Link 
              onClick={() => navigate('/privacy-policy')} 
              className="d-inline-block me-3"
            >
              Privacy Policy
            </Nav.Link>
            <Nav.Link 
              onClick={() => navigate('/terms-conditions')} 
              className="d-inline-block"
            >
              Terms & Conditions
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;