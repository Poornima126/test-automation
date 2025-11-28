import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <div className="logo">
          <img src="/logo.jpg" alt="Cleveland/Price Inc." />
        </div>
      </div>
      <div className="header-content">
        <h1>Automated DCR System</h1>
      </div>
    </div>
  );
};

export default Header;
