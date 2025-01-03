import React from 'react';
import { Link } from 'react-router-dom';

function TemplateItem({ template }) {
  return (
    <div className="template-item">
      <img src={template.imageUrl} alt={template.title} className="template-image" />
      <div className="template-info">
        <h3>{template.title}</h3>
        <p>{template.description}</p>
        <Link to={`/template/${template.id}`}>
          <button className="view-button">View Template</button>
        </Link>
      </div>
    </div>
  );
}

export default TemplateItem;
