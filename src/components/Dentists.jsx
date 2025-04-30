import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Dentists.css';
import './animations.css';
import doc1 from '../doc1.png';
import doc2 from '../doc2.png';
import doc3 from '../doc3.png';
import doc4 from '../doc4.png';

const Dentists = () => {
  const dentists = [
    {
      image: doc1,
      name: "Dr. Smith",
      specialty: "Orthodontist"
    },
    {
      image: doc2,
      name: "Dr. Johnson",
      specialty: "General Dentist"
    },
    {
      image: doc3,
      name: "Dr. Williams",
      specialty: "Cosmetic Dentist"
    },
    {
      image: doc4,
      name: "Dr. White",
      specialty: "Pediatric Dentist"
    },
    {
      image: doc2,
      name: "Dr. Davis",
      specialty: "Oral Surgeon"
    },
    {
      image: doc3,
      name: "Dr. Miller",
      specialty: "Periodontist"
    }
  ];

  return (
    <section id="dentists" className="dentists-section py-5">
      <Container>
        <div className="section-title text-center">
          <h2 className="gradient-text">Our Dedicated Dentists</h2>
        </div>
        <Carousel className="stagger-animation" interval={1000}>
          {dentists.map((dentist, index) => (
            <Carousel.Item key={index}>
              <div className="dentist-card text-center">
                <img src={dentist.image} alt={dentist.name} className="dentist-image" />
                <h3 className="mt-3">{dentist.name}</h3>
                <p>{dentist.specialty}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Dentists;