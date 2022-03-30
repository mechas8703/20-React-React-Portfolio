import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../components/Form';
import '../App.css';

export const Contact = () => {
    return (
        <div className='container'>

                <Container fluid className="shadow bg-dark m-3" id="contact">
                    <Container>
                    <h1 className='text-center text-light bg-dark p-4' id="contactText">Let's talk?</h1>
                        <Row>
                            <Col>
                                <Container>
                                    <h4 className='text-light bg-dark'>Contact Info</h4>
                                    <p className='text-light bg-dark'>Email: &nbsp;
                                        <a href="mailto:lydiawdesign.com" className= "text-reset">
                                             lydiawdesign.com
                                        </a>
                                    </p>
                                    
                                    <p className='text-light bg-dark'>GitHub: &nbsp;
                                        <a href="https://github.com/mechas8703" target='_blank' rel="noreferrer" className= "text-reset">
                                             mechas8703
                                        </a>
                                    </p>

                                    <p className='text-light bg-dark'>Phone: (xxx) xxx-xxxx
                                    </p>
                                </Container>
                            </Col>

                            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                                <Container>
                                    <h4 className='text-light bg-dark'>Send Me a Message</h4>
                                    <Form />
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
    )
}

export default Contact;