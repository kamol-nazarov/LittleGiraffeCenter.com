import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WavingGiraffe from './../../assets/images/giraffe-waving.png';
import PatientPictureOne from './../../assets/images/100_3237.JPG';

import '../../assets/css/main-style.css';

export default function HomePageBody() {
    return (
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
                            Our staff are accredited and continue to attend yearly education courses on various diagnosis.<br/> 
                            Our staff is trained in functional play and sensory to decrease the stress on your child with<br/> sensory colors, swings, sensory rooms, functional play rooms, and play gyms.
                        </h6>
                        <img src={PatientPictureOne} alt="giraffe" className='home-page-body-second-row-first-col-container-image'></img>
                    </Container>
                </Col>
            </Row>
            <Row className="home-page-body-third-row" >
                <Col className="home-page-body-third-row-first-col" >
                    <Container className="home-page-body-third-row-first-col-container" > 
                        <h1>Our Mission</h1>
                        <h7>
                            To provide quality care through Pediatric Early Intervention and to ensure fiscal viability and the future of its vision,<br /> 
                            the Little Giraffe Center will foster a supportive growth and learning environment,<br />
                            which will empower staff and families to become part of the therapy team.<br />
                            The Little Giraffe Center will continue to listen and respond to community needs in an atmosphere of fun and creativity.<br />
                            Our treatment center include swings, sensory rooms, functional play rooms, and play gyms.
                        </h7>
                    </Container>           
                </Col>
            </Row>
      </Container>
    );
}