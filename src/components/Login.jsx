// import React, { useState } from 'react';
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSignup = () => {
//     navigate('/signup');
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const user = users.find(u => u.email === formData.email && u.password === formData.password);
    
//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
//       sessionStorage.removeItem('redirectAfterLogin');
//       navigate(redirectPath);
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="login-page">
//       <Container>
//         <div className="login-container">
//           <div className="login-form-section">
//             <h1>Login to SMYL</h1>
//             {error && <Alert variant="danger">{error}</Alert>}
//             <Form onSubmit={handleLogin}>
//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Id"
//                   className="login-input"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="password" 
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   className="login-input"
//                   required
//                 />
//               </Form.Group>

//               <Button 
//                 className="login-btn" 
//                 type="submit"
//                 variant="outline-primary"
//                 style={{ 
//                   backgroundColor: 'white', 
//                   color: '#0066FF', 
//                   borderColor: '#0066FF' 
//                 }}
//               >
//                 Login
//               </Button>

//               <div className="login-links">
//                 <p className="signup-text">
//                   Don't have an account? {' '}
//                   <Button 
//                     variant="link" 
//                     onClick={handleSignup}
//                     className="p-0 text-white"
//                   >
//                     Sign Up
//                   </Button>
//                 </p>
//                 <p className="forgot-password-text">
//                   <Button 
//                     variant="link" 
//                     onClick={() => navigate('/forgot-password')}
//                     className="p-0 text-white"
//                   >
//                     Forgot Password?
//                   </Button>
//                 </p>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError(''); // Clear error on input change
  };

  const validateForm = () => {
    const { email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    return true;
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      navigate(redirectPath);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <Container>
        <div className="login-container">
          <div className="login-form-section">
            <h1>Login to SMYL</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                  className="login-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="login-input"
                  required
                />
              </Form.Group>

              <Button 
                className="login-btn" 
                type="submit"
                variant="outline-primary"
                style={{ 
                  backgroundColor: 'white', 
                  color: '#0066FF', 
                  borderColor: '#0066FF' 
                }}
              >
                Login
              </Button>

              <div className="login-links">
                <p className="signup-text">
                  Don't have an account?{' '}
                  <Button 
                    variant="link" 
                    onClick={handleSignup}
                    className="p-0 text-white"
                  >
                    Sign Up
                  </Button>
                </p>
                <p className="forgot-password-text">
                  <Button 
                    variant="link" 
                    onClick={() => navigate('/forgot-password')}
                    className="p-0 text-white"
                  >
                    Forgot Password?
                  </Button>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
