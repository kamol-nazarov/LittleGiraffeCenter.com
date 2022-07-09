import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fb_logo from './../../assets/images/fblogo.png'

import './../../assets/css/main-style.css';

export default function HomePageFooter() {
    return (
        <Container className="home-page-footer-container" >
        
            <Row className="home-page-footer-first-row" >

                <Col sm={1} className="home-page-footer-about-us-link" as="a" href="/services" >
                    <p>About Us</p>
                </Col>

                <Col sm={1} className="home-page-footer-accepted-insurance-link" as="a" href="/insurance" >
                    <p>Accepted Insurance</p>
                </Col>

                <Col sm={1} className="home-page-footer-payment-link" as="a" href="/makepayment" >
                    <p>Make A Payment</p>
                </Col>

                <Col sm={1} className="home-page-footer-gallery-link" as="a" href="/gallery" >
                    <p>Picture Gallery</p>
                </Col>

                <Col sm={1} className="home-page-footer-classes-link" as="a" href="/classes" >
                    <p>Classes Offered</p>
                </Col>

                <Col sm={1} className="home-page-footer-contact-link" as="a" href="/contact" >
                    <p>Contact Us</p>
                </Col>

                <Col xx-sm={1} className="home-page-footer-facebook-logo" as="a" href="http://www.facebook.com" >
                    <img src={fb_logo} alt="facebook" className='home-page-footer-second-row-third-col-image'></img>
                </Col>    
            
            </Row>

        </Container>
    );
}