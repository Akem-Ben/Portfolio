import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

interface NewsLetterProps {
    onValidated: (email: string) => void | any;
    status: string | any;
    message: string | any;
 }

const NewsLetter = (MailingListProps:NewsLetterProps) => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(email)
        email && email.indexOf('@') > -1 && MailingListProps.onValidated(email);
       
    }

    const clearFields = () => {
        setEmail("");
    }

    useEffect(() => {
        if(MailingListProps.status === "success") clearFields();
    },[MailingListProps.status])

    return (
        <>
        <Col lg={12}>
        <TrackVisibility>
              {({ isVisible }) =>
            <div style={{display: `${isVisible ? 'block' : 'none'}`}} className={ `newsletter-bx ${isVisible ? 'animate__animated animate__zoomInLeft' : "" }`}>
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsleter</h3>
                        {MailingListProps.status === "sending" && <Alert>Sending...</Alert>}
                        {MailingListProps.status === "error" && <Alert variant="danger">{MailingListProps.message}</Alert>}
                        {MailingListProps.status === "success" && <Alert variant="success">{MailingListProps.message}</Alert>}
                    </Col>
                    <Col md={6} xl={7} sm={4} xs={2}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type='email' onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address"/>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
             }
             </TrackVisibility>
        </Col>
        </>
        //animate__flip
    )
}

export default NewsLetter