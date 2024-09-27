import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Useeffect3 = () => {
	const [counter, setCounter] = useState(0);
	const [error, setError] = useState("");

	useEffect(() => {
		document.title = `You clicked ${counter} times`;
	}, [counter]);

	return (
		<div className="mt-4 text-center">
			<h2>You clicked {counter} times</h2>

			<Button onClick={() => setCounter((prev) => prev + 1)}>
				Click Me
			</Button>
		</div>
	);
};