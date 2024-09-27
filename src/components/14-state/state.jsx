import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

export const State = () => {

	const [classes, setClasses] = useState("bg-dark text-light")

	

	return (
		<Container className={` ${classes} py-4`}>
			<h1>Dark/Light Switcher</h1>

			<div className="d-flex gap-3 mt-4">
				<Button onClick={()=> setClasses("bg-dark text-light") }>Dark Mode</Button>
				<Button onClick={()=> setClasses("bg-light text-dark") }>
					Light Mode
				</Button>
			</div>
		</Container>
	);
};