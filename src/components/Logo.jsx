import React from 'react';
import tblog from '../assets/tblog.svg';

function Logo({ width = '100px' }) {
  return (
    <div style={{ width: width }}>
      <img src={tblog} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default Logo;