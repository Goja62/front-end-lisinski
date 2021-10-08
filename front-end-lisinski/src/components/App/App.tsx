import React from 'react';
import './App.css';
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Container >
      <Card>
        <Card.Header>
          <FontAwesomeIcon icon = { faHome }></FontAwesomeIcon> Home
        </Card.Header>
        <Card.Body className = "kontejner">
          <Card.Text>
            Početna strana
          </Card.Text>
        </Card.Body>
      </Card> 
    </Container>
  );
}

export default App;
