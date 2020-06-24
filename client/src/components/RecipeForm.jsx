import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


class RecipeForm extends Component {

    state = {
        name: '',
        url: '',
        vegetarian: false,
        glutenfree: false,
        vegan: false,
        description: '',
        review: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // const body = new FormData();

        // Object.keys(this.state).forEach(key => {
        //     body.append(key, this.state[key]);
        // })

        fetch('/api/v1/recipes', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.props.history.push(`/recipes/${data.id}`);
        })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleCheckboxChange = (e) => {
        const { checked, name } = e.target;
        this.setState({
            [name]: checked
        })
    }

    render() {
        return (
            <div className="m-4">
                <div>
                    <h1 className='text-center mb-4'>Add Your Recipe to Our Database!</h1>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Recipe Name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicUrl">
                        <Form.Label>Recipe Url</Form.Label>
                        <Form.Control type="text" name="url" placeholder="Recipe Url" value={this.state.url} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicReview">
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" rows="5" name="review" value={this.state.review} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckboxVeg">
                        <Form.Check type="checkbox" name="vegetarian" label="Vegetarian" checked={this.state.vegetarian} onChange={this.handleCheckboxChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckboxVegan">
                        <Form.Check type="checkbox" label="Vegan" name="vegan" checked={this.state.vegan} onChange={this.handleCheckboxChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckboxGf">
                        <Form.Check type="checkbox" label="Gluten Free" name="glutenfree" checked={this.state.glutenfree} onChange={this.handleCheckboxChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Review
                    </Button>
                </Form>
            </div>
        )
    }
}

export default RecipeForm