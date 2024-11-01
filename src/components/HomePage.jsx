import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";

function HomePage() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    return ( 
        <Container className="mt-5">
            <h1>Welcome, {user.name}</h1>
            <p>You are now {user.isLoggedIn ? 'logged in' : 'logged out'}.</p>
            <Container className="d-flex justify-content-center">
                <Button className="mx-1" variant="primary" onClick={() => navigate('/contacts')}>Contacts</Button>
                <Button className="mx-1" variant="primary" onClick={() => navigate('/inventory')}>Inventory</Button>
            </Container>
        </Container>
     );
}

export default HomePage;