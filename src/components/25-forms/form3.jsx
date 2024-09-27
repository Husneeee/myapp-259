import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const Form3 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	//console.log(formData);

	const handleSubmit = (e) => {

		console.log(formData)

		
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

	return (
		<Container className="mt-3">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						value={formData.firstName}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								firstName: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						value={formData.lastName}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								lastName: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						value={formData.phoneNumber}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								phoneNumber: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						value={formData.email}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						as="textarea"
						rows={3}
						value={formData.address}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								address: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</Container>
	);
};