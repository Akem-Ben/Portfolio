import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import bannerImage from "../../assets/images/banner-background.png";
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeletingState, setIsDeletingState] = useState(false);
  const wordsToRotate = [
    "Full-stack Developer (Backend Heavy)",
    "ReactJs Developer",
    "Node.js Developer",
    "Typescript Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 100;

  const tick = () => {
    let index = loopNum % wordsToRotate.length;
    let fullText = wordsToRotate[index];
    let updatedText = isDeletingState
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
    let ticker = setInterval(() => {
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
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__slideInUp' : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I am Akemini, a`}{" "}
                    <span className="wrap">{currentText}</span>
                  </h1>
                  <p>
                    A software developer who is driven by a passion for growth and leveraging technology to solve problems. Competent in Javascript, Typescript, ReactJs, NodeJs, ExpressJs, Agile Methodologies, HTML, Cascading Style Sheets (CSS), MongoDB and Postgresql, I am confident in my ability to deliver innovative solutions that drive organizational success.
                  </p>
                  <a href="#connect" style={{textDecoration: 'none'}}>
                  <button>
                    Let's connect <IoArrowForwardCircleOutline size={25} />
                  </button>
                  </a>
                </div>
              }
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
