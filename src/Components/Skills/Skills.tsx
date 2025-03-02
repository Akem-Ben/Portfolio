import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sixty from "../../assets/images/sixtyPercent.jpeg";
import seventyFive from "../../assets/images/seventyFivePercent.jpeg";
import ninetyFive from "../../assets/images/ninetyFivePercent.jpeg";
import colorSharp from "../../assets/images/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounce" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <br />
                    <div className="skills-container">
                      <div className="skills-column">
                        <h4 className="skills-heading">Backend Engineering</h4>
                        <p className="skills-description">
                          Clean Architecture, WebSockets, RESTful API Design,
                          Supabase, Authentication (JWT, OAuth, Passport.js),
                          Docker & Containers, CI/CD (GitHub Actions),
                          JavaScript, NodeJS, ExpressJS, MongoDB, Typescript,
                          PostgreSQL, MySQL, Jest, Test-Driven Development.
                        </p>
                      </div>

                      <div className="skills-column">
                        <h4 className="skills-heading">Frontend Engineering</h4>
                        <p className="skills-description">
                          Clean Architecture, HTML 5, CSS 3, React.js (Hooks,
                          Context API), Typescript, Tailwind CSS, Next.js (API
                          Routes, SSR, ISR), Styled Components, Chakra UI,
                          Material UI, Zustand, Framer Motion (Animations)
                        </p>
                      </div>

                      <div className="skills-column">
                        <h4 className="skills-heading">Agile Methodologies</h4>
                        <p className="skills-description">
                          Strong communication skills, excellent attention to
                          details, Fast Learner, Competent Problem-solving
                          skills, time management skills, analytical thinking,
                          competent teamwork ability, and excellent leadership
                          skills
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={ninetyFive} alt="skill" />
                  <h5>Backend Engineering</h5>
                </div>
                <div className="item">
                  <img src={ninetyFive} alt="skill" />
                  <h5>Frontend Engineering</h5>
                </div>
                <div className="item">
                  <img src={ninetyFive} alt="skill" />
                  <h5>Full-stack Engineering</h5>
                </div>
                <div className="item">
                  <img src={ninetyFive} alt="skill" />
                  <h5>Agile Methodologies</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="color-sharp"
        className="background-image-left"
      />
    </section>
  );
};

export default Skills;
