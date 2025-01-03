import React from 'react';
import Header from './Header'; // Reuse the Header
import Footer from './Footer'; // Reuse the Footer
import './CoursesTraining.css'; // Add styles for this page

function CoursesTraining() {
  return (
    <div className="courses-training-page">
      <Header />

      {/* Shared Content */}
      <section className="common-section">
        <h1>Welcome to Courses and Training</h1>
        <p>Explore our comprehensive training programs designed for skill development and excellence.</p>
      </section>

      {/* Unique Features for Courses and Training */}
      <section className="extra-features">
        <h2>Our Courses</h2>
        <ul className="course-list">
          <li>Web Development Bootcamp</li>
          <li>Data Science and Analytics</li>
          <li>UI/UX Design Essentials</li>
          <li>Advanced React.js Workshop</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>We offer hands-on training, expert instructors, and industry-recognized certifications.</p>
      </section>

      <Footer />
    </div>
  );
}

export default CoursesTraining;
