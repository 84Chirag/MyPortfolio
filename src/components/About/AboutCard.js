import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chirag Vijay gour                                                                                                                                                                                                                               </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently a Freelancer at Mumbai.
            <br />
            I have completed Graduation From Gurukul College of Commerce (Ghatkopar) in B.com (IT) and Worked As a Web Developer Intern in Alive Inc. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Small gestures can have a big impact. Create where it matters."{" "}
          </p>
          <footer className="blockquote-footer">Chirag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
