import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

export const UseRef = () => {
	const inputUserNameRef = useRef(null);
    // Re-render islemlerinde state ve ref degerleri korunur.

	useEffect(() => {
		const input = inputUserNameRef.current;
		input.focus();
	}, []);

	return (
		<Container className="mt-4">
			<FormControl ref={inputUserNameRef} />
		</Container>
	);
};