// src/RegistrationForm.js
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (touchedFields[name]) {
      validateField(name, value);
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name} is required`;
    }
    setFormErrors({ ...formErrors, [name]: error });
  };

  const getErrorMessage = (field) => {
    return formErrors[field] ? <span className="error-message">{formErrors[field]}</span> : null;
  };

  return (
    <div className="container">
      <h4 className="already">Already Registered?</h4>
      <a className="login" href="">Login</a>
      <div className="form-container">
        <h2>Create New Account</h2>
        <form>
          <div className="form-row">
            <div className="form-group half-width">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              {getErrorMessage("firstName")}
            </div>
            <div className="form-group half-width">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              {getErrorMessage("lastName")}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label>Username*</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={formValues.username}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              {getErrorMessage("username")}
            </div>
            <div className="form-group half-width">
              <label>Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={formValues.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              {getErrorMessage("email")}
            </div>
          </div>

          <div className="form-group">
            <label>Password*</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                value={formValues.password}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              <button type="button" className="showpswrd" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
              {getErrorMessage("password")}
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number (include country code)*</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formValues.phone}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required
            />
            {getErrorMessage("phone")}
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label>Country*</label>
              <select
                name="country"
                value={formValues.country}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              >
                <option value="">Select</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                {/* Add more countries as needed */}
              </select>
              {getErrorMessage("country")}
            </div>
            <div className="form-group half-width">
              <label>City*</label>
              <select
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              >
                <option value="">Select</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="newyork">New York</option>
              </select>
              {getErrorMessage("city")}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label>PAN No</label>
              <input
                type="text"
                name="pan"
                placeholder="Enter your PAN No."
                value={formValues.pan}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {getErrorMessage("pan")}
            </div>
            <div className="form-group half-width">
              <label>Aadhaar No.*</label>
              <input
                type="text"
                name="aadhaar"
                placeholder="Enter your Aadhaar No."
                value={formValues.aadhaar}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              {getErrorMessage("aadhaar")}
            </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
