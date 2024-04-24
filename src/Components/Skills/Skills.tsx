import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sixty from '../../assets/images/sixtyPercent.jpeg'
import seventyFive from '../../assets/images/seventyFivePercent.jpeg'
import ninetyFive from '../../assets/images/ninetyFivePercent.jpeg'
import colorSharp from '../../assets/images/color-sharp.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? 'animate__animated animate__bounce' : ""}>
                                        <h2>Skills</h2>
                                        <h4>Backend Engineering using NodeJs JavaScript</h4>
                                        <p style={{ margin: '10px' }}>NodeJS, ExpressJS, MongoDB, Typescript, PostgreSQL, MySQL, Jest, Git and GitHub, and Test- Driven Development.</p>
                                        <h4>Frontend Engineering using HTML/CSS and ReactJs</h4>
                                        <p style={{ margin: '10px' }}>HTML 5, CSS 3, React.js with Typescript, Redux, Tailwind CSS, etc</p>
                                        <h4>Agile Methodologies</h4>
                                        <p style={{ margin: '10px' }}>Strong communication skills, excellent attention to details, Fast Learner, Competent Problem-solving skills, time management skills, analytical thinking, competent teamwork ability, and excellent leadership skills</p>
                                    </div>
                                }
                            </TrackVisibility>
                            <br />
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            <div className='item'>
                                                <img src={seventyFive} alt='skill' />
                                                <h5>Backend Web Development (NodeJs/Typescript)</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={sixty} alt='skill' />
                                                <h5>Frontend Web Development (ReactJs/Typescript)</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={sixty} alt='skill' />
                                                <h5>Full-stack Web Development (HTML/CSS/Javascript)</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={ninetyFive} alt='skill' />
                                                <h5>Agile Methodologies</h5>
                                            </div>
                                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt='color-sharp' className='background-image-left' />
        </section>
    )
}


export default Skills