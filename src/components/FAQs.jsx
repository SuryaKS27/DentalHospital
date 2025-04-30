import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import './FAQs.css';
import BackButton from './BackButton';


const FAQs = () => {
  return (
    <>
      <Navbar />
      <BackButton />
      <Container className="faqs-container my-5 pt-5">
        <h1 className="text-center mb-5">Frequently Asked Questions</h1>
        <p className="text-center mb-5">
          Find answers to common questions about our dental services, appointments,
          and insurance coverage
        </p>
        
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How often should I visit the dentist?</Accordion.Header>
            <Accordion.Body>
              We recommend visiting the dentist every 6 months for regular check-ups and professional cleaning. However, if you have specific dental issues, more frequent visits may be necessary.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What dental insurance do you accept?</Accordion.Header>
            <Accordion.Body>
              We accept most major dental insurance plans. Please contact our office to verify your specific insurance coverage.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>How can I manage dental anxiety?</Accordion.Header>
            <Accordion.Body>
              We offer various comfort measures and sedation options for anxious patients. Our team is trained to provide gentle care and will work with you to make your visit as comfortable as possible.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>What should I do in a dental emergency?</Accordion.Header>
            <Accordion.Body>
              Contact our office immediately for emergency dental care. For after-hours emergencies, call our emergency number. Keep the affected area clean and apply a cold compress if there's swelling.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>How can I improve my oral health at home?</Accordion.Header>
            <Accordion.Body>
              Maintain good oral hygiene by brushing twice daily, flossing daily, using fluoride toothpaste, maintaining a healthy diet, and limiting sugary foods and drinks.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>When should children have their first dental visit?</Accordion.Header>
            <Accordion.Body>
              Children should have their first dental visit by their first birthday or within 6 months of their first tooth erupting.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>How long do dental implants last?</Accordion.Header>
            <Accordion.Body>
              With proper care and maintenance, dental implants can last a lifetime. Regular dental check-ups and good oral hygiene are essential for implant longevity.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>Is teeth whitening safe?</Accordion.Header>
            <Accordion.Body>
              Professional teeth whitening is safe when performed under dental supervision. We offer both in-office and take-home whitening options.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="text-center mt-5">
          <h3>Still Have Questions?</h3>
          <p>If you couldn't find the answer to your question, please don't hesitate to contact our friendly team.</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-outline-primary">Call (555) 123-4567</button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FAQs;