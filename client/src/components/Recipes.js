import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "thing",
            review: "description"
        }
    }

        componentDidMount() {
            fetch('http://localhost:3001/v1/api/recipes')
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        recipes: data
                    })
                })
        }


    render() {
        return (
            <div>
                {this.state.recipes.map(recipe => {
                    return (
                        <div>
                            <pre>{JSON.stringify(recipe, null, '\n')}</pre>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Recipes;