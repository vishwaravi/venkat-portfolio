import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col> */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} VK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="tel:+916380127997"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:venkateshsvk007@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                 <IoMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/venkateshsvk07"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/+916380127997"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
