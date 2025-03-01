import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
    return (
        <Card style={{ width: "20rem", height: "28rem" }}>
            <Card.Img 
                variant="top" 
                src={`../assets/${restaurant.image}`} 
                alt={restaurant.name} 
            />
            <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>{restaurant.description}</Card.Text>
                <Button 
                    variant="primary"
                    href={restaurant.menu}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Website
                </Button>
            </Card.Body>
        </Card>
    );
}

export default RestaurantCard;
