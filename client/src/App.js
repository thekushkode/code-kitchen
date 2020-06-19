import React from 'react';
import './App.css';
import Recipes from './components/Recipes';
import Navi from './components/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navi />
        </header>
      </div>
      <Switch>
        <Route path="/" exact component={Recipes} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
