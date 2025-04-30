import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      onClick={() => navigate('/')}
      className="back-button"
      variant="outline-primary"
    >
      <i className="fas fa-arrow-left me-2"></i>
      Back to Home
    </Button>
  );
};

export default BackButton;