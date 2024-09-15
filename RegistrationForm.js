import React, { useState } from "react";

// Registration Form Component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

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

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Username is required.";
      valid = false;
    }

    // Check if email is valid (basic regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is invalid.";
      valid = false;
    }

    // Check password length
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock API call to check email uniqueness
      const emailIsUnique = await checkEmailUniqueness(formData.email);
      if (!emailIsUnique) {
        setFormErrors({ email: "Email is already taken." });
        return;
      }

      // Simulate form submission
      setSuccessMessage("Registration successful!");
      console.log("Form data submitted:", formData);

      // Clear form after submission
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  // Mock function to simulate email uniqueness check (backend call)
  const checkEmailUniqueness = async (email) => {
    const mockRegisteredEmails = ["test@example.com", "user@example.com"];
    return !mockRegisteredEmails.includes(email);
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={formErrors.username ? "error" : ""}
          />
          {formErrors.username && <span className="error-message">{formErrors.username}</span>}
        </div>

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

        {/* Confirm Password Field */}
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={formErrors.confirmPassword ? "error" : ""}
          />
          {formErrors.confirmPassword && <span className="error-message">{formErrors.confirmPassword}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
        <button type="button" onClick={() => setFormData({
          username: "", email: "", password: "", confirmPassword: ""
        })}>
          Cancel
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
