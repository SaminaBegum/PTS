// Breadcrumbs.js
import React from 'react';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="breadcrumb-item">
          <a href={breadcrumb.link}>{breadcrumb.label}</a>
          {index < breadcrumbs.length - 1 && ' >> '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
