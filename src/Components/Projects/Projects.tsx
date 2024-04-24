import "./Projects.css";
import prj from "../../assets/images/prj.jpeg";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCards/ProjectCards";
import colorSharp2 from '../../assets/images/color-sharp2.png';
import { FiExternalLink } from "react-icons/fi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects & Volunteer Activities</h2>
            <p>
              These include personal projects, contributions to companies and collaborations
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Volunteer Activities/Accomplishments</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item> */}
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
                <Tab.Pane eventKey="second" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Row style={{ backgroundColor: '#151515', padding: '20px', overflowY: 'scroll', height: '500px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Col xs={12} md={6} xl={7} style={{ width: '50%', padding: '10px' }}>
                      <h4>Intern at Decagon Institute</h4>
                      <h4>Activities:</h4>
                      <ul>
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I led a team of developers that developed an MVP Dispatch delivery application known as SwiftRiders.</p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I communicated effectively with clients, developers and other stakeholders to improve development process.</p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I was dubbed one of the best Agile Developers in Decagon.</p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I led a team of developers that developed an MVP Dispatch delivery application known as SwiftRiders.</p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I communicated effectively with clients, developers and other stakeholders to improve development process.</p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I was dubbed one of the best Agile Developers in Decagon.</p></li>
                      </ul>
                    </Col>
                    <Col xs={12} md={6} xl={7} style={{ width: '50%', padding: '10px' }}>
                      <h4>Backend Intern at Flick Finance Solutions <a href="https://getflick.app/" target="__blank"><FiExternalLink className="link-out" /></a></h4>
                      <h4>Activities:</h4>
                      <ul>
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I integrated the Interswitch Payment API with the backend of the application even without the availability of 'how to' videos online <a href="https://github.com/Akem-Ben/Interswitch" target="__blank"><FiExternalLink className="link-out" /></a></p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I created a connection protocol using websockets to allow connections between two or more servers.</p></li><br />
                        <li><p style={{ margin: '0px', textAlign: 'justify', width: '90%' }}>I worked with the team to set up and build projects in line with company goals and services.</p></li>
                      </ul>
                    </Col>
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="third">
                    Lorem Ipsum
                </Tab.Pane> */}
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
