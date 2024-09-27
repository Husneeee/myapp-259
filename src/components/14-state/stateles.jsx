import React from "react";
import { Button, Container } from "react-bootstrap";

export const Stateless = () => {
	let classes = "bg-dark text-light";

    // Bu yapida classes degiskeninin degeri degisse de componet 
    //re-render olmadigi surece kullaniciya degisiklik yansimaz

	const handleClasses = (mode) => {
		if (mode === "dark") {
			classes = "bg-dark text-light";
		} else {
			classes = "bg-light text-dark";
		}

        console.log(classes);
	};

	return (
		<Container className={` ${classes} py-4`}>
			<h1>Dark/Light Switcher</h1>

			<div className="d-flex gap-3 mt-4">
				<Button onClick={() => handleClasses("dark")}>Dark Mode</Button>
				<Button onClick={() => handleClasses("light")}>Light Mode</Button>
			</div>
		</Container>
	);
};