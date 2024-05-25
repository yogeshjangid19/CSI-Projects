// src/SuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="success-container">
      <h1>Registration Successful</h1>
      <h2>Submitted Data</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};
;
export default SuccessPage;
