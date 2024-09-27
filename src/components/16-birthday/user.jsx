import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { MdCelebration, MdCake } from "react-icons/md";

export const User = (props) => {
	const { id, image, name, age, celebrated, celebrateUser } = props;

	return (
		<Card className={`mb-3 ${celebrated ? "bg-info-subtle" : ""}`}>
			<Card.Body>
				<Row className="align-items-center g-3">
					<Col xs={3}>
						<Image
							src={`/images/people/${image}`}
							fluid
							roundedCircle
						/>
					</Col>
					<Col xs={9}>
						<Card.Title>{name}</Card.Title>
						<Card.Subtitle>
							<MdCake /> {age}
						</Card.Subtitle>
					</Col>
				</Row>
			</Card.Body>

			{celebrated || (
				<Button onClick={()=>celebrateUser(id)}
					variant="link"
					className=" position-absolute top-0 end-0 fs-3 text-info"
				>
					<MdCelebration />
				</Button>
			)}
		</Card>
	);
};