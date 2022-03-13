import React, { Component } from 'react'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';

function NavBarComponent() {
    return (
        <Navbar className= "navBarComponent" fluid bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                <img className="logo"
                    src="/logo512.png"
                    width="100"
                    height="10%"
                    alt="Brand Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/setlists">Setlists</Nav.Link>
                    <Nav.Link href="/videos">Videos</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>

                    <Form className="d-flex">
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;