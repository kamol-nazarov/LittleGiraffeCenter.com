import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';


import './../../assets/css/main-style.css';
import './../../assets/css/media-queries-1.css';

export default function HomePageHeader() {

    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <Container bg="light" expand="lg" className="home-page-header-container" >
            <Row className="a" >
                <Col sm={10}>
                    <Navbar.Brand href="/" className="home-page-header-navbar-brand">Little Giraffe Center, Inc</Navbar.Brand>
                </Col>
                <Col sm={2} className="home-page-header-container-row-one-col-two">
                    <h6 className="home-page-header-number" >
                        Office: 917-638-0841<br />
                        Fax: 888-966-0155
                    </h6>
                    <Button onClick={toggleShowA} className="mb-2 home-page-header-container-row-one-col-two-button">
                        <p>COVID-19 UPDATE</p>
                    </Button>
                    <ToastContainer >
                        <Toast show={showA} onClose={toggleShowA} className="home-page-header-container-row-one-col-two-toast">
                            <Toast.Header>
                                <strong className="me-auto">Keeping Our Children Safe During COVID-19</strong>
                            </Toast.Header>
                            <Toast.Body>
                                We screen all children and staff for COVID-19 symptoms. When you arrive, you will be asked about any
                                coughs, fevers, or travel by you or your immediate household. In addition, everyone who enters our office will
                                have their temperature taken and be given hand sanitzer.
                                <br />
                                <br/>
                                Staff wear masks at all times, regardless if they are working with children. We also ask that parents wear masks at all times.
                                <br/>
                                <br/>
                                The entire office is thoroughly sanitized each night and following each patient visit.
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>   
            </Row>
            <Row className="home-page-header-second-row justify-content-center" >
                <Col sm={2} className="home-page-header-about-us-link" as="a" href="/services" >
                    <h6>About Us</h6>
                </Col>
                <Col sm={2} className="home-page-header-insurance-link" as="a" href="/insurance" >    
                    <h6>Accepted Insurance</h6>
                </Col>
                <Col sm={2} className="home-page-header-payment-link" as="a" href="/makepayment" >
                    <h6>Make A Payment</h6>
                </Col>
                <Col sm={2} className="home-page-header-gallery-link" as="a" href="/gallery" >
                    <h6>Picture Gallery</h6>
                </Col>
                <Col sm={2} className="home-page-header-contact-link" as="a" href="/contact" >
                    <h6>Contact Us</h6>
                </Col>
            </Row>  
        </Container>  
    );
}