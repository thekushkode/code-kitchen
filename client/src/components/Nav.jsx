import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Navi extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Code Kitchen</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to='/'><Nav.Link href="/">Recipes</Nav.Link></Link>
                    <Link to='/recipes/new'><Nav.Link href="/recipes/new">Add Recipe</Nav.Link></Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navi;