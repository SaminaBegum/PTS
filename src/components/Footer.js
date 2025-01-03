import React from "react";
import "../components/Footer.css";
import logo from '../components/log.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';
import telegramIcon from '../assets/telegram.png';


const Footer = () => {
  return (
    <footer className="footer-top">
      {/* Footer Section with Logo, Social Links, Subscription, and Content */}
      <div className="footer-section">
          <h3>Follow Us & Subscribe</h3>
          <ul>
            <li className="footer-logo">
              <img src={logo} alt="My Logo" className="logo-image" />
            </li>
            <li className="footer-social">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src={telegramIcon} alt="Facebook Icon" /> 
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src={twitterIcon} alt="Twitter Icon" /> 
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src={linkedinIcon} alt="LinkedIn Icon" /> 
  </a>
  
</li>
            <li className="footer-content">
              <p>Stay updated with the latest news, offers, and updates.</p>
            </li>
            <li className="footer-subscription">
              <h4>Subscribe to Our Newsletter</h4>
              <input type="email" placeholder="Enter your email" />
              
            </li>
           
          </ul>
        </div>
        {/* Discover Section */}
        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/pricing">Our Pricing & Plans</a></li>
            <li><a href="/stock-video">Stock Video</a></li>
            <li><a href="/video-templates">Video Templates</a></li>
            <li><a href="/royalty-free-music">Royalty-Free Music</a></li>
            <li><a href="/stock-photos">Stock Photos</a></li>
            <li><a href="/fonts">Fonts</a></li>
            <li><a href="/monthly-free-files">Monthly Free Files</a></li>
            <li><a href="/popular-searches">Popular Searches</a></li>
          </ul>
        </div>

        {/* License & User Terms Section */}
        <div className="footer-section">
          <h3>License & User Terms</h3>
          <ul>
            <li><a href="/license-terms">License Terms</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/acceptable-use-policy">Acceptable Use Policy</a></li>
            <li><a href="/fair-use-policy">Fair Use Policy</a></li>
            <li><a href="/cookies">Cookies</a></li>
            <li><a href="/personal-info">Do not sell or share my personal information</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://tutsplus.com">Tuts+</a></li>
            <li><a href="https://video-music.com">Video & Music</a></li>
            <li><a href="https://design.com">Design</a></li>
            <li><a href="https://marketing.com">Marketing</a></li>
            <li><a href="https://web-design.com">Web Design</a></li>
            <li><a href="https://blog.com">Blog</a></li>
            <li><a href="https://help-center.com">Help Center</a></li>
            <li><a href="https://affiliate.com">Become an Affiliate</a></li>
          </ul>
        </div>

       

        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="https://who-we-are.com">Who We Are</a></li>
            <li><a href="https://our-products.com">Our Products</a></li>
            <li><a href="https://join-our-team.com">Join Our Team</a></li>
            <li><a href="https://forum.com">Our Forum</a></li>
            <li><a href="https://company-blog.com">Company Blog</a></li>
            <li><a href="https://become-an-author.com">Become an Author</a></li>
            <li><a href="https://author-sign-in.com">Author Sign In</a></li>
            <li><a href="https://author-help-center.com">Author Help Center</a></li>
          </ul>
        </div>

       
     

      
    </footer>
  );
};

export default Footer;
