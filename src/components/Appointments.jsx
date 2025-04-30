import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import './Appointments.css';

const Appointments = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    .filter(apt => apt.userId === currentUser.id);

  return (
    <>
      <Navbar />
      <Container className="my-5 pt-5">
        <h1 className="mb-4">Your Appointments</h1>
        <Alert variant="info" className="mb-4">
          Please wait for our call to confirm your appointment. We'll contact you shortly!
        </Alert>
        <div className="appointments-list">
          {appointments.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <h3>Appointment Details</h3>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Service:</strong> {appointment.category}</p>
              <p><strong>Status:</strong> Pending Confirmation</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Appointments;