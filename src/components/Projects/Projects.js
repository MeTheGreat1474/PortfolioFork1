import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import darkboundrpg from "../../Assets/Projects/darkboundrpg.png";
import DarkReign from "../../Assets/Projects/DarkReign.png";
import dermanation from "../../Assets/Projects/dermanation.png";
import egringotts from "../../Assets/Projects/egringotts.png";
import opengl from "../../Assets/Projects/opengl.png";
import galahpanjang from "../../Assets/Projects/galahpanjang.png";
import hotmeal from "../../Assets/Projects/hotmeal.jpg";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={egringotts}
              isBlog={false}
              title="E-Gringotts"
              description="Banking website designed around the Wizarding World of Harry Potter build with React.js, MongoDB database and SpringBoot Java. Allows for account creation, Fund transfers, Currency exchange, Data visualization, AI integration and Secure data storing with salting and hashing."
              ghLink="https://github.com/MeTheGreat1474/E-Gringotts-Front-end"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dermanation}
              isBlog={false}
              title="Dermanation"
              description="A Donation and Volunteering android application built using Android Studio and Firebase database as align with United Nation's Social Development Goal 1: No Poverty"
              ghLink="https://github.com/MeTheGreat1474/Dermanation.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={darkboundrpg}
              isBlog={false}
              title="DarkBoundRPG"
              description="An Ascii-terminal Rogue-like RPG built using Java and AsciiArtDisplayer library hosted on on itch.io platform. It contains turn-based input, state event system and procedural world map generation."
              ghLink="https://github.com/hazzyxz/darkbound-rpg"
              demoLink="https://hazzyxz.itch.io/darkboundrpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={hotmeal}
                isBlog={false}
                title="HoTMeaL"
                description="A prototype web-based food ordering system where students can order food from local cafateria
                        through online"
                demoLink="https://methegreat1474.github.io/HoTMeaL/"
                ghLink="https://github.com/MeTheGreat1474/HoTMeaL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opengl}
              isBlog={false}
              title="OpenGLForFun"
              description="A fun and experimental OpenGL application for exploring graphics programming through the use of OpenGL Library using C++ language."
              ghLink="https://github.com/MeTheGreat1474/OpenGLForFun.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DarkReign}
              isBlog={false}
              title="DarkReign: Of Order & Chaos"
              description="A platformer with souls-like setting developed in Godot Engine for UM GAME JAM 2024/2025"
              demoLink="https://hazzyxz.itch.io/dark-reign-of-order-and-chaos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galahpanjang}
              isBlog={false}
              title="Galah Panjang"
              description="An educational website that teach about the Malaysian traditional game of Galah Panjang using slides and game for teaching"
              demoLink="https://methegreat1474.github.io/Galah-Panjang/"
              ghLink="https://github.com/MeTheGreat1474/Galah-Panjang"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
