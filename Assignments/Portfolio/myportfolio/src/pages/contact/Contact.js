import React, { useEffect } from 'react';
import Contactme from '../../components/contact/contactme';
import "./contact.css";
import { Container, Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Contact() {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 10,
    });
}, []);
  return (
    <Container fluid className="contactdiv">
      <Row className="d-flex justify-content-center align-items-center">
        {/* Contact Text */}
        <Col xs={12} md={12} lg={6} className="contacttext mb-3 mb-lg-0" data-aos="zoom-in">
        <div className="circle"></div>
          <h2>Contact me</h2>
        </Col>

        {/* Contact Form */}
        <Col xs={12} md={12} lg={6} className="contactform" data-aos="zoom-in">
          <Contactme />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
