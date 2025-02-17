import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
// import {
//   // AiFillGithub,
//   // AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { BsReddit } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Strong Passion for Mechanical Design engineering
              <br />
              <br /> I am good in
              <i>
                <b className="purple"> SolidWorks, Geomagic Design X and AutoCAD. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">CAD Modeling</b> and
                {" "}
                <b className="purple">
                Reverse Engineering
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for creating <b className="purple">Technical Drawing</b> and
              <i>
                <b className="purple">
                  {" "}
                  Advance Part Modeling and Surface Modeling
                </b>
              </i>
              {/* &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="tel:+916380127997"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaPhoneAlt />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:venkateshsvk007@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/+916380127997"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoLogoWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/venkateshsvk07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
