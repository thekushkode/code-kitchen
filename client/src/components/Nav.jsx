import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Navi extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Code Kitchen</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Recipes</Nav.Link>
                    <Nav.Link href="#pricing">Recipe Details</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navi;