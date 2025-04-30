import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import aboutimage from '../about.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="about-image-container">
              <img 
                src={aboutimage} 
                alt="Dental Products" 
                className="about-image"
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className="about-content">
              <h2>About SMYL</h2>
              <div className="blue-line"></div>
              <p>
                With over 20 years of excellence in dental care, DentalCare Plus has 
                established itself as a trusted name in dental healthcare. Our state-of-
                the-art facility combines cutting-edge technology with compassionate 
                care to provide the best possible experience for our patients.
              </p>
              <p>
                Our team of highly qualified dentists, specialists, and support staff 
                work together to ensure that every patient receives personalized 
                attention and the highest quality of dental care.
              </p>
              <Button 
                variant="primary" 
                className="learn-more-btn"
                onClick={handleLearnMore}  // Add this onClick handler
              >
                Learn More About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;