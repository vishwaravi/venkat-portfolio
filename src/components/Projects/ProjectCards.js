import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
function ProjectCards(props) {
  const navigate = useNavigate();
  const goToGallery = (catagory) => {
    navigate(`/projects/${catagory}`);
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text> */}
        <Button variant="primary"
          onClick={() => goToGallery(props.demoLink)}
        >
          view
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            onClick={navigate(`/projects/${props.demoLink}`)}
            variant="primary"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
