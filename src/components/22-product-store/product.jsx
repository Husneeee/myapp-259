import React from "react";
import { Badge, Button, Card } from "react-bootstrap";

export const Product = (props) => {
  const { title, description, thumbnail, price, availabilityStatus } = props;
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Img
          variant="top"
          src={thumbnail}
          style={{
            width: "80%",
            display: "block",
            margin: "auto",
          }}
        />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <Badge className="bg-warning text-dark position-absolute top-0 start-0 m-3 fs-5">
        ${price}
      </Badge>

      <Badge className="bg-primary-subtle text-dark position-absolute top-0 end-0 m-3">
        {availabilityStatus}
      </Badge>

      <Card.Footer className=" bg-transparent border-0">
        <Button variant="primary" className="w-100">
          Add to cart
        </Button>
      </Card.Footer>
    </Card>
  );
};
