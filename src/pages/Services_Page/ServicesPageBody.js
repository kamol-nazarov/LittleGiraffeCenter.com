import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
    
import './../../assets/css/main-style.css';

export default class ServicesPage extends React.Component {
    render() {

        return (
            <Container className="services-page-body-container" >


                <Row className="services-page-body-first-row" >
                    
                        
                    <Col className="services-page-body-first-row-first-col" >
                        <Container className="services-page-body-first-row-first-col-container-justify-content-center">
                            <h11>
                                LITLE GIRAFFE CENTER, INC provides pediatric Physical, Occupational, Speech, and ABA Therapy.<br />
                                We also specialize in the treatment and prevention of Torticollis. Our highly trained staff<br />
                                can evaulate your child in the clinic or home environment. We are a family and community base center.<br />
                                We understand the hectic schedule of parents and will work around your child individual needs. Our<br />
                                specialized treatment plan of care are individualized according to the, child, parents and staff.<br />
                                We believe every child is special and unique.
                            </h11>
                        </Container>
                    </Col>
                </Row>
                <Container sm={2}className="services-page-body-second-row-container" >
                    <Row className="services-page-second-row" >
                        <Col className="services-page-second-row-first-col" > {/*2r-1c*/}
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
                        
                        {/* <Col sm={2}className="services-page-second-row-second-col" >
                            <img
                                className="dr-dan-ha"
                                src={drdanha_image}
                                alt="drdanha"
                            />  
                        </Col>*/}
                        
                    </Row>
                </Container>
                
                <Row className="services-page-third-row" >
                    <Container className="services-page-body-third-row-container" >
                        <Col className="services-page-body-third-row-first-col" > {/* 3r-1c */}
                            <h14>
                                OUR SERVICES<br />
                            </h14>
                            
                            <h15>
                                WE OFFER THE FOLLOWING TYPES OF THERAPY<br />
                            </h15>
               
                            <h16>
                                Occupational Therapy:<br />
                            </h16>
                            <h17>
                                Therapeutic use of work, self-care, and play activities to increase independent function,<br />
                                enhance development, and prevent disability.<br />
                            </h17>
               
                            <h18>
                                Physical Therapy:<br />
                            </h18>
                            <h19>
                                Habilitation and rehabilitation concerned with restoration of activity and prevention of disability,<br />
                                with use of a variety of modalities to achieve these purposes.<br />
                            </h19>

                            <h20>
                                Speech/Language Therapy:<br />
                            </h20>
                            <h21>
                                Diagnosis, treatment, and remediation of receptive/expressive speech and language; oral motor deficits;<br />
                                and feeding problems.<br />
                            </h21>
               
                            <h22>
                                SPECIALIZED TREATMENT TECHNIQUES AND SERVICES PROVIDED INCLUDE:<br />
                            </h22>
               
                            <h23>
                                Neuro-developmental Treatment (NDT):<br />
                            </h23>
                            <h24>
                                Use of a variety of hands-on techniques to enhance voluntary movement against gravity and facilitate<br />
                                rotational patterns and equilibrium responses in order to promote more complex skilled movement.<br />
                            </h24>
               
                            <h25>
                                Sensory Integration:<br />
                            </h25>
                            <h26>
                                The enhancement of a child's ability to take in sensory information from the environment and perform<br />
                                with an appropriate adaptive response.<br />
                            </h26>
                
                            <h27>
                                Therapeutic Listening:<br />
                            </h27>
                            <h28>
                                The use of filtered or electronically altered music (in combination with a variety of other treatment techniques)<br />
                                to promote integration and organization of attention, behavior, and movement. Typically, those who benefit most,<br />
                                have difficulty with modulation, self-regulation, body-in-space, and/or body awareness.<br />
                            </h28>
               
                            <h29>
                                Interactive Metronome:<br />
                            </h29>
                            <h30>
                                A computer based technology that enables individuals to directly exercise and improve the processes of motor<br />
                                planning and sequencing, which can affect learning, attention, and sensory integration.<br />
                            </h30>
    
                            <h31>
                                Feeding Therapy:<br />
                            </h31>
                            <h32>
                                Use of oral-motor/feeding techniques designed to strengthen and facilitate mature jaw and tongue movements<br />
                                for mastication and motility of food/liquid in the mouth as well as to increase the tolerance for a variety of <br />
                                food/liquid intake.<br />
                            </h32>
                
                            <h33>
                                Myofacial Release:<br />
                            </h33>
                            <h34>
                                A safe, effective, gentle hands on technique designed to decrease pain, decrease restrictions and increase range<br />
                                of motion.<br />
                            </h34>
                
                            <h35>
                                Wilbarger Protocol:<br />
                            </h35>
                            <h36>
                                A deep pressure and proprioceptive technique designed by Patricia Wilbarger to address sensory defensiveness<br />
                                as part of a sensory diet.<br />
                            </h36>
                
                            <h37>
                                Handwriting Without Tears:
                            </h37>
                            <h38>
                                A specific handwriting curriculum that combines mulit-sensory input and teaching methods aimed at developing legible<br/>
                                and fluid handwriting.
                            </h38>
                        </Col>
                    </Container>
                </Row>
                
            </Container>
        );
    }
}