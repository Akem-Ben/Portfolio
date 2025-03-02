import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import bannerImage from "../../assets/images/banner-background.png";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeletingState, setIsDeletingState] = useState(false);
  const wordsToRotate = [
    "Fullstack Developer",
    "ReactJs Developer",
    "NodeJs Developer",
    "NextJs Developer",
    "Typescript Developer",
    "Javascript Developer",
    "React Native Developer"
  ];
  const [currentText, setCurrentText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 100;

  const tick = () => {
    const index = loopNum % wordsToRotate.length;
    const fullText = wordsToRotate[index];
    const updatedText = isDeletingState
      ? fullText.substring(0, currentText.length - 1)
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    if (isDeletingState) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeletingState && updatedText === fullText) {
      setIsDeletingState(true);
      setDelta(period);
    } else if (isDeletingState && updatedText === "") {
      setIsDeletingState(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [currentText]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 style={{ minHeight: "200px" }}>
                    {`Hi, I am Akemini, a`}{" "}
                    <span className="wrap">{currentText}</span>
                  </h1>
                  <p>
                    I am a versatile and results-driven software developer with
                    a strong foundation in Agile methodologies and a passion for
                    leveraging cutting-edge technology to solve complex
                    problems.{" "}
                    <span style={{ color: "gold" }}>
                      Proficient in HTML, CSS, JavaScript, TypeScript, React.js,
                      Next.js, React Native, Node.js, Express.js, MongoDB,
                      Sequelize ORM, WebSockets, Supabase,
                      Authentications (JWT, OAuth, Passport.js, etc), Docker &
                      Containers, CI/CD (GitHub Actions), MySQL, Jest,
                    </span> I excel at building scalable, high-performance
                    applications thatenhance user experience and drive business
                    growth.
                  </p>
                  <a href="#connect" style={{ textDecoration: "none" }}>
                    <button>
                      Let's connect <IoArrowForwardCircleOutline size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImage} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
