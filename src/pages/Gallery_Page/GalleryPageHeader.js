import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './../../assets/css/main-style.css';

export default function GalleryPageHeader() {
    return (
        <Container bg="light" expand="lg" className="home-page-header-container" >
            <Row className="home-page-header-first-row" >
                <Col sm={10}>
                    <Navbar.Brand href="/" className="home-page-header-navbar-brand">Little Giraffe Center, Inc</Navbar.Brand>
                </Col>
                <Col sm={2}>
                    <h6 className="home-page-header-number" >
                        Office: 917-638-0841<br />
                        Fax: 888-966-0155
                    </h6>
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
                <Col sm={2} className="home-page-header-classes-link" as="a" href="/classes" >
                    <h6>Classes</h6>
                </Col>
                <Col sm={2} className="home-page-header-contact-link" as="a" href="/contact" >
                    <h6>Contact Us</h6>
                </Col>
            </Row>  
        </Container>  
    );
}