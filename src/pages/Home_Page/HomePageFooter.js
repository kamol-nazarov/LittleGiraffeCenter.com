import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './../../assets/css/main-style.css';

export default function HomePageFooter() {
    return (
        <Row className="home-page-footer-first-row" >
            <Col sm={4}className="home-page-footer-first-row-image" >
                <img src={FacebookLogo} alt="facebook" className='home-page-body-first-facebook-logo-image'></img>
            </Col>

            <Col sm={2} className="home-page-footer-home-link" as="a" href="/" >
                <h10>HOME</h10>
            </Col>

            <Col sm={2} className="home-page-footer-about-us-link" as="a" href="/services" >
                <h10>ABOUT US</h10>
            </Col>

            <Col sm={2} className="home-page-footer-accepted-insurance-link" as="a" href="/insurance" >
                <h10>ACCEPTED INSURANCE</h10>
            </Col>

            <Col sm={2} className="home-page-footer-payment-link" as="a" href="/makepayment" >
                <h10>MAKE A PAYMENT</h10>
            </Col>

            <Col sm={2} className="home-page-footer-gallery-link" as="a" href="/gallery" >
                <h10>PICTURE GALLERY</h10>
            </Col>

            <Col sm={2} className="home-page-footer-classes-link" as="a" href="/classes" >
                <h10>CLASSES</h10>
            </Col>

            <Col sm={2} className="home-page-footer-contact-link" as="a" href="/contact" >
                <h10>CONTACT US</h10>
            </Col>    
            
        </Row>

    );
}