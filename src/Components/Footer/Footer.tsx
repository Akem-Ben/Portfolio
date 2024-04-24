import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { MailChimForm } from '../NewsLetter/MailChimForm';
import logo from '../../assets/images/Abn.jpeg';
import { PiLinkedinLogoBold } from "react-icons/pi";
import { TfiTwitter } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {


    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <MailChimForm />
                    <Col sm={6} >
                        <img src={logo} alt="logo" style={{ borderRadius: '50%' }} width={100} />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/akemini-ndaobong-008678229/" target="_blank" rel="noopener noreferrer">
                                <PiLinkedinLogoBold style={{ color: 'white', fontWeight: 900 }} />
                            </a>
                            <a href="https://twitter.com/TechAkem" target="_blank" rel="noopener noreferrer">
                                <TfiTwitter style={{ color: 'white', fontWeight: 900 }} />
                            </a>
                            <a href="https://github.com/Akem-ben" target="_blank" rel="noopener noreferrer">
                                <FaGithub style={{ color: 'white', fontWeight: 900 }} />
                            </a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer