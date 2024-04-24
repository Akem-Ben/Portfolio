import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import bannerImage from "../../assets/images/banner-background.png";
import { useEffect, useState } from "react";

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
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I am Akemini, a`}{" "}
              <span className="wrap">{currentText}</span>
            </h1>
            <p>
              lksdifiugriifhbdbryyhfh fhfhryhffh fhfryfhfhry fhfhyjgj bdhthh
              djgjhruye euhnfbjeh jyhevuye hgsvutrue uvjhejhruh jhvsjhruy ygeheh
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <IoArrowForwardCircleOutline size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImage} alt="header image"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
