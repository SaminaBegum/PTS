import React, { useState, useEffect } from "react";
import "../components/WebTemplateCollection1.css";

// Import images directly
import filter1 from "../assets/filter-1.jpg";
import filter2 from "../assets/filter-2.jpg";
import filter3 from "../assets/filter-3.jpg";
import filter4 from "../assets/filter-4.jpg";

const WebTemplateCollection1 = () => {
  const templates = [
    {
      id: 1,
      name: "Portfolio Template",
      category: "Admin Templates",
      properties: ["Responsive"],
      image: filter1, // Use imported images
    },
    {
      id: 2,
      name: "Ecommerce Template",
      category: "Email Templates",
      properties: ["Retina Ready"],
      image: filter2,
    },
    {
      id: 3,
      name: "Agency Template",
      category: "Site Templates",
      properties: ["PSD Files Included"],
      image: filter3,
    },
    {
      id: 4,
      name: "Landing Page",
      category: "Landing Page Templates",
      properties: ["Retina Ready"],
      image: filter4,
    },
  ];

  const categories = [
    { name: "Admin Templates", count: 421 },
    { name: "Email Templates", count: 263 },
    { name: "Site Templates", count: 5914 },
    { name: "Landing Page Templates", count: 3032 },
  ];

  const properties = [
    { name: "Responsive", count: 6476 },
    { name: "Retina Ready", count: 4451 },
    { name: "PSD Files Included", count: 971 },
    { name: "SKETCH Files Included", count: 60 },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  const handlePropertiesChange = (property) => {
    setSelectedProperties((prevSelected) =>
      prevSelected.includes(property)
        ? prevSelected.filter((prop) => prop !== property)
        : [...prevSelected, property]
    );
  };

  const handleTemplateClick = (image) => {
    setSelectedImage(image);
  };

  const handlePreviewClick = () => {
    if (selectedImage) {
      window.open(selectedImage, "_blank"); // Open the image in a new tab as preview
    }
  };

  useEffect(() => {
    const filtered = templates.filter((template) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(template.category);
      const matchesProperties =
        selectedProperties.length === 0 ||
        template.properties.some((prop) => selectedProperties.includes(prop));
      return matchesCategory && matchesProperties;
    });
    setFilteredTemplates(filtered);

    if (!filtered.some((template) => template.image === selectedImage)) {
      setSelectedImage(null);
    }
  }, [selectedCategories, selectedProperties]);

  return (
    <div className="web-template-collection1">
      <div className="filter-sidebar">
        <div className="category-section">
          <h3>Categories</h3>
          {categories.map((category) => (
            <div key={category.name}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                />
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </div>
        <div className="properties-section">
          <h3>Properties</h3>
          {properties.map((property) => (
            <div key={property.name}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProperties.includes(property.name)}
                  onChange={() => handlePropertiesChange(property.name)}
                />
                {property.name} ({property.count})
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="template-images">
        <div className="filtered-templates">
          <h3>Templates</h3>
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="template"
                onClick={() => handleTemplateClick(template.image)}
              >
                <h4>{template.name}</h4>
                <p>Category: {template.category}</p>
                <p>Properties: {template.properties.join(", ")}</p>
              </div>
            ))
          ) : (
            <p>No templates found for the selected filters.</p>
          )}
        </div>
        <div className="image-section">
  {selectedImage ? (
    <>
      <img src={selectedImage} alt="Selected Template" />
      <button onClick={handlePreviewClick}>Preview</button>
    </>
  ) : (
    <p>Select a template to view the image.</p>
  )}
</div>
      </div>
    </div>
  );
};

export default WebTemplateCollection1;
