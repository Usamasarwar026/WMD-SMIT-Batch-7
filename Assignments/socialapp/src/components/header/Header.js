
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome, FaUserFriends, FaVideo, FaStore, FaUsers, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import profile from './../../assets/blur pic.jpg'
import './header.css'
function Header() {
    return (
        <>

            <Navbar expand='lg' className="bg-body-tertiary navbar-shadow">
                <Container fluid>
                    <Navbar.Brand className='title' href="#">US S<span>ocial</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='title' id={`offcanvasNavbarLabel-expand`}>
                                US S<span>ocial</span>
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Form className="d-flex">
                                <Form.Control
                                    
                                    type="search"
                                    placeholder="Search to find..."
                                    className="ms-3"
                                    aria-label="Search"
                                />
                            </Form>

                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                {/* Display icon only on large screens, text on smaller screens */}
                                <Nav.Link href="/" className="mx-3">
                                    <FaHome className="mx-2" size={24} />
                                    <span className="d-lg-none">Home</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="mx-3">
                                    <FaUserFriends className="mx-2" size={24} />
                                    <span className="d-lg-none">Friends</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="mx-3">
                                    <FaVideo className="mx-2" size={24} />
                                    <span className="d-lg-none">Videos</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="mx-3">
                                    <FaStore className="mx-2" size={24} />
                                    <span className="d-lg-none">Store</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="mx-3">
                                    <FaUsers className="mx-2" size={24} />
                                    <span className="d-lg-none">Groups</span>
                                </Nav.Link>
                            </Nav>
                            <Nav className="d-flex align-items-center">
                                <Nav.Link href="/login" className="login-signup-link mx-2">
                                    <FaSignInAlt size={15} className="mx-1" />
                                    <span>Login</span>
                                </Nav.Link>

                                {/* Sign Up Link */}
                                <Nav.Link href="/signup" className="login-signup-link mx-2">
                                    <FaUserPlus size={15} className="mx-1" />
                                    <span>Sign Up</span>
                                </Nav.Link>
                                <Navbar.Text className="d-none d-lg-inline mx-2">
                                    <img
                                        src={profile}
                                        alt="User Profile"
                                        width="32"
                                        height="32"
                                        className="rounded-circle image"
                                    />
                                </Navbar.Text>
                            </Nav>


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;





































// import React from 'react';
// import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
// import { FaFacebook, FaHome, FaUserFriends, FaVideo, FaStore, FaUsers } from 'react-icons/fa';
// import { BsBell, BsMessenger, BsFillGrid3X3GapFill } from 'react-icons/bs';
// import { AiOutlinePlus } from 'react-icons/ai';
// import profile from './../../assets/blur pic.jpg'

// import './header.css'; // Import custom CSS if needed

// export default function Header() {
//     return (
//         <Navbar bg="light" expand="lg" className="p-0">
//             <Container fluid>
//                 {/* Left Side: Logo and Search */}
//                 <Navbar.Brand href="#" className="d-flex align-items-center">
//                     <FaFacebook color="#1877f2" size={40} />
//                 </Navbar.Brand>
//                 <Form className="d-none d-lg-flex mx-2">
//                     <FormControl
//                         type="search"
//                         placeholder="Search Facebook"
//                         className="me-2"
//                         aria-label="Search"
//                     />
//                 </Form>

//                 {/* Center: Navigation Icons */}
//                 <Nav className="mx-auto d-flex align-items-center">
//                     <Nav.Link href="#" className="mx-3"><FaHome size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-3"><FaUserFriends size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-3"><FaVideo size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-3"><FaStore size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-3"><FaUsers size={24} /></Nav.Link>
//                 </Nav>

//                 {/* Right Side: Profile and Actions */}
//                 <Nav className="d-flex align-items-center">
//                     <Nav.Link href="#" className="mx-2"><AiOutlinePlus size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-2"><BsMessenger size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-2"><BsBell size={24} /></Nav.Link>
//                     <Nav.Link href="#" className="mx-2"><BsFillGrid3X3GapFill size={24} /></Nav.Link>
//                     <Navbar.Text className="d-none d-lg-inline mx-2">
//                         <img
//                             src={profile}
//                             alt="User Profile"
//                             width="32"
//                             height="32"
//                             className="rounded-circle"
//                         />
//                     </Navbar.Text>
//                 </Nav>
//             </Container>
//         </Navbar>
//     );
// }
