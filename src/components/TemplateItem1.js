import React, { useState } from 'react';
import TemplateModal from './TemplateModal';

function TemplateItem1({ template }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="template-item">
      <img src={template.imageUrl} alt={template.title} className="template-image" onClick={openModal} />
      <div className="template-info">
        <h3>{template.title}</h3>
        <p>{template.description}</p>
        <button className="view-button" onClick={openModal}>View Template</button>
      </div>

      {showModal && <TemplateModal template={template} closeModal={closeModal} />}
    </div>
  );
}

export default TemplateItem1;
