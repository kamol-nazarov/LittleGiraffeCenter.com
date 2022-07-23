import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';


import './../assets/css/main-style.css';

import fb_logo from './../assets/images/fblogo.png'

export default class GalleryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCOVID: false,
            showInsurance: false
        }
    }

    render() {
        return (
            <div>
                <Container bg="light" expand="lg" className="home-page-header-container" >
                    <Row className="home-page-header-container-row-one" >
                        <Col sm={6}>
                            <Navbar.Brand href="/" className="home-page-header-navbar-brand">Little Giraffe Center, Inc</Navbar.Brand>
                        </Col>
                        <Col sm={1} className="home-page-header-container-row-one-col-two">
                            <p className="home-page-header-office-number" >
                                Office: 917-638-0841
                            </p>
                        </Col> 
                        <Col sm={1} className="home-page-header-container-row-one-col-three" >
                            <p className="home-page-header-fax-number" >
                                Fax: 888-966-0155
                            </p>    
                        </Col>  
                        <Col sm={2} className="home-page-header-container-row-one-col-four" >
                            <Button onClick={() => this.setState({showCOVID: !(this.state.showCOVID), showInsurance: this.state.showInsurance})} className="mb-2 home-page-header-container-row-one-col-four-button">
                                <p>
                                    COVID-19 UPDATE
                                </p>
                            </Button>
                            <ToastContainer >
                                <Toast show={this.state.showCOVID} onClose={() => this.setState({showCOVID: !(this.state.showCOVID), showInsurance: this.state.showInsurance})} className="home-page-header-container-row-one-col-four-toast">
                                    <Toast.Header>
                                        <strong className="me-auto">
                                            Keeping Our Children Safe During COVID-19
                                        </strong>
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
                        <Col sm={2} className="home-page-header-container-row-one-col-five">
                            <Button onClick={() => this.setState({showCOVID: this.state.showCOVID, showInsurance: !(this.state.showInsurance)})} className="mb-2 home-page-header-container-row-one-col-five-button">
                                    <p>Accepted Insurance</p>
                            </Button>
                            <ToastContainer >
                                <Toast show={this.state.showInsurance} onClose={() => this.setState({showCOVID: this.state.showCOVID, showInsurance: !(this.state.showInsurance)})} className="home-page-header-container-row-one-col-five-toast">
                                    <Toast.Header>
                                        <strong className="me-auto">
                                            We currently Accept The Following Insurance
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        - United Health Care<br />
                                        - Cigna<br />
                                        - Oxford<br />
                                        - Emblem Health ( formally Hop and GHI )<br />
                                        - 1199<br />
                                        - AETNA<br />
                                        - Multi Plan<br />
                                        - Empire Blue Cross Blue Shield<br />
                                        - Magna Care
                                        <br />
                                        <br />
                                        Including Medicaid HMOs for kids
                                        <br />
                                        <br />
                                        We are currently trying to get in network with all private and commercial insurance companies
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </Col>
                    </Row>
                    <Row className="home-page-header-second-row justify-content-center" >
                        <Col sm={2} className="home-page-header-about-us-link" as="a" href="/services" >
                            <h6>
                                About Us
                            </h6>
                        </Col>
                        <Col sm={2} className="home-page-header-payment-link" as="a" href="/makepayment" >
                            <h6>
                                Make A Payment
                            </h6>
                        </Col>
                        <Col sm={2} className="home-page-header-gallery-link" as="a" href="/gallery" >
                            <h6>
                                Picture Gallery
                            </h6>
                        </Col>
                        <Col sm={2} className="home-page-header-contact-link" as="a" href="/contact" >
                            <h6>
                                Contact Us
                            </h6>
                        </Col>
                    </Row>  
                </Container>
                <Container className="gallery-body-container" >
                    <Row className="gallery-body-container-row-one" >
                        <Col className="gallery-body-container-row-one-col-one" >
                            <h1>Picture Gallery</h1>
                        </Col>
                    </Row>
                </Container>
                <div className="home-page-footer-container justify-content-center" >
                    <Row className="home-page-footer-first-row" >
                        <Col className="home-page-footer-first-row-first-col">
                            <Nav className="home-page-footer-first-row-first-col-nav justify-content-center">
                                <Nav.Link href="https://www.facebook.com" className="home-page-footer-first-row-first-col-nav-facebook-logo">
                                    <img src={fb_logo} alt="facebook" />
                                </Nav.Link>
                                <Nav.Link href="/services" className="home-page-footer-first-row-first-col-nav-links">
                                    <p>About Us</p>
                                </Nav.Link>
                                <Nav.Link href="/makepayment" className="home-page-footer-first-row-first-col-nav-links">
                                    <p>Make A Payment</p>
                                </Nav.Link>
                                <Nav.Link href="/gallery" className="home-page-footer-first-row-first-col-nav-links">
                                    <p>Picture Gallery</p>
                                </Nav.Link>
                                <Nav.Link href="/contact" className="home-page-footer-first-row-first-col-nav-links">
                                    <p>Contact us</p>
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}