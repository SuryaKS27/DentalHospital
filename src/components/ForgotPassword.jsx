import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(user => user.email === formData.email);

    if (userIndex === -1) {
      setError('Email not found');
      return;
    }

    users[userIndex].password = formData.newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    setSuccess(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="forgot-password-page">
      <Container>
        <div className="forgot-password-container">
          <div className="forgot-password-form-section">
            <h1>Reset your password</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Password reset successful! Redirecting to login...</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="password" 
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Set New Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter the new password again"
                  required
                />
              </Form.Group>

              <Button 
                type="submit"
                variant="outline-primary"
                className="w-100"
                style={{ 
                  backgroundColor: 'white', 
                  color: '#0066FF', 
                  borderColor: '#0066FF' 
                }}
              >
                Reset Password
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;