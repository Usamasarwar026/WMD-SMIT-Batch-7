import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slices/productSlices';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function AddProductForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmitProduct = () => {
        if (!title || !price || !description || !image || !category) {
            setError("Please fill all fields.");
            return;
        }
        setError("");

        const productData = {
            title,
            price: parseFloat(price),
            description,
            image,
            category,
        };

        setLoading(true);
        dispatch(addProduct(productData))
            .then(() => {
                setSuccess(true);
                navigate("/products");
            })
            .catch((err) => {
                setError("Failed to add product: " + err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Container className="py-5 mt-5 mb-5" style={{ border: '2px solid black', boxShadow: '2px 5px 3px black' }}>
            <h1 className="text-center mb-4">Add a Product</h1>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Product added successfully!</Alert>}

            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter product price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter product description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                    variant="primary"
                    onClick={onSubmitProduct}
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Product"}
                </Button>
            </Form>
        </Container>
    );
}
