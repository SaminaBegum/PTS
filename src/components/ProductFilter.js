import React, { useState } from "react";
import { FaVideo, FaClock, FaRocket } from "react-icons/fa";

const ProductFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState(""); 
  const [sortBy, setSortBy] = useState("Popular"); 

  const products = [
    { id: 1, name: "Coming Soon Video", category: "Video", popularity: 90, icon: <FaVideo />, image: "image1.jpg" },
    { id: 2, name: "Coming Soon", category: "Soon", popularity: 80, icon: <FaClock />, image: "image2.jpg" },
    { id: 3, name: "Website Coming Soon", category: "Web", popularity: 95, icon: <FaRocket />, image: "image3.jpg" },
    { id: 4, name: "Video Background", category: "Video", popularity: 85, icon: <FaVideo />, image: "image4.jpg" },
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => !selectedFilter || product.category === selectedFilter)
    .sort((a, b) => (sortBy === "Popular" ? b.popularity - a.popularity : 0));

  return (
    <div>
      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <div onClick={() => setSelectedFilter("")} style={tabStyle}>All</div>
        <div onClick={() => setSelectedFilter("Video")} style={tabStyle}>
          <FaVideo /> Video
        </div>
        <div onClick={() => setSelectedFilter("Soon")} style={tabStyle}>
          <FaClock /> Soon
        </div>
        <div onClick={() => setSelectedFilter("Web")} style={tabStyle}>
          <FaRocket /> Web
        </div>
      </div>

      {/* Sort Dropdown */}
      <div style={{ marginBottom: "20px" }}>
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Popular">Popular</option>
        </select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={cardStyle}>
              {product.icon}
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <h4>{product.name}</h4>
              <p>Popularity: {product.popularity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

// Styles
const tabStyle = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  background: "#f9f9f9",
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
};

export default ProductFilter;
