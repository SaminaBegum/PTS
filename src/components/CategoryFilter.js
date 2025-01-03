import React, { useState, useEffect } from "react";
import "../components/CategoryFilter.css";
import { FaEye } from "react-icons/fa"; // Preview icon from react-icons

import Interior1 from "../assets/Interior-1.png";
import Interior2 from "../assets/Interior-2.png";
import Interior3 from "../assets/Interior-3.png";
import Restaurant1 from "../assets/Restaurant-1.png";
import Restaurant2 from "../assets/Restaurant-2.png";
import Restaurant3 from "../assets/Restaurant-3.png";
import Restaurant4 from "../assets/Restaurant-4.png";
import Restaurant5 from "../assets/Restaurant-5.png";
import Beauty1 from "../assets/beauty1.png"; // Add image for Beauty category
import Beauty2 from "../assets/beauty2.png"; // Add image for Beauty category
import Beauty3 from "../assets/beauty3.png";
import Beauty4 from "../assets/beauty4.png";
import Beauty5 from "../assets/beauty5.png";

const CategoryFilter = () => {
  const products = [
    
    // Added new "Interior Design" products
    { id: 1, category: "Interior Design", image: Interior1, properties: ["Responsive", "Retina Ready"], url: "https://interiordesign1.netlify.app/" },
    { id: 2, category: "Interior Design", image: Interior2, properties: ["PSD Files Included"], url: "https://interiordesign2.netlify.app/" },
    { id: 3, category: "Interior Design", image: Interior3, properties: ["SKETCH Files Included"], url: "https://interiordesign3.netlify.app/" },
    { id: 4, category: "Restro", image: Restaurant1, properties: ["Responsive", "PSD Files Included"], url: "https://restro1.netlify.app/" },
    { id: 5, category: "Restro", image: Restaurant2, properties: ["Retina Ready"], url: "https://restro2.netlify.app/" },
    { id: 6, category: "Restro", image: Restaurant3, properties: ["Responsive", "Retina Ready"], url: "https://restro3.netlify.app/" },
    { id: 7, category: "Restro", image: Restaurant4, properties: ["SKETCH Files Included"], url: "https://restro4.netlify.app/" },
    { id: 8, category: "Restro", image: Restaurant5, properties: ["Responsive", "SKETCH Files Included"], url: "https://restro5.netlify.app/" },
    // Added new "Beauty" products
    { id: 9, category: "Beauty", image: Beauty1, properties: ["Responsive", "Retina Ready"], url: "https://beauty1.netlify.app/" },
    { id: 10, category: "Beauty", image: Beauty2, properties: ["PSD Files Included"], url: "https://beauty2.netlify.app/" },
    { id: 11, category: "Beauty", image: Beauty3, properties: ["PSD Files Included"], url: "https://beauty2.netlify.app/" },
    { id: 12, category: "Beauty", image: Beauty4, properties: ["PSD Files Included"], url: "https://beauty2.netlify.app/" },
    { id: 13, category: "Beauty", image: Beauty5, properties: ["PSD Files Included"], url: "https://beauty2.netlify.app/" },
  ];

  const categories = [
    "All Categories",
    "Clothing",
    "Ecommerce",
    "Restro",
    "Cafe",
    "Interior Design",
    "Gym",
    "Portfolio",
    "Tatto",
    "Beauty", // Add Beauty to categories
  ];

  const ecommerceSubcategories = ["Clothing", "Jewelry", "Electronics"];

  const properties = [
    { name: "Responsive", count: 3299 },
    { name: "Retina Ready", count: 2363 },
    { name: "PSD Files Included", count: 210 },
    { name: "SKETCH Files Included", count: 28 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortOption, setSortOption] = useState("");

  const productsPerPage = 6;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePropertyChange = (property) => {
    setSelectedProperties((prevSelectedProperties) =>
      prevSelectedProperties.includes(property)
        ? prevSelectedProperties.filter((item) => item !== property)
        : [...prevSelectedProperties, property]
    );
  };

  useEffect(() => {
    let filtered = products;

    if (selectedCategory && selectedCategory !== "All Categories") {
      if (selectedCategory.startsWith("Ecommerce -")) {
        filtered = filtered.filter((product) => product.category.includes(selectedCategory.split(" - ")[1]));
      } else {
        filtered = filtered.filter((product) => product.category === selectedCategory);
      }
    }

    if (selectedProperties.length > 0) {
      filtered = filtered.filter((product) =>
        selectedProperties.every((property) => product.properties.includes(property))
      );
    }

    if (sortOption === "name") {
      filtered = [...filtered].sort((a, b) => a.url.localeCompare(b.url));
    } else if (sortOption === "category") {
      filtered = [...filtered].sort((a, b) => a.category.localeCompare(b.category));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedProperties, sortOption]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const toggleFilterVisibility = () => setIsFilterVisible(!isFilterVisible);

  return (
    <div className="category-filter-container-wrapper">
      <div className="top-options-container">
        <div className="top-options">
          <button onClick={toggleFilterVisibility} className="filter-toggle-button">
            {isFilterVisible ? "Hide Filters" : "Show Filters"}
          </button>
          <div className="sort-by">
            <label>Sort By: </label>
            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
              <option value="">Default</option>
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>

      <div className="category-filter-container">
        <div className="main-content">
          {isFilterVisible && (
            <div className="category-sidebar">
              <h3>Categories</h3>
              {categories.map((category) => (
                <div key={category} className="category-checkbox">
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </label>
                </div>
              ))}
              {selectedCategory === "Ecommerce" && (
                <div className="ecommerce-subcategories">
                  <h4>Subcategories</h4>
                  {ecommerceSubcategories.map((subcategory) => (
                    <div key={subcategory} className="category-checkbox">
                      <label>
                        <input
                          type="radio"
                          name="category"
                          value={`Ecommerce - ${subcategory}`}
                          checked={selectedCategory === `Ecommerce - ${subcategory}`}
                          onChange={() => handleCategoryChange(`Ecommerce - ${subcategory}`)}
                        />
                        {subcategory}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              <div className="properties-section">
                <h3>Properties</h3>
                {properties.map((property) => (
                  <div key={property.name} className="category-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedProperties.includes(property.name)}
                        onChange={() => handlePropertyChange(property.name)}
                      />
                      {property.name} ({property.count})
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="product-list">
            <div className="product-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div key={product.id} className="product-item">
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="product-link">
                      <div className="product-image-container">
                        <img src={product.image} alt={product.category} className="product-image" />
                        <FaEye className="preview-icon" />
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
