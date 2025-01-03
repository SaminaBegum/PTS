import React from "react";

const FilterSection = ({ categories, properties, onCategoryChange, onPropertiesChange }) => {
  return (
    <div className="filter-section">
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={onCategoryChange}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="properties">Properties:</label>
        <select id="properties" multiple onChange={onPropertiesChange}>
          {properties.map((property, index) => (
            <option key={index} value={property}>
              {property}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
