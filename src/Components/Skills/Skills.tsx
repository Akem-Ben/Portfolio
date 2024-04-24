import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sixty from '../../assets/images/sixtyPercent.jpeg'
import seventyFive from '../../assets/images/seventyFivePercent.jpeg'
import ninetyFive from '../../assets/images/ninetyFivePercent.jpeg'
import colorSharp from '../../assets/images/color-sharp.png'



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
                        <h2>Skills</h2>
                        <p>LOREM is a typesetting format used for some skills acquisition.<br />LOREM is a typesetting format used for some skills acquisition.</p>
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