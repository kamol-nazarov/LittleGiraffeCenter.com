import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import WavingGiraffe from './../assets/images/giraffe-waving.png';
import PatientPictureOne from './../assets/images/001.JPG';
import fb_logo from './../assets/images/fblogo.png'

import './../assets/css/main-style.css';
import './../assets/css/media-queries-1.css';


export default class HomePage extends React.Component {
    
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
                                <p>COVID-19 UPDATE</p>
                            </Button>
                            <ToastContainer >
                                <Toast show={this.state.showCOVID} onClose={() => this.setState({showCOVID: !(this.state.showCOVID), showInsurance: this.state.showInsurance})} className="home-page-header-container-row-one-col-four-toast">
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
                        <Col sm={2} className="home-page-header-container-row-one-col-five">
                            <Button onClick={() => this.setState({showCOVID: this.state.showCOVID, showInsurance: !(this.state.showInsurance)})} className="mb-2 home-page-header-container-row-one-col-five-button">
                                    <p>Accepted Insurance</p>
                            </Button>
                            <ToastContainer >
                                <Toast show={this.state.showInsurance} onClose={() => this.setState({showCOVID: this.state.showCOVID, showInsurance: !(this.state.showInsurance)})} className="home-page-header-container-row-one-col-five-toast">
                                    <Toast.Header>
                                        <strong className="me-auto">We currently Accept The Following Insurance</strong>
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
                            <h6>About Us</h6>
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
                <Container className="home-page-body-container" >
                    <Row className="home-page-body-first-row" >
                        <Col sm={4}className="home-page-body-first-row-col" >
                            <img src={WavingGiraffe} alt="giraffe" className='home-page-body-first-row-col-image'></img>
                        </Col>
                        <Col sm={8} className="home-page-body-first-row-second-col" >
                            <Container className="home-page-body-first-row-second-col-container justify-content-center">
                                <h2>We Specialize In Pediatric Developmental Therapy</h2>
                                <h5>Including In The Fields Of Physical, Occupational, Speech, and ABA Therapy</h5>
                                <h3>Located On 1560 Ocean Parkway, Suite 2I<br />Brooklyn, NY 11230</h3>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="home-page-body-second-row" >
                        <Col className="home-page-body-second-row-first-col" >
                            <Container className="home-page-body-second-row-first-col-container" >
                                <h1>Get To Know Us At Little Giraffe Center</h1>
                                <h6>
                                    Our staff are accredited and continue to attend yearly education courses on various diagnosis. 
                                    Our staff is trained in functional play and sensory to decrease the stress on your child with
                                    sensory colors, swings, sensory rooms, functional play rooms, and play gyms.
                                </h6>
                                <img src={PatientPictureOne} alt="giraffe" className='home-page-body-second-row-first-col-container-image'></img>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="home-page-body-third-row" >
                        <Col className="home-page-body-third-row-first-col" >
                            <Container className="home-page-body-third-row-first-col-container" > 
                                <h1>Our Mission</h1>
                                <h6>
                                    To provide quality care through Pediatric Early Intervention and to ensure fiscal viability and the future of its vision, 
                                    the Little Giraffe Center will foster a supportive growth and learning environment,
                                    which will empower staff and families to become part of the therapy team.
                                    The Little Giraffe Center will continue to listen and respond to community needs in an atmosphere of fun and creativity.
                                    Our treatment center include swings, sensory rooms, functional play rooms, and play gyms.
                                </h6>
                            </Container>           
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