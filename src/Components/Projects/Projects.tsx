import "./Projects.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCards/ProjectCards";
import colorSharp2 from "../../assets/images/color-sharp2.png";
import { FiExternalLink } from "react-icons/fi";
import smooze from "../../assets/images/smooze.png";
import eventify from "../../assets/images/eventify.png";
import ecommerce from "../../assets/images/ecommerce.png";
import swiftRider from "../../assets/images/swift-rider.png";
import backend from '../../assets/images/interswitch-backend.png';
import royalBlogs from '../../assets/images/royal.png';
import movieShelf from '../../assets/images/movie-shelf.png';
// import tripleMovies from '../../assets/images/Trm-movies.png';
// import events from '../../assets/images/eventz.png';
import backend2 from '../../assets/images/camo-backend.png';
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Smooze App (Fullstack)",
      description: "A music streaming Platform.",
      technologies: "NodeJs, Cloudinary, ReactJs, Paystack, Typescript Javascript, Postgresql, Swagger.",
      contribution: "Fullstack Engineer (Team lead).",
      image: smooze,
      projectUrl: "https://smoozepro.netlify.app/",
    },
    {
      title: "Evenify Dashboard (Frontend)",
      description: "Eventify is a modern dashboard app for managing and visualizing event data. It features a news carousel, interactive charts, and an event calendar for easy scheduling. Built with React, TypeScript, and Vite, it offers a sleek UI (MUI) and smooth animations (Framer Motion)",
      technologies: "React, TypeScript, Vite, MUI, Tailwind CSS Data & Visualization: FullCalendar, Google Charts, Framer Motion Utilities: jsPDF, FileSaver, EmailJS",
      contribution: "Personal Project",
      image: eventify,
      projectUrl: "https://dashboard-test-taupe.vercel.app/",
    },
    {
      title: "Interswitch Intergration (Backend).",
      description: "Integrating the Interswitch Payment API with the backend of the application, generating the agent key, authorisation, creating a custom endpoint to verify payment status and creating endpoints to handle transfers, card payments, etc.",
      technologies: "Crypto, Axios, Forge, Nodejs, Express, Typescript, Node-forge, Interswitch API.",
      contribution: "Backend Engineer",
      image: backend,
      projectUrl: "https://github.com/Akem-Ben/Interswitch",
    },
    {
      title: "Ecommerce Store (Frontend)",
      description: "Ecommerce Store is a Next.js and React-based online store with essential shopping features. Users can browse, search, filter by category, add/remove items from the cart, and manage authentication with state stored in local storage. It supports dark mode and uses useContext for state management.",
      technologies: "Next.js, React, Tailwind CSS, MUI, useContext, Framer Motion, Heroicons, Formik, Yup",
      contribution: "Personal Project",
      image: ecommerce,
      projectUrl: "https://deeptech-assessment-frontend.vercel.app/",
    },
    {
      title: "Swift Riders (Fullstack)",
      description: "Swiftriders is an application like Uber, but for moving lightweight packages and products. It allows users to order for riders that move their packages from one point to another. Upon arrival and end of trip, an OTP is sent to the user who then gives it to the rider to input in the app to confirm the identity and authenticity of both users and riders.",
      technologies: "Google Maps API, NodeJs, ReactJs, Typescript, Postgresql, Jest, Jira and Github",
      contribution: "Fullstack Engineer (Team lead).",
      image: swiftRider,
      projectUrl: "https://swift-rider-site.onrender.com/",
    },
    {
      title: "Camo Institution (Backend).",
      description: "An examination system allowing lecturers create exams and then allowing pre-registered students to enroll in courses, take examinations and view their examination scores. Examinations are automatically marked using pre-loaded answers supplied during examinations creation",
      technologies: "Axios, bcryptjs, cross-env, express, jsonwebtoken, lodash.merge, morgan, nodemailer, sequelize, typescript, uuid, zod",
      image: backend2,
      contribution: "Personal Project",
      projectUrl: "https://github.com/Akem-Ben/Camo_Institution_Backend",
    },
    {
      title: "My Movie Shelf (Fullstack).",
      description: "My Movie Shelf is a Next.js-based movie management app where users can register, log in, add, edit, delete, and browse movies. It features image uploads, authentication, and movie categorization.",
      technologies: "Next.js, React, Tailwind CSS, MUI, Framer Motion, Axios, Formik, Yup, Node.js, Express, PostgreSQL, Sequelize, Joi, Multer, Cloudinary, JWT, Bcrypt, Helmet, XSS-Clean, Multer",
      image: movieShelf,
      contribution: "Personal Project",
      projectUrl: "https://my-movie-shelf.vercel.app/",
    },
    {
      title: "Beat Tech Blog",
      description: "A blogging platform that allows users to register, create, read, comment on, like, dislike and delete blog posts.",
      technologies: "Axios, Cloudinary, bootstrap, formik, primereact, react, react-bootstrap, react-icons, react-paginate, react-quill, react-toastify, yup, tailwindcss, typescript",
      image: royalBlogs,
      contribution: "Personal Project",
      projectUrl: "https://royal-blogs.netlify.app/",
    },
    // {
    //   title: "Royal Events",
    //   description: "An events management system that allows users to create, view, report, comment on, like, update, register/pay for and delete events. An admin section that allows the admin to block events, block users etc.",
    //   technologies: "cloudinary, cross-env, express, jsonwebtoken, multer, multer-storage-cloudinary, nodemailer, postgres, sequelize, axios, bootstrap, react, sweetalert2, tailwindcss",
    //   image: events,
    //   contribution: "I personally built the whole structure from start to finish.",
    //   projectUrl: "https://main--royal-events.netlify.app/",
    // },
    // {
    //   title: "Triple Movies",
    //   description: "A simple personal project where I consumed an external API that allows users to search for movies, view movie details and add movies to favourites.",
    //   technologies: "Axios, react, tailwindcss, express, typescript, https://www.omdbapi.com/ API",
    //   image: tripleMovies,
    //   contribution: "I personally built the whole structure from start to finish.",
    //   projectUrl: "https://triple-movies.netlify.app/",
    // },
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
                    Activities
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="projects-holder">
                    {projects.map((project, index) => (
                     <ProjectCard key={index} {...project} onClick={() => projectRedirectionFunction(project.projectUrl)}/>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row
                    className="activities"
                  >
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "100%", padding: "10px" }}
                    >
                      <h4>
                        Intern at Decagon Institute{" "}
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
                      style={{ width: "100%", padding: "10px" }}
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
                      style={{ width: "100%", padding: "10px" }}
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
                      style={{ width: "100%", padding: "10px" }}
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
