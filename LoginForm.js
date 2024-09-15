import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Login Form Component
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error for the field being changed
  };

  // Validate the form
  const validateForm = () => {
    let errors = {};
    let valid = true;

    // Check if email is valid (basic regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is invalid.";
      valid = false;
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = "Password is required.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock API call to verify credentials
      const isValidUser = await verifyCredentials(formData.email, formData.password);
      if (isValidUser) {
        setErrorMessage("");
        history.push("/dashboard"); // Redirect to dashboard upon successful login
      } else {
        setErrorMessage("Invalid email or password.");
      }
    }
  };

  // Mock function to simulate credentials verification (backend call)
  const verifyCredentials = async (email, password) => {
    // Simulate a database of users
    const mockUsers = [
      { email: "user1@example.com", password: "password123" },
      { email: "user2@example.com", password: "mypassword" },
    ];

    // Check if user exists in the mock database
    const user = mockUsers.find((user) => user.email === email && user.password === password);
    return !!user;
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "error" : ""}
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={formErrors.password ? "error" : ""}
          />
          {formErrors.password && <span className="error-message">{formErrors.password}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Login</button>

        {/* Forgot Password and Register Links */}
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Register</a>
        </div>
      </form>

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
