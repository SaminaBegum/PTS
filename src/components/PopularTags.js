import React from "react";


const PopularTags = ({ tags }) => {
  return (
    <div className="popular-tags">
      {tags.map((tag, index) => (
        <a
          key={index}
          href={tag.link}
          className={`tag ${tag.trending ? "trending" : ""}`}
        >
          {tag.label}
          <span className="icon">🔥</span> {/* Default icon */}
        </a>
      ))}
    </div>
  );
};

export default PopularTags;
