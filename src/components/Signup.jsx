// import React, { useState } from 'react';
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
    
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
  
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
    
//     if (users.some(user => user.email === formData.email)) {
//       setError('Email already exists');
//       return;
//     }
  
//     const newUser = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email,
//       mobile: formData.mobile,
//       password: formData.password
//     };
  
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     localStorage.setItem('currentUser', JSON.stringify(newUser));
//     navigate('/');
//   };

//   return (
//     <div className="signup-page">
//       <Container>
//         <div className="signup-container">
//           <div className="signup-form-section">
//             <h1>Sign Up to SMYL New!</h1>
//             {error && <Alert variant="danger">{error}</Alert>}
//             <Form onSubmit={handleSignup}>
//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="text" 
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="signup-input"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Id"
//                   className="signup-input"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="tel" 
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   placeholder="Mobile No"
//                   className="signup-input"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="password" 
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Set Password"
//                   className="signup-input"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control 
//                   type="password" 
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Enter Password Again"
//                   className="signup-input"
//                   required
//                 />
//               </Form.Group>

//               <Button 
//                 className="signup-btn" 
//                 type="submit"
//                 variant="outline-primary"
//               >
//                 SignUp
//               </Button>

//               <div className="signup-links">
//                 <p className="login-text">
//                   Already have an account? {' '}
//                   <Button 
//                     variant="link" 
//                     onClick={handleLogin}
//                     className="p-0 text-white"
//                   >
//                     Login
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

// export default Signup;

import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    const { name, email, mobile, password, confirmPassword } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const nameRegex = /^[A-Za-z\s]+$/;
  
    if (!name.trim()) {
      setError('Name is required.');
      return false;
    }
    if (!nameRegex.test(name)) {
      setError('Name can only contain letters and spaces.');
      return false;
    }
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!mobile || !mobileRegex.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
  
    return true;
  };
  
  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.email === formData.email)) {
      setError('Email already exists.');
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    navigate('/');
  };

  return (
    <div className="signup-page">
      <Container>
        <div className="signup-container">
          <div className="signup-form-section">
            <h1>Sign Up to SMYL New!</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignup}>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="signup-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                  className="signup-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="tel" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No"
                  className="signup-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Set Password"
                  className="signup-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter Password Again"
                  className="signup-input"
                  required
                />
              </Form.Group>

              <Button 
                className="signup-btn" 
                type="submit"
                variant="outline-primary"
              >
                SignUp
              </Button>

              <div className="signup-links">
                <p className="login-text">
                  Already have an account?{' '}
                  <Button 
                    variant="link" 
                    onClick={handleLogin}
                    className="p-0 text-white"
                  >
                    Login
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

export default Signup;
