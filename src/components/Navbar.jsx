import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png';

const NavigationBar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleHome = () => {
    navigate('/');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleServices = () => {
    navigate('/services');
  };

  const handleBooking = () => {
    if (currentUser) {
      navigate('/booking', { state: { category: 'General Consultation' } });
    } else {
      sessionStorage.setItem('redirectAfterLogin', '/booking');
      sessionStorage.setItem('selectedService', 'General Consultation');
      navigate('/login');
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const scrollToDentists = (e) => {
      e.preventDefault();
      const dentistsSection = document.getElementById('dentists');
      if (dentistsSection) {
        dentistsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#dentists');
      }
    };
  
    return (
      <Navbar bg="white" expand="lg" fixed="top" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="SMYL" height="30" />
            <span className="ms-2">SMYL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link onClick={handleHome}>Home</Nav.Link>
              <Nav.Link onClick={handleAbout}>About us</Nav.Link>
              <Nav.Link onClick={handleServices}>Services</Nav.Link>
              <Nav.Link onClick={handleBooking}>Book Now</Nav.Link>
              <Nav.Link href="#dentists" onClick={scrollToDentists}>Dentists</Nav.Link>
              <Nav.Link href="#contact" onClick={scrollToContact}>Contact Us</Nav.Link>
              {currentUser && <Nav.Link href="/appointments">Appointments</Nav.Link>}
            </Nav>
            <div className="d-flex">
              {currentUser ? (
                <Button 
                  variant="danger" 
                  className="rounded-pill"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button 
                    variant="primary" 
                    className="me-2 rounded-pill"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="primary" 
                    className="rounded-pill"
                    onClick={() => navigate('/signup')}
                  >
                    Signup
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;