import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../store/slices/productSlices';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function UpdateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Retrieve product from the location state
    const { product } = location.state || {};

    const [title, setTitle] = useState(product?.title || '');
    const [price, setPrice] = useState(product?.price || '');
    const [description, setDescription] = useState(product?.description || '');
    const [image, setImage] = useState(product?.image || '');
    const [category, setCategory] = useState(product?.category || '');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (product) {
            setTitle(product.title);
            setPrice(product.price);
            setDescription(product.description);
            setImage(product.image);
            setCategory(product.category);
        }
    }, [product]);

    const onSubmitProduct = () => {
        if (!title || !price || !description || !image || !category) {
            setError("Please fill all fields.");
            return;
        }
        setError("");

        const updatedProductData = {
            title,
            price: parseFloat(price),
            description,
            image,
            category,
        };

        setLoading(true);
        dispatch(updateProduct({ id: product.id, product: updatedProductData }))
            .then(() => {
                setSuccess(true);
                navigate("/products");
            })
            .catch((err) => {
                setError("Failed to update product: " + err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Container className="py-5 mt-5" style={{ border: '2px solid black', boxShadow: '2px 5px 3px black' }}>
            <h1 className="text-center mb-4">Update Product</h1>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Product updated successfully!</Alert>}

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
                    {loading ? "Updating..." : "Update Product"}
                </Button>
            </Form>
        </Container>
    );
}
