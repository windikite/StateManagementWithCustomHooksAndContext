import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Container, Navbar, Nav, Image, Badge } from "react-bootstrap";

function NavigationBar(){
    

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="text-info align-items-center">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/contacts" activeclassname="active">
                        Contacts
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/inventory" activeclassname="active">
                        Inventory
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar