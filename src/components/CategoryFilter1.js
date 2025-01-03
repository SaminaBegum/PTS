import React, { useState } from "react";
import "../components/CategoryFilter1.css";
import {
  FaLayerGroup,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaMobile,
  FaEye,
  FaImage,
  FaShoppingCart,
} from "react-icons/fa";

import filter1 from "../assets/filter-1.jpg";
import filter2 from "../assets/filter-2.jpg";
import filter3 from "../assets/filter-3.jpg";
import filter4 from "../assets/filter-4.jpg";
import filter5 from "../assets/filter-5.jpg";
import filter6 from "../assets/filter-6.jpg";
import filter7 from "../assets/filter-7.png";
import filter8 from "../assets/filter-8.jpg";
import filter9 from "../assets/filter-9.jpg";
import filter10 from "../assets/filter-10.png";
import filter11 from "../assets/filter-11.jpg";
import filter12 from "../assets/filter-12.jpg";

const CategoryFilter1 = () => {
  // Function to open URL in a new tab
  const handlePreviewClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  const products = [
    { id: 1, name: "Product 1", category: "Admin Templates", image: filter1, url: "https://interiortemp1.netlify.app/" },
    { id: 2, name: "Product 2", category: "Email Templates", image: filter2, url: "https://interiortemp2.netlify.app/" },
    { id: 3, name: "Product 3", category: "Site Templates", image: filter3, url: "https://interiortemp3.netlify.app/" },
    { id: 4, name: "Product 4", category: "Landing Page Templates", image: filter4, url: "https://interiortemp4.netlify.app/" },
    { id: 5, name: "Product 5", category: "Responsive", image: filter5, url: "https://interiortemp5.netlify.app/" },
    { id: 6, name: "Product 6", category: "Retina Ready", image: filter6, url: "https://interiortemp6.netlify.app" },
    { id: 7, name: "Product 7", category: "PSD Files Included", image: filter7, url: "https://interiortemp7.netlify.app" },
    { id: 8, name: "Product 8", category: "Admin Templates", image: filter8, url: "https://interiortemp8.netlify.app/" },
    { id: 9, name: "Product 9", category: "Email Templates", image: filter9, url: "https://interiortemp9.netlify.app" },
    { id: 10, name: "Product 10", category: "Site Templates", image: filter10, url: "https://example10.netlify.app/" },
    { id: 11, name: "Product 11", category: "Landing Page Templates", image: filter11, url: "https://example11.netlify.app/" },
    { id: 12, name: "Product 12", category: "Responsive", image: filter12, url: "https://example12.netlify.app/" },
  ];

  const tabs = [
    { label: "View All", value: "", icon: <FaLayerGroup /> },
    { label: "Admin Templates", value: "Admin Templates", icon: <FaCode /> },
    { label: "Email Templates", value: "Email Templates", icon: <FaEnvelope /> },
    { label: "Site Templates", value: "Site Templates", icon: <FaRocket /> },
    { label: "Landing Page Templates", value: "Landing Page Templates", icon: <FaMobile /> },
    { label: "Responsive", value: "Responsive", icon: <FaMobile /> },
    { label: "Retina Ready", value: "Retina Ready", icon: <FaImage /> },
    { label: "PSD Files Included", value: "PSD Files Included", icon: <FaShoppingCart /> },
  ];

  const [selectedTab, setSelectedTab] = useState("");

  // Filter products based on selected tab
  const filteredProducts = selectedTab
    ? products.filter((product) => product.category === selectedTab).slice(0, 4)
    : products.slice(0, 12);

  return (
    <div className="category-filter-container1">
      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`tab-button ${selectedTab === tab.value ? "active" : ""}`}
            onClick={() => setSelectedTab(tab.value)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div
                  className="preview-icon"
                  onClick={() => handlePreviewClick(product.url)} // Opens the URL in a new tab
                >
                  <FaEye />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter1;
