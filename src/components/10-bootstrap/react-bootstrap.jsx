import React from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

export const ReactBootstrap = () => {
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>

			<Dropdown>
				<Dropdown.Toggle variant="warning" id="dropdown-basic">
					SELECT
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">
						Another action
					</Dropdown.Item>
					<Dropdown.Item href="#/action-3">
						Something else
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};