import useInventory from "../../hooks/useInventory"
import { Container, Button, Card, Col, Row } from "react-bootstrap"
import { useEffect, useContext, useState } from "react"
import {Inventory} from "../../context/InventoryProvider";
import { useNavigate } from "react-router-dom";

const InventoryPage = () => {
    const {inventory} = Inventory();
    const {addToInventory, removeFromInventory} = useInventory();
    const [itemsInInventory, setItemsInInventory] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setItemsInInventory([...inventory])
    }, [inventory])

    function createCard(key, item) {
        return (
            <Card key={key} className="d-flex flex-row justify-content-around">
                <Row>
                    <Col>
                        <Card.Header>
                            {item.name}
                        </Card.Header>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                    </Card.Body>
                    </Col>
                    <Col>
                        <Card.Footer className="d-flex">
                            <Button variant="primary" onClick={() => addToInventory(item.name, item.price)}>+</Button>
                            <Button variant="dark text-light" disabled>{item.quantity}</Button>
                            <Button variant="primary" onClick={() => removeFromInventory(item.name)}>-</Button>
                        </Card.Footer>
                    </Col>
                </Row>
            </Card>
        )
    }

    return (
        <Container>
            <Button variant="primary" onClick={() => navigate(`/add-product`)} className="w-100 mb-3">Add Product</Button>

            {itemsInInventory && itemsInInventory.map((x, i) => createCard(i, x))}
        </Container>
    )
}

export default InventoryPage