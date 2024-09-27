import React from "react";
import { Card } from "react-bootstrap";

export const RecipeCard = (props) => {
	const { name, image } = props;
	return (
		<Card>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
			</Card.Body>
		</Card>
	);
};