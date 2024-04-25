import "./Projects.css";
import prj from "../../assets/images/prj.jpeg";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCards/ProjectCards";
import colorSharp2 from "../../assets/images/color-sharp2.png";
import { FiExternalLink } from "react-icons/fi";
import smooze from "../../assets/images/smooze.png";
import royalSpring from "../../assets/images/royal-spring.png";
import backend from '../../assets/images/interswitch-backend.png';
import royalBlogs from '../../assets/images/royal.png';
import tripleMovies from '../../assets/images/Trm-movies.png';
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Smooze Music App",
      description: "A musicstreaming Platform.",
      technologies: "NodeJs, ReactJs, Paystack, Typescript Javascript, Postgresql, Swagger.",
      contribution: "I was the Team lead as well as a fullstack engineer.",
      image: smooze,
      projectUrl: "https://smoozepro.netlify.app/",
    },
    {
      title: "Royal Spring College Students Portal",
      description: "A students portal platform that allows students register for courses, mark courses as completed and view registered courses.",
      technologies: "NodeJs, ReactJs, Redux, Typescript and Tailwind-CSS PostgreSQL.",
      contribution: "A personal project I built myself (Both frontend and backend, including creating and incorporating an external api).",
      image: royalSpring,
      projectUrl: "https://royal-spring-school-frontend.onrender.com/",
    },
    {
      title: "Interswitch Intergration To an App (Backend Project).",
      description: "Integrating the Interswitch Payment API with the backend of the application, generating the agent key, authorisation, creating a custom endpoint to verify payment status and creating endpoints to handle transfers, card payments, etc.",
      technologies: "Crypto, Axios, Forge, Nodejs, Express, Typescript, Node-forge, Interswitch API.",
      contribution: "I personally built the whole structure from start to finish.",
      image: backend,
      projectUrl: "https://github.com/Akem-Ben/Interswitch",
    },
    {
      title: "Royal Blogs",
      description: "A blogging platform that allows users to register, create, read, update and delete blog posts.",
      technologies: "Axios, bootstrap, formik, primereact, react, react-bootstrap, react-icons, react-paginate, react-quill, react-toastify, yup, tailwindcss, typescript",
      image: royalBlogs,
      contribution: "I personally built the whole structure from start to finish.",
      projectUrl: "https://royal-blogs.netlify.app/",
    },
    {
      title: "Triple Movies",
      description: "A simple personal project where I consumed an external API that allows users to search for movies, view movie details and movies to favourites.",
      technologies: "Axios, react, tailwindcss, express, typescript",
      image: tripleMovies,
      contribution: "I personally built the whole structure from start to finish.",
      projectUrl: "https://triple-movies.netlify.app/",
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

  const projectRedirectionFunction = (projectUrl:string) => {
    return window.open(projectUrl, '_blank')
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects & Volunteer Activities</h2>
            <p>
              These include personal projects, contributions to companies and
              collaborations (Hover over each card to view more details. You can also click on each card to visit project page/Github repository) <br />
              All projects are available on my Github repository which can be navigated to using Github icon on the navbar.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Volunteer Activities/Accomplishments
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                     <ProjectCard key={index} {...project} onClick={() => projectRedirectionFunction(project.projectUrl)}/>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row
                    style={{
                      backgroundColor: "#151515",
                      padding: "20px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "50%", padding: "10px" }}
                    >
                      <h4>
                        Intern at Decagon Institute (unpaid){" "}
                        <a href="https://decagon.institute/" target="__blank">
                          <FiExternalLink className="link-out" />
                        </a>
                      </h4>
                      <h4>Activities:</h4>
                      <ul>
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I led a team of about 53 developers that developed
                            two MVPs. First a dispatch delivery application
                            known as SwiftRiders and the second a Music
                            streaming platform known as Smooze.{" "}
                            <a
                              href="https://smoozepro.netlify.app/"
                              target="__blank"
                            >
                              <FiExternalLink className="link-out" />
                            </a>
                          </p>
                        </li>
                        <br />
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I communicated effectively with clients, developers
                            and other stakeholders to improve development
                            process.
                          </p>
                        </li>
                        <br />
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I was dubbed one of the best Agile Developers among
                            my peers.
                          </p>
                        </li>
                        <br />
                      </ul>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "50%", padding: "10px" }}
                    >
                      <h4>
                        Backend Intern at Flick Finance Solutions (unpaid){" "}
                        <a href="https://getflick.app/" target="__blank">
                          <FiExternalLink className="link-out" />
                        </a>
                      </h4>
                      <h4>Activities:</h4>
                      <ul>
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I integrated the Interswitch Payment API with the
                            backend of the application even without the
                            availability of 'how to' videos online.{" "}
                            <a
                              href="https://github.com/Akem-Ben/Interswitch"
                              target="__blank"
                            >
                              <FiExternalLink className="link-out" />
                            </a>
                          </p>
                        </li>
                        <br />
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I created a connection protocol using websockets to
                            allow connections between two or more servers.
                          </p>
                        </li>
                        <br />
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I worked with the team to set up and build projects
                            in line with company goals and services.
                          </p>
                        </li>
                      </ul>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "50%", padding: "10px" }}
                    >
                      <h4>
                        Freelance Web Html/Css Tutor
                      </h4>
                      <h4>Activities:</h4>
                      <ul>
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I successfully tutored various children (ages 9 -
                            13) on HTML and CSS.
                          </p>
                        </li>
                        <br />
                      </ul>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "50%", padding: "10px" }}
                    >
                      <h4>
                        Associate Software Engineer{" "}
                        <a href="https://decagon.institute/" target="__blank">
                          <FiExternalLink className="link-out" />
                        </a>
                      </h4>
                      <h4>Activities/Accomplishments:</h4>
                      <ul>
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I led a team of over 15 developers to build and
                            deliver an MVP called Quickbite, where I also acted
                            as a mini-product Product manager.
                          </p>
                        </li>
                        <br />
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I managed and mentored a team of about 6 developers
                            to develop an MVP for an event management system
                            called Deca Events.
                          </p>
                        </li>
                        <br />
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I participated in code reviews and provided
                            constructive feedback to team members and also
                            accepted constructive feedback from team members.
                          </p>
                        </li>
                        <br />
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="color-sharp"
      />
    </section>
  );
};

export default Projects;
