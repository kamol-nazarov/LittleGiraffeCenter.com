import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import fb_logo from './../../assets/images/fblogo.png'

import './../../assets/css/main-style.css';

export default function HomePageFooter() {
    return (
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
                        <Nav.Link href="/insurance" className="home-page-footer-first-row-first-col-nav-links">
                            <p>Accepted Insurance</p>
                        </Nav.Link>
                        <Nav.Link href="/makepayment" className="home-page-footer-first-row-first-col-nav-links">
                            <p>Make A Payment</p>
                        </Nav.Link>
                        <Nav.Link href="/gallery" className="home-page-footer-first-row-first-col-nav-links">
                            <p>Picture Gallery</p>
                        </Nav.Link>
                        <Nav.Link href="/classes" className="home-page-footer-first-row-first-col-nav-links">
                            <p>Classes</p>
                        </Nav.Link>
                        <Nav.Link href="/contact" className="home-page-footer-first-row-first-col-nav-links">
                            <p>Contact us</p>
                        </Nav.Link>
                    </Nav>
                

                </Col>
            </Row>

        </div>
    );
}