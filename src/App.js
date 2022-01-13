import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ color: "#000" }}>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards!
            </Card.Text>
            <Button variant="primary">read more!</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
