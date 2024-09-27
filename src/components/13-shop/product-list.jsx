import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "./product";
import products from "./products.json";

export const ProductList = () => {
	return (
		<Container className="my-5">
			<Row xs={1} sm={2}  lg={3} xl={4} className="g-4">
				{products.map((item) => (
					<Col key={item.id}>
						<Product {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};
