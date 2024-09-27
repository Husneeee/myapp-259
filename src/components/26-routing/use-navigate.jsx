import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseNavigate = () => {
	const [counter, setCounter] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		if (counter === 0) {
			navigate("/");
		}
	}, [counter]);

	return (
		<div>You are redirecting to the home page after {counter} seconds</div>
	);
};