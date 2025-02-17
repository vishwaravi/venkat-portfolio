import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import centrifugalPump from "../../Assets/Projects/centrifical-pump-casing.png";
import gearBoxBottom from "../../Assets/Projects/gear_box_bottom_thumbnail.png";
import gearBoxTop from "../../Assets/Projects/gear_box_top_thumbnail.png";
import gearBoxCasing from "../../Assets/Projects/gear_box_casing_1.png"
import gearBoxCasing2 from "../../Assets/Projects/gear_box_casing_2.png"
import gearBoxCover from "../../Assets/Projects/gear_box_cover.png"
import throttleBody from "../../Assets/Projects/throttle_body.png"
import oilSumpCoreBox from "../../Assets/Projects/oil_sump_core_box.png"
import duct1 from "../../Assets/Projects/duct_1.png"
import pneumaticCyclinder from "../../Assets/Projects/pneumatic_cyclinder.png"
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
              imgPath={centrifugalPump}
              title="Centrifugal Pump"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="centrifugal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearBoxBottom}
              title="Gear Box Bottom"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              demoLink="gearbox_bottom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearBoxTop}
              title="Gear Box Top"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              demoLink="gearbox_top"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearBoxCasing}
              title="Gear Box Casing"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              demoLink="gear_box_casing_1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearBoxCover}
              title="Gear Box Cover"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."      
              demoLink="gear_box_cover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearBoxCasing2}
              title="Gear Box Casing 2"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="gear_box_casing_2"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={throttleBody}
              title="Throttle Body"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="throttle_body"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oilSumpCoreBox}
              title="Oil Sump Core Box"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="oil_sump_core_box"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={duct1}
              title="Duct 1"
              description=" with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="duct_1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pneumaticCyclinder}
              title="Pneumatic Cyclinder"
              description=" with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="pneumatic_cyclinder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
