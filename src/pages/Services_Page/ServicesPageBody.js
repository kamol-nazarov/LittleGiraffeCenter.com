import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import drdanha_image from './../../assets/images/dr.danha.jpg';
import service_background_image from './../../assets/images/bubbles.png'
import service_image from './../../assets/images/60-smiling-and-holding-notepad.png'
import './../../assets/css/main-style.css';

export default class ServicesPage extends React.Component {
    render() {

        return (
            <Container className="services-page-container" >

                <Row className="service-page-image-header">
                    <Col className='service-page-first-col-image' >
                        <img src={service_background_image} alt="bubbles" className="first-col-image"></img>
                    </Col>
                    <Col className='service-page-second-col-image' >
                        <img src={service_image} alt="giraffe_notepad" className="second-col-image"></img>
                    </Col>
                    <Col className='service-page-third-col-image' >
                        <img src={service_background_image} alt="bubbles" className="third-col-image"></img>
                    </Col>
                </Row>

                <Row className="service-page-first-row" >
                    
                        
                    
                    <h11>
                        LITLE GIRAFFE CENTER, INC provides pediatric Physical, Occupational, Speech, and ABA Therapy.<br />
                        We also specialize in the treatment and prevention of Torticollis. Our highly trained staff<br />
                        can evaulate your child in the clinic or home environment. We are a family and community base center.<br />
                        We understand the hectic schedule of parents and will work around your child individual needs. Our<br />
                        specialized treatment plan of care are individualized according to the, child, parents and staff.<br />
                        We believe every child is special and unique.
                    </h11>
                </Row>

                <Row className="service-page-second-row" >
                    <Col className="service-page-second-row-first-col" >
                        <h12>
                            Dr. Dan Ha, PT, DPT has over 17 years of pediatric physical medicine experience.<br />
                            Dr. Dan attended Creighton University School of Medicine and Allied Health.<br />
                            He specializes in the treatment of various Genetic and Neurological Diagnosis,<br /> 
                            Developmental Delay, Autism Spectrum Disorder, Cerebral Palsy, Asperger Syndrome,<br />
                            Wound Care, Prosthetic and Orthotics, Splints, Adoptive Equipment, Kinesio Tapping,<br />
                            Cranial Helmets, and Cervical Torticollis Collar. Dr. Dan specializes in the treatment<br />
                            of Torticollis and Plagiocephaly. He is the proud father of 2 sons and a daughter.<br />
                            On his days off he spends time with his children enjoying outdoor activities.
                        </h12>
                    </Col>
                    <Col className="service-page-second-row-second-col" >
                    <img
                        className="dr-dan-ha"
                        src={drdanha_image}
                        alt="drdanha"
                      />  
                    </Col>
                </Row>

                <Row className="service-page-third-row" >
                    <h14>
                        OUR SERVICES
                    </h14>
                
                    <h15>
                        WE OFFER THE FOLLOWING TYPES OF THERAPY
                    </h15>
               
                    <h16>
                        Occupational Therapy: 
                    </h16>
                    <h17>
                        Therapeutic use of work, self-care, and play activities to increase independent function,<br />
                        enhance development, and prevent disability.
                    </h17>
               
                    <h18>
                        Physical Therapy:
                    </h18>
                    <h19>
                        Habilitation and rehabilitation concerned with restoration of activity and prevention of disability,<br />
                        with use of a variety of modalities to achieve these purposes.
                    </h19>

                    <h20>
                        Speech/Language Therapy:
                    </h20>
                    <h21>
                        Diagnosis, treatment, and remediation of receptive/expressive speech and language; oral motor deficits;<br />
                        and feeding problems.
                    </h21>
               
                    <h22>
                        SPECIALIZED TREATMENT TECHNIQUES AND SERVICES PROVIDED INCLUDE:
                    </h22>
               
                    <h23>
                        Neuro-developmental Treatment (NDT):
                    </h23>
                    <h24>
                        Use of a variety of hands-on techniques to enhance voluntary movement against gravity and facilitate<br />
                        rotational patterns and equilibrium responses in order to promote more complex skilled movement.
                    </h24>
               
                    <h25>
                        Sensory Integration:
                    </h25>
                    <h26>
                        The enhancement of a child's ability to take in sensory information from the environment and perform<br />
                        with an appropriate adaptive response.
                    </h26>
                
                    <h27>
                        Therapeutic Listening:
                    </h27>
                    <h28>
                        The use of filtered or electronically altered music (in combination with a variety of other treatment techniques)<br />
                        to promote integration and organization of attention, behavior, and movement. Typically, those who benefit most,<br />
                        have difficulty with modulation, self-regulation, body-in-space, and/or body awareness.
                    </h28>
               
                    <h29>
                        Interactive Metronome:
                    </h29>
                    <h30>
                        A computer based technology that enables individuals to directly exercise and improve the processes of motor<br />
                        planning and sequencing, which can affect learning, attention, and sensory integration.
                    </h30>
    
                    <h31>
                        Feeding Therapy:
                    </h31>
                    <h32>
                        Use of oral-motor/feeding techniques designed to strengthen and facilitate mature jaw and tongue movements<br />
                        for mastication and motility of food/liquid in the mouth as well as to increase the tolerance for a variety of <br />
                        food/liquid intake.
                    </h32>
                
                    <h33>
                        Myofacial Release:
                    </h33>
                    <h34>
                        A safe, effective, gentle hands on technique designed to decrease pain, decrease restrictions and increase range<br />
                        of motion.
                    </h34>
                
                    <h35>
                        Wilbarger Protocol:
                    </h35>
                    <h36>
                        A deep pressure and proprioceptive technique designed by Patricia Wilbarger to address sensory defensiveness<br />
                        as part of a sensory diet.
                    </h36>
                
                    <h37>
                        Handwriting Without Tears:
                    </h37>
                    <h38>
                        A specific handwriting curriculum that combines mulit-sensory input and teaching methods aimed at developing legible<br/>
                        and fluid handwriting.
                    </h38>
                </Row>
                
            </Container>
        );
    }
}