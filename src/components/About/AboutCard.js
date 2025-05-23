import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad Taufiq </span>
            from  Beranang, Selangor.
            <br />
            I am currently looking for an internship as <span className="purple"> UI/UX and Website Designer</span>.
            <br />
            I am currently undergoing Bachelor's Degree in Computer Science (Multimedia Computing).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Japanese
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(86 126 173)" }}>
            "Success is not Final, Failure is not Fatal"{" "}
          </p>
          <footer className="blockquote-footer">Winston Churchill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
