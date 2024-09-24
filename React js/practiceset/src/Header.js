import { useState } from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "./Header.css"
// import { Link } from "react-router-dom";
function Header() {
    const [expanded, setExpanded] = useState(false);

   
    return (
        <div className="header">

            <Navbar variant='dark' bg="dark" expand="md" expanded={expanded} fixed="top" >
                <Container fluid className="px-5">
                    <Navbar.Brand className="d-flex">US Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-nav"
                        onClick={() =>{ 
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
                        <Nav className="d-flex gap-5 ms-auto " defaultActiveKey="/home">
                            <Nav.Item >
                                <Nav.Link to="/Home" className="text-center" onClick={() => { setExpanded(false) }}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="/About" className="text-center" onClick={() => { setExpanded(false) }} >About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="/Skills" className="text-center" onClick={() => { setExpanded(false) }}>Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="#NavBar" className="text-center" onClick={() => { setExpanded(false) }}>Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           

        </div>
    )

}
export default Header