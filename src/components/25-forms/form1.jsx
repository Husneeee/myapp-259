import React, { useState } from "react";
import { Container, FormControl } from "react-bootstrap";

export const Form1 = () => {
	const [email, setEmail] = useState("john@doe.com");

	return (
		<Container className="my-3">
			{/* CONTROLLED INPUT: Eger input belli bir state e bagli ise 
			bu sekilde isimlendirilir */}
            <h5>{email}</h5>
			<FormControl
				type="email"
				placeholder="Enter email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			{/* UNCONTROLLED INPUT: Eger input belli bir state e bagli 
			Sdegilse bu sekilde isimlendirilir */}
            <FormControl className="mt-4" defaultValue="John"/>
		</Container>
	);
};