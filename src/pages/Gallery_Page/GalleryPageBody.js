import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import first_image from './../../assets/images/100_3231.JPG';
import second_image from './../../assets/images/100_3233.JPG';
import third_image from './../../assets/images/100_3237.JPG';
import fourth_image from './../../assets/images/100_3239.JPG';
import fifth_image from './../../assets/images/100_3244.JPG';
import sixth_image from './../../assets/images/100_3251.JPG';
import seventh_image from './../../assets/images/IMG_1960.JPG';
import eighth_image from './../../assets/images/IMG_3629.JPG';
import ninth_image from './../../assets/images/IMG_3634.JPG';
import tenth_image from './../../assets/images/n1108680246_30214041_321.jpg';
import twelfth_image from './../../assets/images/Picture001.jpg';
import thirteenth_image from './../../assets/images/Picture010.jpg';

import './../../assets/css/main-style.css';

export default class GalleryPage extends React.Component {
    render() {
        return (
          <Container className="gallery-page-body-container" >
          <Row className="gallery-page-body-first-row" >
              <Col xx-sm={2}className="gallery-page-body-first-row-col" >
                  <img src={first_image} alt="first" className='gallery-page-body-first-row-col-image'></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-first-row-second-col" >
                  <img src={second_image} alt="second" className='gallery-page-body-first-row-second-col-image' ></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-first-row-third-col" >
                  <img src={third_image} alt="third" className='gallery-page-body-first-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-second-row" >
              <Col xx-sm={2}className="gallery-page-body-second-row-col" >
                  <img src={fourth_image} alt="fourth" className='gallery-page-body-second-row-col-image'></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-first-row-second-col" >
                  <img src={fifth_image} alt="fifth" className='gallery-page-body-second-row-second-col-image' ></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-first-row-third-col" >
                  <img src={sixth_image} alt="sixth" className='gallery-page-body-second-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-second-row" >
              <Col xx-sm={2}className="gallery-page-body-third-row-col" >
                  <img src={seventh_image} alt="seventh" className='gallery-page-body-third-row-col-image'></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-third-row-second-col" >
                  <img src={eighth_image} alt="eighth" className='gallery-page-body-third-row-second-col-image' ></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-third-row-third-col" >
                  <img src={ninth_image} alt="ninth" className='gallery-page-body-third-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-second-row" >
              <Col xx-sm={2}className="gallery-page-body-third-row-col" >
                  <img src={tenth_image} alt="tenth" className='gallery-page-body-fourth-row-col-image'></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-third-row-second-col" >
                  <img src={twelfth_image} alt="twelfth" className='gallery-page-body-fourth-row-second-col-image' ></img>
              </Col>
              <Col xx-sm={2}className="gallery-page-third-row-third-col" >
                  <img src={thirteenth_image} alt="thirteenth" className='gallery-page-body-fourth-row-third-col-image'></img>
              </Col>
          </Row>

            
          </Container>
        );
    }
}
                     
