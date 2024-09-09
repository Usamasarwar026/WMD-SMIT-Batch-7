import {React, useEffect} from 'react';
import Card from '../../components/card/card';
import pic1 from '../../assests/amazon.png';
import pic2 from '../../assests/resume.png';
import pic3 from '../../assests/fruitshop.png';
import pic4 from '../../assests/burger.png';
import { Col, Container, Row } from 'react-bootstrap';
import 'aos/dist/aos.css'
import Aos from 'aos';


function Project() {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 10,
    });
}, []);
  return (
    <div style={{ minHeight: "100vh" }}> {/* Ensure full page background */}
      <Container>
        <div data-aos="zoom-out" className='mb-5'>
        <h1 className="project-heading" style={{ color: "white", textAlign: 'center', margin: "30px" }}>
          Recent Top <strong>Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: 'center', fontSize: '20px'}}>
          Here are a few projects I've worked on recently.
        </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={6}  className="mb-5" data-aos="flip-left">
            <Card
              pic={pic1}
              title='Amazon Website'
              description=' Made using HTML5, CSS3, and Bootstrap'
            />
          </Col>

          <Col xs={12} sm={12} md={6} className="mb-5" data-aos="flip-right">
            <Card
              pic={pic2}
              title='Portfolio Website'
              description=' Made using HTML5, CSS3'
            />
          </Col>

          <Col xs={12} sm={12} md={6} className="mb-5" data-aos="flip-left">
            <Card
              pic={pic3}
              title='Fruit Website'
              description=' Made using HTML5, CSS3'
            />
          </Col>

          <Col xs={12} sm={12} md={6}  className="mb-5" data-aos="flip-right">
            <Card
              pic={pic4}
              title='Burger Website'
              description=' Made using HTML5, CSS3'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
