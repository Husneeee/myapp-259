import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
	return (
		<Navbar expand="lg" className="bg-info bg-gradient">
			<Container>
				<Navbar.Brand href="#">Technoshop</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="mx-auto my-2 my-lg-0" navbarScroll>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">Products</Nav.Link>
						<Nav.Link href="#action2">About Us</Nav.Link>
						<Nav.Link href="#action2">Contact Us</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-light">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};