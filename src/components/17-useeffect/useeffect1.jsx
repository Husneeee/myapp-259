import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Useeffect2 } from "./useeffect2";

const Useeffect1 = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [showComp, setShowComp] = useState(false);

	/*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    USE EFECT asenkron calisir. Dolayisiyla her zaman JSX render olduktan sonra calisir.
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */

	useEffect(() => {
		console.log("MOUNTING: Buradaki kodlar sadece render da calisir");
	}, []);

	useEffect(() => {
		console.log("UPDATING: Buradaki kodlar render ve re-render da calisir");
	});

	useEffect(() => {
		console.log(
			"UPDATING-DA: Buradaki kodlar Dependecy Array icindeki degisken(ler)in degeri degistiginde calisir."
		);
	}, [error]);

	console.log("Burasi hep calisir");

	return (
		<div id="message" className="mt-5 text-center">


            {showComp && <Useeffect2/>}


			<Button onClick={() => setMessage(Math.random())}>
				Set Message
			</Button>
			<Button onClick={() => setError(Math.random())} className="mt-3">
				Set Error
			</Button>

			<Button
				onClick={() => setShowComp((prev) => !prev)}
				className="mt-3"
			>
				Toogle Comp
			</Button>
		</div>
	);
};

export default Useeffect1;