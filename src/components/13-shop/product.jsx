import React from "react";
import { Button, Card } from "react-bootstrap";

export const Product = ({ image, title, desc, price }) => {
	return (
		<Card className="text-center h-100">
			<Card.Body>
				<Card.Img variant="top" src={`/images/products/${image}`} />
				<Card.Title className="mt-3">{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>
				<Card.Subtitle className="mb-3">{price}$</Card.Subtitle>
				<Button variant="warning">Ad to cart</Button>
			</Card.Body>
		</Card>
	);
};