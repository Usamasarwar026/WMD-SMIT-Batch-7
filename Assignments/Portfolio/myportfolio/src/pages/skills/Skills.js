import  {React, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import Progress from '../../components/progress/Progress';
import './skills.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

function Skills() {
  useEffect(() => {
    Aos.init({
        offset:300,
        duration: 1500,
        easing: 'ease-in-sine',
        delay: 10,
    });
}, []);
  return (
    <div>
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={6} className='skill_icon'>
          <FaHtml5 data-aos="fade-right"/>
          <Progress  value='90'  />
          </Col>
          <Col xs={12} md={6} className='skill_icon'>
          <FaCss3Alt data-aos="fade-right"/>
          <Progress value='70'/>
          </Col>
          </Row>
            
          <Row>
          <Col xs={12} md={6} className='skill_icon'>
          <DiJavascript data-aos="fade-right"/>
          <Progress value='65' />
          </Col>
          <Col xs={12} md={6} className='skill_icon'>
          <FaBootstrap data-aos="fade-right"/>
          <Progress value='80'/>
          </Col>
          </Row>
            
          <Row>
          <Col xs={12} md={6} className='skill_icon'>
          <TbBrandCpp data-aos="fade-right"/>
          <Progress value='50'/>
          </Col>
          <Col xs={12} md={6}  className='skill_icon'>
          <FaPython data-aos="fade-right"/>
          <Progress value='60'/>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Skills
