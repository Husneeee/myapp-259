import React from "react";
import { Alert } from "react-bootstrap";

export const ErrorMessage = () => {
	return (
		<div className="vh-100 d-flex justify-content-center align-items-center">
			<Alert variant="danger">Something went wrong</Alert>
		</div>
	);
};