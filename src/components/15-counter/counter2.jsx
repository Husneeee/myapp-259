import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";

export const Counter2 = () => {
	const [counter, setCounter] = useState(0);


	return (
		<Container className="my-5">
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary" onClick={() => setCounter(0)}>
					<TfiReload />
				</Button>
				<Button
					variant="danger"
					onClick={() => setCounter((prev) => prev - 1)}
				>
					<TfiMinus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button
					variant="danger"
					onClick={() => setCounter((prev) => prev + 1)}
				>
					<TfiPlus />
				</Button>
			</ButtonGroup>
		</Container>
	);
};