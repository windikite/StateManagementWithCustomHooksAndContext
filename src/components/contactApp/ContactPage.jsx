import { useContext, useState } from "react";
import ContactProvider from "../../context/ContactProvider";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContactPage() {
    const {contacts} = useContext(ContactProvider);
    const [chosenContact, setChosenContact] = useState({name: '', lastOnline: '', email: '', phone: ''})
    const navigate = useNavigate();

    function createCard(key, contact) {
        return (
            <Card key={key} className="border border-dark bg-dark-subtle text-dark w-100 p-2 justify-content-center align-items-center mb-2" onClick={(e) => setChosenContact(contact)}>
                <Row>
                    <Col className="mt-auto mb-auto">
                        <Image src="profPic.jpg" style={{maxWidth: "100px", maxHeight: "100px"}} roundedCircle />
                    </Col>
                    <Col>
                        <Card.Header>{contact.name}</Card.Header>
                    </Col>
                </Row>
                
            </Card>
        )
    }

    return ( 
        <Container className="mt-5">
            <Button className="w-100 mb-2" variant="primary" onClick={() => navigate('/home')}>Home</Button>
            <Row>
                <Col>
                    <Card>
                        <Image src="profPic.jpg" style={{maxWidth: "100%", maxHeight: "100%"}} roundedCircle />
                        <Card.Header>{chosenContact.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>Email: {chosenContact.email}<br/>Phone: {chosenContact.phone}</Card.Text>
                        </Card.Body>
                        <Card.Footer>{chosenContact.name} last logged in {chosenContact.lastOnline} days ago</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    {contacts && contacts.map((x, i) => createCard(i, x))}
                </Col>
            </Row>
            
        </Container>
     );
}

export default ContactPage;