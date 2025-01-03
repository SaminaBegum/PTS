import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import WebTemplateCollection from './components/WebTemplateCollection';
import CategoryFilter from './components/CategoryFilter';
import CoursesTraining from './components/CoursesTraining'; // Import the new page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <ImageSlider />
              <WebTemplateCollection />
              <CategoryFilter />
              <Footer />
            </>
          } />
          <Route path="/courses" element={<CoursesTraining />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
