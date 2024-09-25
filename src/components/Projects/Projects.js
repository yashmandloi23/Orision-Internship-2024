import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import appwrite from "../../Assets/Projects/appwrite.png";
import suvidha from "../../Assets/Projects/suvidha.png";
import BMR from "../../Assets/Projects/BMR.png";
import printovert from "../../Assets/Projects/printovert.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import gm from '../../Assets/Projects/gm.png'
import steve from '../../Assets/Projects/steve.png'
import scrims from '../../Assets/Projects/scrims.png'

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
              imgPath={appwrite}
              isBlog={false}
              title="A Blog application"
              description="My personal blog applicaton  where you can share your thoughts and ideas."
              ghLink="https://github.com/yash sahu17/appWriteBlog"
              demoLink="https://app-write-blog.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printovert}
              isBlog={false}
              title="A E-commerce application"
              description="A e-commerce plateform where users can design thier product and purchase it seamlessly"
              ghLink="https://github.com/yash sahu17/PRINTOVERT"
              demoLink="https://printovert.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suvidha}
              isBlog={false}
              title="Suvidha oversease"
              description="A Internship project based on html css, bootstrap and js for opening the orgnaisation for all over the world  "
              ghLink="https://github.com/yash sahu17/Suvidha-foundation"
              demoLink="https://suvidha-foundation-lime.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMR}
              isBlog={false}
              title="BMR Calculator"
              description="A Basal metabolic Rate calculator for  men and women. who are more conciuos about their diet"
              ghLink="https://github.com/yash sahu17/BMR-calculator-"
              demoLink="https://bmr-calculator-indol.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gm}
              isBlog={false}
              title="AI assistant"
              description="An AI assistant app built on nextjs with  google gemini"
              ghLink="https://github.com/yash sahu17/X-AI"
              demoLink="https://x-ai-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrims}
              isBlog={false}
              title="AI assistant"
              description="Developed a entire User authentication system and maintained production grade codeLinkImplemented the complex player management system for gamers to monetise their skills"
              ghLink="https://github.com/yash sahu17/X-AI"
              demoLink="https://scrims-crown-pdks.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={steve}
              isBlog={false}
              title="AI assistant"
              description="A petiton plateform where fans of a youtuber wants to unban his youtube account"
              ghLink="https://github.com/yash sahu17/X-AI"
              demoLink="https://signforsteve.com"
            />
          </Col>

   

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
