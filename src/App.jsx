import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import restaurants from "./restaurants.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RestaurantCard from "./components/RestaurantCard";

function App() {
  return (
    <Container className="mt-6">
      <h1 className="text-center">Chinatown's Best Eats</h1>
      <Row>
        {restaurants.map((restaurant) => (
          <Col>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;