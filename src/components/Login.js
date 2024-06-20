// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate backend validation
      if (formData.email === 'gauravkumawat630@gmail.com' && formData.password === '123') {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Email is required';
    }

    if (!formData.password) {
      formIsValid = false;
      errors['password'] = 'Password is required';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {errors.general && <p className="error-message">{errors.general}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
   
    </div>
  );
};

export default Login;


