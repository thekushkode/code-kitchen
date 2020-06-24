import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class LikesButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
    }

    componentDidMount() {
        const { id } = this.props;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    likes: data.likes
                })
            })
    }

    increaseLikes = () => {
        const { id } = this.props;

        fetch(`/api/v1/recipes/${id}/likes`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    likes: data
                })
            })
    }

    render() {
        return (
            <div>
                <Button variant="danger" size="sm" onClick={this.increaseLikes}>Likes: {this.state.likes}</Button>
            </div>
        )
    }
}