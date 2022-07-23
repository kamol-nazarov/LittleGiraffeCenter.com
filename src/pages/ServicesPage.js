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
import './../assets/css/media-queries-1.css';
import './../assets/css/media-queries-2.css';

import fb_logo from './../assets/images/fblogo.png'
import clipboardGiraffe_image from './../assets/images/60-smiling-and-holding-notepad.png';


export default class ServicesPage extends React.Component {

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
                <Container className="services-body-container" >
                    <Row className="services-body-container-row-one" >       
                        <Col sm={4} className="service-body-container-row-one-col-one" >
                            <img src={clipboardGiraffe_image} alt="clipboardGiraffe" width={150} height={250} className='services-body-container-row-one-col-one-img'></img>
                        </Col>
                        <Col sm={8} className="services-body-container-row-one-col-two" >
                            <h1>
                                We Are Little Giraffe Center
                            </h1>
                            <p>
                                We provide pediatric Physical, Occupational, Speech, and ABA Therapy.
                                We also specialize in the treatment and prevention of Torticollis. Our highly trained staff
                                can evaulate your child in the clinic or home environment. We are a family and community base center.
                                We understand the hectic schedule of parents and will work around your child individual needs. Our
                                specialized treatment plan of care are individualized according to the, child, parents and staff.
                                We believe every child is special and unique.
                            </p>
                        </Col>
                    </Row>
                    <Row className="services-body-container-row-two" >
                        <Col className="services-body-container-row-two-col-one" >
                            <h1>
                                Meet Dr. Dan Ha
                            </h1>
                            <p>
                                Dr. Dan Ha, PT, DPT has over 17 years of pediatric physical medicine experience.
                                Dr. Dan attended Creighton University School of Medicine and Allied Health.
                                He specializes in the treatment of various Genetic and Neurological Diagnosis, 
                                Developmental Delay, Autism Spectrum Disorder, Cerebral Palsy, Asperger Syndrome,
                                Wound Care, Prosthetic and Orthotics, Splints, Adoptive Equipment, Kinesio Tapping,
                                Cranial Helmets, Cervical Torticollis Collar, Down Syndrome, myofascial release,
                                motor delay, gait training, prematurity, extreme prematurity, cognitive delay and
                                Orthopedic rehab Dr. Dan specializes in the treatment of Torticollis and Plagiocephaly.
                                He is the proud father of 2 sons and a daughter.
                                On his days off he spends time with his children enjoying outdoor activities.
                            </p>
                        </Col>
                    </Row>
                    <Row className="services-body-container-row-three" >
                        <Col sm={4} className="services-body-container-row-three-col-one" >
                            <h3>
                                Does your child have difficulty:
                            </h3>
                            <ul>
                                <li>
                                    Crawling, walking, and/or running
                                </li>
                                <li>
                                    Coordinating movements
                                </li>
                                <li>
                                    Sitting still and paying attention
                                </li>
                                <li>
                                    Exploring and playing with peers
                                </li>
                                <li>
                                    Learning new things
                                </li>
                                <li>
                                    In school with handwriting, cutting and coloring
                                </li>
                                <li>
                                    Touching particular textures
                                </li>
                                <li>
                                    Responding to sound or noises
                                </li>
                                <li>
                                    Speaking clearly, imitating sounds and/or words
                                </li>
                                <li>
                                    Feeding and swallowing
                                </li>
                            </ul>
                        </Col>
                        <Col sm={8} className="services-body-container-row-three-col-two" >
                            <h3>
                                Our Board Certified Therapists Offer A Number Of Services:
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Occupational Therapy:
                                        <br />
                                        Therapeutic use of work, self-care, and play activities to increase independent 
                                        function, enhance development, and prevent disability.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Physical Therapy:
                                        <br />
                                        Habilitation and rehabilitation concerned with the restoration of activity 
                                        and prevention of disability, with use of a variety of modalities to achieve these purposes.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Speech/Language Therapy:
                                        <br />
                                        Diagnosis, treatment, and remediation of receptive/expressive speech and language;
                                        oral motor deficits; and feeding problems.
                                    </p>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                    <Row className="services-body-container-row-four" >
                        <Col className="services-body-container-row-four-col-one" >
                            <h3>
                                We Also Offer Specialized Treatment, Techniques, and Services Including:
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Neuro-developmental Treatment (NDT):
                                        <br />
                                        Use of a variety of hands-on techniques to enhance voluntary movement against 
                                        gravity and facilitaterotational patterns and equilibrium responses in order 
                                        to promote more complex skilled movement.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Sensory Integration:
                                        <br />
                                        The enhancement of a child's ability to take in sensory information 
                                        from the environment and perform with an appropriate adaptive response.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Therapeutic Listening: 
                                        <br />
                                        The use of filtered or electronically altered music (in combination with 
                                        a variety of other treatment techniques) to promote integration and 
                                        organization of attention, behavior, and movement. Typically, those who
                                        benefit most, have difficulty with modulation, self-regulation, body-in-space, 
                                        and/or body awareness.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Interactive Metronome:
                                        <br />
                                        A computer based technology that enables individuals to directly exercise and 
                                        improve the processes of motor planning and sequencing, which can affect 
                                        learning, attention, and sensory integration.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Feeding Therapy:
                                        <br />
                                        Use of oral-motor/feeding techniques designed to strengthen and facilitate mature jaw 
                                        and tongue movements for mastication and motility of food/liquid in the mouth as well 
                                        as to increase the tolerance for a variety of food/liquid intake.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Myofacial Release:
                                        <br />
                                        A safe, effective, gentle hands on technique designed to decrease pain, decrease restrictions 
                                        and increase range of motion.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Wilbarger Protocol:
                                        <br />
                                        A deep pressure and proprioceptive technique designed by Patricia Wilbarger to address sensory 
                                        defensiveness as part of a sensory diet.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Handwriting Without Tears:
                                        <br />
                                        A specific handwriting curriculum that combines mulit-sensory input and teaching methods aimed at 
                                        developing legible and fluid handwriting.
                                    </p>
                                </li>
    
                            </ul>
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