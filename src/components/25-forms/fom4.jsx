import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const Form4 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	console.log(formData);

	const handleSubmit = (e) => {
		console.log(formData);

		// 1- Formun default submit davranisi iptal edilir
		e.preventDefault();

		// 2- Form validation islemi yapilir
		if (!firstName || !lastName || !phoneNumber || !email || !address) {
			alert("Please fill all fields");
			return;
		}

		// 3- API a gonderilecek payload olusturulur
		const payload = {
			firstName,
			lastName,
			phoneNumber,
			email,
			address,
		};

		// 4- API a gonderilir

		alert("Form submitted successfully");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Container className="mt-3">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						value={formData.firstName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						value={formData.lastName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						name="phoneNumber"
						type="text"
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="text"
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name="address"
						type="text"
						as="textarea"
						rows={3}
						value={formData.address}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</Container>
	);
};