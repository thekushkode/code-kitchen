import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            review: "",
            description: "",
            url: '',
            likes: '',
            vegetarian: '',
            vegan: '',
            glutenfree: '',
            id: '',
            recipes: [],
        }
    }

    componentDidMount() {
        fetch('/api/v1/recipes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recipes: data
                })
            })
    }


    render() {
        return (
            <Container>
                <Row>

                    {this.state.recipes.map(recipe => {
                        return (
                            <Col md={4} lg={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{recipe.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{recipe.description}</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                    <div className='d-flex'>
                                        <Button variant="danger" size="sm">Likes: {recipe.likes}</Button>
                                        <Button variant="secondary" size="sm">Vegetarian: {recipe.vegetarian}</Button>
                                        <Button variant="success" size="sm">Vegan: {recipe.vegan}</Button>
                                        <Button variant="info" size="sm">GF: {recipe.glutenfree}</Button>
                                    </div>
                                    <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                                </Card>
                            </Col>
                                )
                            })}
                    </Row>
            </Container>
        )
    }
}

export default Recipes;