import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { object, func } from 'prop-types';
import { Form, Button, Alert, Modal, Spinner } from 'react-bootstrap';
import useInventory from "../../hooks/useInventory"

const ProductForm = () => {
    const [product, setProduct] = useState({name: '', price: ''});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errorMesage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const {addToInventory, removeFromInventory} = useInventory();

    const validateForm = () => {
        const errors = {};
        if(!product.name) errors.name = 'Name is required';
        if(!product.price || product.price <= 0) errors.price = 'Price must be a positive number';
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        setSubmitting(true);
        try {
            addToInventory(product.name, product.price)
            setShowSuccessModal(true);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }))
    };

    const handleclose = () => {
        setShowSuccessModal(false);
        setSubmitting(false);
        navigate('/inventory')
    }

    if (isSubmitting) return <p>Submitting product data...</p>

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>Add Product</h3>
                {errorMesage && <Alert variant="danger">{errorMesage}</Alert>}
                <Form.Group controlId="productName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="productPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        isInvalid={!!errors.price}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.price}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner as='span' animation="border" size="sm" /> : 'Submit'}
                </Button>

                <Modal show={showSuccessModal} onHide={handleclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Product has been successfully added!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleclose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}

ProductForm.propTypes = {
    selectedProduct: object,
    onProductUpdated: func
}

export default ProductForm