
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

  
const Layout = () => {
    const navigate = useNavigate();
  
    // Navigate to customer login/signup page
    const handleCustomerClick = () => {
      navigate('/CustomerLoginSignup.jsx');
    };
  
    // Navigate to vendor login/signup page
    const handleVendorClick = () => {
      navigate('/VendorLoginSignup.jsx');
    };
  
    return (
      <div className="split-page">
        <div className="left-half">
          <button className="role-button" onClick={handleCustomerClick}>
            Customer
          </button>
        </div>
        <div className="right-half">
          <button className="role-button" onClick={handleVendorClick}>
            Vendor
          </button>
        </div>
      </div>
    );
};

export default Layout;