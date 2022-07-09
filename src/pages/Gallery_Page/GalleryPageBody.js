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
import fourteenth_image from './../../assets/images/IMG_2956.JPG';
import fifteenth_image from './../../assets/images/IMG_2952.JPG';
import sixteenth_image from './../../assets/images/IMG_2953.JPG';
import seventeenth_image from './../../assets/images/IMG_2954.JPG';
import eighteenth_image from './../../assets/images/IMG_2955.JPG';
import nineteenth_image from './../../assets/images/IMG_2957.JPG';
import twentieth_image from './../../assets/images/IMG_2958.JPG';
import twentyfirst_image from './../../assets/images/IMG_2959.JPG';
import twentysecond_image from './../../assets/images/IMG_2960.JPG';


import './../../assets/css/main-style.css';

export default class GalleryPage extends React.Component {
    render() {
        return (
          <Container className="gallery-page-body-container" >
          <Row className="gallery-page-body-first-row" >
              <Col xx-sm={2}className="gallery-page-body-first-row-col" >
                  <img src={first_image} alt="first" className='gallery-page-body-first-row-col-image'></img>
              
              
                  <img src={second_image} alt="second" className='gallery-page-body-first-row-second-col-image' ></img>
              
              
                  <img src={third_image} alt="third" className='gallery-page-body-first-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-second-row" >
              <Col xx-sm={2}className="gallery-page-body-second-row-col" >
                  <img src={fourth_image} alt="fourth" className='gallery-page-body-second-row-col-image'></img>
              

                  <img src={fifth_image} alt="fifth" className='gallery-page-body-second-row-second-col-image' ></img>
              
              
                  <img src={sixth_image} alt="sixth" className='gallery-page-body-second-row-third-col-image'></img>

                  <img src={fourteenth_image} alt="fourteen" className='gallery-page-body-second-row-fourth-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-third-row" >
              <Col xx-sm={2}className="gallery-page-body-third-row-col" >
                  <img src={seventh_image} alt="seventh" className='gallery-page-body-third-row-col-image'></img>
              
              
                  <img src={eighth_image} alt="eighth" className='gallery-page-body-third-row-second-col-image' ></img>
              
              
                  <img src={ninth_image} alt="ninth" className='gallery-page-body-third-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-fourth-row" >
              <Col xx-sm={2}className="gallery-page-body-fourth-row-col" >
                  <img src={tenth_image} alt="tenth" className='gallery-page-body-fourth-row-col-image'></img>
              
              
                  <img src={twelfth_image} alt="twelfth" className='gallery-page-body-fourth-row-second-col-image' ></img>
              
              
                  <img src={thirteenth_image} alt="thirteenth" className='gallery-page-body-fourth-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-fifth-row" >
              <Col xx-sm={2}className="gallery-page-body-fifth-row-col" >
                  <img src={fifteenth_image} alt="fifteenth" className='gallery-page-body-fifth-row-col-image'></img>
              
              
                  <img src={sixteenth_image} alt="sixteenth" className='gallery-page-body-fifth-row-second-col-image' ></img>
              
              
                  <img src={seventeenth_image} alt="seventeenth" className='gallery-page-body-fifth-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-sixth-row" >
              <Col xx-sm={2}className="gallery-page-body-sixth-row-col" >
                  <img src={eighteenth_image} alt="eighteenth" className='gallery-page-body-sixth-row-col-image'></img>
              
              
                  <img src={nineteenth_image} alt="nineteenth" className='gallery-page-body-sixth-row-second-col-image' ></img>
              
              
                  <img src={twentieth_image} alt="twentieth" className='gallery-page-body-sixth-row-third-col-image'></img>
              </Col>
          </Row>
          <Row className="gallery-page-body-seventh-row" >
              <Col xx-sm={2}className="gallery-page-body-seventh-row-col" >
                  <img src={twentyfirst_image} alt="twentyfirst" className='gallery-page-body-seventh-row-col-image'></img>
              
              
                  <img src={twentysecond_image} alt="twentysecond" className='gallery-page-body-seventh-row-second-col-image' ></img>
              </Col>
          </Row>


            
          </Container>
        );
    }
}
                     
