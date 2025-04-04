import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AdSense from "../AdSense";
import shop from "../../Assets/Projects/shop.png";
import hotnews from "../../Assets/Projects/hotnews.png";
import sphere from "../../Assets/Projects/threejs.png";
import todo from "../../Assets/Projects/todo.png";
import gogym from "../../Assets/Projects/gogym.png";
import FlashMyBTC from "../../Assets/Projects/FlashMyBTC.png";
import dreamdiner from "../../Assets/Projects/dreamdiner.png";
import contactform from "../../Assets/Projects/contactform.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row>
          <Col md={12}>
            <AdSense adSlot="7495086870" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo web application"
              description="A simple Todo List web application built using HTML, CSS, and JavaScript. This app allows users to add, edit, delete, and view tasks they need to complete."
              ghLink="https://github.com/84Chirag/todo-list"
              demoLink="https://84chirag.github.io/todo-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlashMyBTC}
              isBlog={false}
              title="Flash My BTC"
              description="This is a simple Bitcoin generator website built using React. Users can interact with the interface to generate Bitcoin addresses and QR codes. It provides a straightforward way to create and manage Bitcoin transactions securely."
              ghLink="https://github.com/84Chirag/flash-my-btc"
              demoLink="https://flash-my-btc.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sphere}
              isBlog={false}
              title="Sphere ThreeJs"
              description="This project showcases a dynamic web application built with React and Three.js, leveraging Vite for efficient development. It features a rotating sphere animation using Three.js, with responsive design adjustments handled via media queries. The project includes integration of GSAP for animations and demonstrates best practices for managing assets like images and styles."
              ghLink="https://github.com/84Chirag/Sphere-ThreeJS"
              demoLink="https://sphere-three-js-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="E-Commerce Web Application"
              description="This project is a full-featured e-commerce web application designed to provide a seamless shopping experience. The frontend is built using React and Vite, offering fast load times and a responsive design. Key features include user authentication, a dynamic product store, and an intuitive user interface. It's still in progress."
              ghLink="https://github.com/84Chirag/Jewellery-shop"
              demoLink="https://jewellery-shop-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop API"
              description="A REST API for Shops Created Using Node, Express JS and MongoDB. This API provides a robust backend solution for managing and interacting with a store's data. It is built using Node.js and Express, making it scalable, efficient, and easy to customize."
              ghLink="https://github.com/84Chirag/Shop-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gogym}
              isBlog={false}
              title="GoGym"
              description="GoGym is your go-to destination for fitness and wellness. Our mission is to provide a motivating and supportive environment where you can achieve your health goals with ease."
              ghLink="https://github.com/84Chirag/GoGym"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotnews}
              isBlog={false}
              title="Hot News App"
              description="Hot News App is a web application that aggregates and displays news articles based on user-selected categories and regions. It utilizes the Google News API for fetching real-time news data and offers a seamless browsing experience with infinite scrolling."
              ghLink="https://github.com/84Chirag/React-NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dreamdiner}
              isBlog={false}
              title="Dream Diner: A Horror Choice Game"
              description="Welcome to Dream Diner, a spine-chilling interactive horror game crafted with React. Immerse yourself in a haunting narrative where every decision you make influences the outcome. Set in the eerie ambiance of a mysterious diner, you'll encounter unsettling choices that shape your fate."
              ghLink="https://github.com/84Chirag/dream-diner"
              demoLink="https://dream-diner.vercel.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactform}
              isBlog={false}
              title="Contact Form"
              description="Classic contact Form that I created as A first project while learning Web Development only using HTML and CSS."
              ghLink="https://github.com/84Chirag/contact-form"
              demoLink="https://84chirag.github.io/contact-form/"
            />
          </Col> 

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotnews}
              isBlog={false}
              title="Hot News App"
              description="Hot News App is a web application that aggregates and displays news articles based on user-selected categories and regions. It utilizes the Google News API for fetching real-time news data and offers a seamless browsing experience with infinite scrolling."
              ghLink="https://github.com/84Chirag/React-NewsApp"
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
