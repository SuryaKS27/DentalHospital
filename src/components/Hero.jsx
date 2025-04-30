import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import toothImage from '../3dtooth.png';  // Fixed import path

const Hero = () => {
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

  const handleServices = () => {
    navigate('/services');
  };

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1>
              Unleash Your<br />
              <span className="text-primary">Boldest Smile</span> Yet.
            </h1>
            <div className="hero-taglines">
              <h2 className="text-primary">Straight.</h2>
              <h2 className="text-primary">Confident.</h2>
              <h2 className="text-primary">Unapologetic.</h2>
            </div>
            <p className="hero-description">
              Whether you're prepping for life's big moments or just want to feel 
              your best, we craft more than just <span className="text-primary">perfect smiles!</span> we build 
              confidence, one tooth at a time.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                className="rounded-pill me-3"
                onClick={handleAppointment}
              >
                Book an Appointment Now
              </Button>
              <Button 
                variant="outline-primary" 
                className="rounded-pill"
                onClick={handleServices}
              >
                Our Services
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="tooth-image-container">
              <img src={toothImage} alt="3D Tooth" className="tooth-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;