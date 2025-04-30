import React from 'react';
import { Container} from 'react-bootstrap';
import './Partners.css';
import logo from '../logo1.png';

const Partners = () => {
  const partners = [
    { name: "Heartland Dental", logo: "/path-to-heartland-logo.png" },
    { name: "Aspire Dental", logo: "/path-to-aspire-logo.png" },
    { name: "Bupa Dental Care", logo: "/path-to-bupa-logo.png" },
    { name: "Smile Brands Inc.", logo: "/path-to-smile-brands-logo.png" }
  ];

  return (
    <section className="partners-section">
      <Container>
        <h2 className="text-center">Our Partners</h2>
        <div className="blue-underline"></div>
        <div className="partner-row">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={logo} alt="Tooth Background" className="tooth-bg" />
              <div className="partner-content">
                <h3>{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;