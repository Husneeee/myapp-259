import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

export const Child = ({ handleCounter }) => {
	return (
		<ButtonGroup>
			<Button variant="danger" onClick={() => handleCounter(-1)}>
				<TfiMinus />
			</Button>
			<Button variant="info" onClick={() => handleCounter(1)}>
				<TfiPlus />
			</Button>
		</ButtonGroup>
	);
};