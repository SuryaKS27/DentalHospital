import React from 'react';
import { useNavigate } from 'react-router-dom';  // Add this import
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';
import toothCracked from '../Tooth Cracked.png';
import dentalmachine from '../Dental Machine.png';
import teeth from '../Set of Teeth.png'; 
import toothache from '../Toothache.png';
import oral from '../Dental Mirror.png';
import ped from '../Tooth.png'; // Fixed import

const Services = () => {
  const services = [
    {
      icon: toothCracked,  // Use the imported image
      title: "General Dentistry",
      description: "Comprehensive dental check-ups, cleanings, and preventative care for patients of all ages."
    },
    {
      icon: dentalmachine,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with teeth whitening, veneers, bonding, and other aesthetic procedures."
    },
    {
      icon: teeth,
      title: "Orthodontics",
      description: "Correct misaligned teeth and jaws with braces, clear aligners, and other orthodontic treatments."
    },
    {
      icon: oral,
      title: "Oral Surgery",
      description: "Expert surgical procedures including tooth extractions, implant placement, and bone grafting."
    },
    {
      icon: ped,
      title: "Pediatric Dentistry",
      description: "Child-friendly dental care in a comfortable environment designed for young patients."
    },
    {
      icon: toothache,
      title: "Emergency Care",
      description: "Prompt treatment for dental emergencies including severe pain, trauma, and broken teeth."
    }
  ];

  const navigate = useNavigate();  // Add this hook

  const handleMoreServices = () => {  // Add this function
    navigate('/services');
  };

  return (
    <section className="services-section">
      <Container>
        <div className="text-center mb-5">
          <h2>Our Services</h2>
          <p className="services-subtitle">
            Comprehensive dental care services using the latest 
            technology and techniques for your optimal oral health.
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="service-card">
                <Card.Body className="text-center">
                  <div className="service-icon-wrapper">
                    <img src={service.icon} alt={service.title} className="service-icon" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <button 
            className="more-services-btn"
            onClick={handleMoreServices}  // Add this onClick handler
          >
            More About our Services
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Services;