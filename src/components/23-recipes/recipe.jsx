import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LuChefHat } from "react-icons/lu";
import { FaStar, FaRegStar } from "react-icons/fa6";

export const Recipe = (props) => {
	const { name, image, cuisine, rating } = props;

	const score = Math.round(rating);

	const starsFull = [...new Array(score)].map((_, index) => (
		<FaStar key={index} />
	));

	const starsEmpty = [...new Array(5 - score)].map((_, index) => (
		<FaRegStar key={index} />
	));

	return (
		<Card className="h-100">
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<div className="text-secondary">
					{starsFull}
					{starsEmpty}
				</div>
				<Badge
					bg="success"
					className="position-absolute top-0 end-0 m-3"
				>
					<LuChefHat /> {cuisine}
				</Badge>
			</Card.Body>
		</Card>
	);
};