import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import LikesButton from './LikesButton';

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

    handleLike = (id, newLikes) => {
        const newRecipe = this.state.recipes.find((recipe) => recipe.id === id)
        newRecipe.likes = newLikes
        const newRecipes = this.state.recipes.map(recipe => {
            if (recipe.id === id) {
                return newRecipe
            }
            return recipe;
        })
        this.setState({
            recipes: newRecipes
        })
    }


    render() {
        return (
            <Container>
                <Row>

                    {this.state.recipes.map(recipe => {
                        return (
                            <Col md={4} lg={4} key={recipe.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{recipe.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{recipe.description}</Card.Subtitle>
                                        <Card.Text>
                                            {recipe.review}
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='d-flex'>
                                        <LikesButton id={recipe.id} />
                                        <Button variant="secondary" size="sm">Vegetarian: {recipe.vegetarian}</Button>
                                        <Button variant="success" size="sm">Vegan: {recipe.vegan}</Button>
                                        <Button variant="info" size="sm">GF: {recipe.glutenfree}</Button>
                                    </div>
                                    <div className='d-flex justify-content-around'>
                                        <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                                        <Link to="/recipes/new">Submit a review</Link>
                                    </div>
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