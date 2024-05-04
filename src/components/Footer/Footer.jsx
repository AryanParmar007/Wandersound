// Footer.js

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <div className="footer-section1">
            <h5>About Us</h5>
            <p>"At WanderSound, we specialize in providing immersive audio experiences that breathe life into historical places. Through our captivating narrations, we invite you to embark on a journey through time, uncovering the secrets and stories that have shaped our world."</p>
            </div>
          </Col>
          <Col md={4} className="footer-section">
            <div className="footer-section2">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
          </Col>
          <Col md={4} className="footer-section">
          <div className="footer-section3">
            <h5>Contact Us</h5>
            <p>209, UVPCE, Ganpat University</p>
            <p>Email: wandersound@gmail.com</p>
            <p>Phone: +91 81415 90802</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; {new Date().getFullYear()} WanderSound. All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <div className="social">
              <ul className="footer-social">
                <li><a href="https://www.facebook.com"><i className="ri-facebook-fill"></i></a></li>
                <li><a href="https://www.twitter.com"><i className="ri-twitter-fill"></i></a></li>
                <li><a href="https://www.linkedin.com"><i className="ri-linkedin-fill"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="ri-instagram-fill"></i></a></li>
              </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
