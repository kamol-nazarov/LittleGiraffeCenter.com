import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fb_logo from './../../assets/images/fblogo.png'

import './../../assets/css/main-style.css';

export default function GalleryPageFooter() {
    return (
        <Container className="home-page-footer-container" >
        
            <Row className="home-page-footer-first-row" >

                <Col sm={2} className="home-page-footer-about-us-link" as="a" href="/services" >
                    <h10>ABOUT US / SERVICES</h10>
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

                <Col xx-sm={2} className="home-page-footer-facebook-logo" as="a" href="http://www.facebook.com" >
                    <img src={fb_logo} alt="facebook" className='gallery-page-body-second-row-third-col-image'></img>
                </Col>    
            
            </Row>

        </Container>
    );
}