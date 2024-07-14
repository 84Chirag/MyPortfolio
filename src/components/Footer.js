import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const up = document.querySelector('.screenup');
      if (window.scrollY > 15) {
        up.style.display = "block";
      } else {
        up.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year} CG</h3>
        </Col>
      </Row>
      <span className="screenup" onClick={scrollToTop} style={{ cursor: "pointer", position: "fixed", bottom: "20px", right: "20px", backgroundColor: "transparent", padding: "10px", borderRadius: "50%", display: "none", color:"purple", transition:"ease-in-out" }}>
        <FaArrowUp size="25px" />
      </span>
    </Container>
  );
}

export default Footer;
