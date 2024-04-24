import "./Projects.css";
import prj from "../../assets/images/prj.jpeg";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCards/ProjectCards";
import colorSharp2 from '../../assets/images/color-sharp2.png'

const Projects = () => {
  const projects = [
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
    {
      title: "Quickbite",
      description: "The best app alive",
      technologies: "ALL of them",
      image: prj,
      projectUrl: "You gotta let it go bro",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
            <p>
              LOREM is a typesetting format used for some skills acquisition.
              <br />
              LOREM is a typesetting format used for some skills acquisition.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {projects.map((project, index) => (
                           <ProjectCard
                           key={index}
                           {...project}
                            />
                        )
                    )}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    Lorem Ipsum
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    Lorem Ipsum
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color-sharp" />
    </section>
  );
};

export default Projects;
