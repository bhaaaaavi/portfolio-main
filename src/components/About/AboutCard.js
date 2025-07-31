import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Vaibhavi Dave </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
A final-year IT student and aspiring Web Developer. I specialize in creating responsive websites using modern frontend tools and love solving real-world problems with code.            <br />
          
          
            <br />
           A curious tech learner shaping ideas into impactful digital projects.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creative & Analytical Skills:
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning & Sharing:
            </li>
            <li className="about-activity">
              <ImPointRight /> Communication & Leadership:
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code meets creativity — crafting websites that work and wow"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
