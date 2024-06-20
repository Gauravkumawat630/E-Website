import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      // Implement signup logic (can be a call to an API)
      console.log('Form data:', formData);
      // For demo purposes, redirect to login after signup
      navigate('/login');
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      errors['name'] = 'Name is required';
    }

    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Email is required';
    }

    if (typeof formData.email !== 'undefined') {
      // Email regex validation
      let lastAtPos = formData.email.lastIndexOf('@');
      let lastDotPos = formData.email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formData.email.indexOf('@@') === -1 && lastDotPos > 2 && (formData.email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
      }
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
