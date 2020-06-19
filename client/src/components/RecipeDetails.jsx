import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class RecipeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {},
            loading: true,
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    details: data,
                    loading: false,
                })
            })
    }

    render() {
        const { loading, details } = this.state;

        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <Container>
                <Row>
                    <Col md={4} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{details.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{details.description}</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                        </Card.Text>
                            </Card.Body>
                            <div className='d-flex'>
                                <Button variant="danger" size="sm">Likes: {details.likes}</Button>
                                <Button variant="secondary" size="sm">Vegetarian: {details.vegetarian}</Button>
                                <Button variant="success" size="sm">Vegan: {details.vegan}</Button>
                                <Button variant="info" size="sm">GF: {details.glutenfree}</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        )
    }
}