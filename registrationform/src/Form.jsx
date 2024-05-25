// src/RegistrationForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const RegistrationForm = () => {
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
  const navigate = useNavigate();

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
    return formErrors[field] ? <span className="error-text">{formErrors[field]}</span> : null;
  };

  const isFormValid = () => {
    return Object.values(formValues).every(value => value.trim() !== "") &&
           Object.values(formErrors).every(error => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsTouched = Object.keys(formValues).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouchedFields(allFieldsTouched);

    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key].trim()) {
        newErrors[key] = `${key} is required`;
      }
    });
    setFormErrors(newErrors);

    if (isFormValid()) {
      navigate("/userpanel", { state: { formValues } });
    } else {
      alert("Registration failed. Enter the details properly");
    }
  };

  return (
    <div className="page-container">
      <h4 className="login-prompt">Already Registered?</h4>
      <a className="login-link" href="">Login</a>
      <div className="form-wrapper">
        <h2>Create An Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group half-width">
              <label>First Name {getErrorMessage("firstName")}</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
            <div className="input-group half-width">
              <label>Last Name {getErrorMessage("lastName")}</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Username {getErrorMessage("username")}</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={formValues.username}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
            <div className="input-group half-width">
              <label>Email Address {getErrorMessage("email")}</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={formValues.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password {getErrorMessage("password")}</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                value={formValues.password}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label>Phone Number (include country code)* {getErrorMessage("phone")}</label>
            <input
              type="number"
              name="phone"
              placeholder="+91 9876543210"
              value={formValues.phone}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Country {getErrorMessage("country")}</label>
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
                <option value="japan">Japan</option>
                <option value="korea">Korea</option>
                <option value="thailand">Thailand</option>
              </select>
            </div>
            <div className="input-group half-width">
              <label>City* {getErrorMessage("city")}</label>
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
                <option value="sanfrancisco">San Francisco</option>
                <option value="jaipur">Jaipur</option>
                <option value="tokyo">Tokyo</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>PAN No {getErrorMessage("pan")}</label>
              <input
                type="text"
                name="pan"
                placeholder="Enter your PAN No."
                value={formValues.pan}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="input-group half-width">
              <label>Aadhaar No {getErrorMessage("aadhaar")}</label>
              <input
                type="text"
                name="aadhaar"
                placeholder="Enter your Aadhaar No."
                value={formValues.aadhaar}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
