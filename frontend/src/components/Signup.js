import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  // Handle form submission
  const handelFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload on form submit
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert(response.data.message); // Show success message from server
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong'); // Show error message from server
    }
  };

  return (
    <>
      <form onSubmit={handelFormSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="form-control"
            id="fullname"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
