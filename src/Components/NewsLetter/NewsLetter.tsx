import { Col } from "react-bootstrap";
import thumbs from '../../assets/Thumbs.gif'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const NewsLetter = () => {

    return (
        <>
        <Col lg={12}>
        <TrackVisibility>
              {({ isVisible }) =>
            <div style={{display: `${isVisible ? 'block' : 'none'}`}} className={ `newsletter-bx ${isVisible ? 'animate__animated animate__zoomInLeft' : "" }`}>
                    <div style={{ width: "100%", display: "flex", height: '80px', justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                        <h3>Thank You for Visiting!</h3>
                        <img src={thumbs} alt="thumbs up gif" width="10px"/>
                    </div>
            </div>
             }
             </TrackVisibility>
        </Col>
        </>
    )
}

export default NewsLetter