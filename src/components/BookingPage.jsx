import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import './BookingPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import BackButton from './BackButton';


const BookingPage = () => {
  const location = useLocation();
  const selectedCategory = location.state?.category || sessionStorage.getItem('selectedService') || '';

  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    category: selectedCategory,
    date: '',
    time: ''
  });

  useEffect(() => {
    sessionStorage.removeItem('selectedService');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z ]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) {
      setError('Name should only contain letters and spaces (min 2 characters).');
      return false;
    }

    if (isNaN(formData.age) || +formData.age < 1 || +formData.age > 120) {
      setError('Age must be a number between 1 and 120.');
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      setError('Phone number must be exactly 10 digits.');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!formData.category) {
      setError('Please select a service category.');
      return false;
    }

    if (!formData.date || new Date(formData.date) < new Date(new Date().toDateString())) {
      setError('Please select a valid future date.');
      return false;
    }

    if (!formData.time) {
      setError('Please select a time slot.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (!validateForm()) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const appointment = {
      ...formData,
      userId: currentUser.id,
      status: 'pending',
    };

    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    navigate('/appointments');
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <Container className="booking-container">
        <h2 className="text-center mb-4">Book Your Appointment</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Name is required and must be valid.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              required
              type="number"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Enter a valid age between 1 and 120.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              required
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Phone must be 10 digits.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              required
              type="email"
              placeholder="Email ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="General Dentistry">General Dentistry</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Orthodontics">Orthodontics</option>
              <option value="Oral Surgery">Oral Surgery</option>
              <option value="Pediatric Dentistry">Pediatric Dentistry</option>
              <option value="Emergency Care">Emergency Care</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a category.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
            <Form.Control.Feedback type="invalid">
              Please select a valid future date.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              required
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please select a time slot.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="w-100">
            Book Appointment
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default BookingPage;
