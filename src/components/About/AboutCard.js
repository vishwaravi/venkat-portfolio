import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Venkatesh Vadivel </span>
            from <span className="purple"> Thanjavur, India.</span>
            <br />
            I am currently employed as a design engineer at TAKCIM Technology.
            <br />
            I am pursuing my BE in Mechanical Engineering at Sri Shakthi Institute of Engineering and Technology
            <br />
            <br />
            Apart from designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Mistakes make Perfect"{" "}
          </p>
          <footer className="blockquote-footer">Venkatesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
