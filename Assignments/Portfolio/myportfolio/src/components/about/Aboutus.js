import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import profile from '../../assests/profile.jpeg';
import Icon from './Icon';
import Button from '../button/Button';
import './aboutus.css';
import { Col, Row, Container } from 'react-bootstrap';

function Aboutus() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='modelclass'>
            <Button title='About me' onClick={handleShow} />

            <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    className="custom-modal"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title
                            centered
                            id="contained-modal-title-vcenter"
                            className='w-100 text-center'
                        >
                            About me
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={12} md={7} className='spancol'>
                                    <p>
                                        Hi, my name is <span>Usama Sarwar</span> and I live in Faisalabad, Pakistan.
                                    </p>
                                    <p>
                                        I am currently studying at <span>Government College University Faisalabad</span>, pursuing a degree in <span>BS Software Engineering</span>.
                                    </p>
                                    <p>
                                        I tackle new <span>Technologies</span> and work as a <span>Frontend Developer</span>.
                                    </p>
                                    <p>
                                        I am a problem solver on <span>@Leetcode</span> and have solved over <span>50+</span> problems using <span>Python</span> and <span>JavaScript</span>.
                                    </p>
                                    <p>
                                        I am a student at <span>ICodeGuru</span> learning <span>Data Structures and Algorithms (DSA)</span> with Python.
                                    </p>
                                    <p>
                                        I am excited to learn new languages and work on the backend part of development.
                                    </p>
                                </Col>
                                <Col xs={12} md={5}>
                                    <img src={profile} alt="profile_pic" className="img-fluid" />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Container>
                            <Row>
                                <Col className='abouticon'>
                                    <Icon />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Aboutus;
