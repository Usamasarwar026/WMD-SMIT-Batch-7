import {useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./navheader.css"
import Aos from "aos";
import 'aos/dist/aos.css'

function Navheader() {
    const [expanded, setExpanded] = useState(false);
       useEffect(()=>{
        Aos.init({
            duration: 1000,
            easing: 'linear',
            delay: 10,
        })
       })

    return (
        <div className="Navheader" data-aos='fade-down'>

            <Navbar variant='dark' expand="md" expanded={expanded} fixed="top">
                <Container fluid className="px-5">
                    <Navbar.Brand className="d-flex fs-3 logo">Usama</Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-nav"
                        onClick={() => {
                            setExpanded(!expanded)

                        }}
                    >
                        {
                            expanded ? (<RxCross1 size={30} className="text-white" />)
                                :
                                (<RxHamburgerMenu size={30} className="text-white" />)
                        }

                    </Navbar.Toggle>
                    <Navbar.Collapse id="my-nav">
                        <Nav className="d-flex gap-5 ms-auto " >
                            <Nav.Item >
                                <Nav.Link as={Link} to="/" className="text-center fs-5  navlink" onClick={() => { setExpanded(false) }}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Skills" className="text-center fs-5 navlink" onClick={() => { setExpanded(false) }}>Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Project" className="text-center fs-5 navlink" onClick={() => { setExpanded(false) }} >Project</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Contact" className="text-center fs-5 navlink" onClick={() => { setExpanded(false) }}>Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default Navheader



