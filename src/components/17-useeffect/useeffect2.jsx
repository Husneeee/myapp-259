import React, { useEffect } from "react";

export const Useeffect2 = () => {


    
	useEffect(() => {
		console.log("MOUNTING2");

		return () => {
			console.log(
		"UNMOUNTING2: Buradaki kodlar component DOM dan atilmadan hemen once calisir"
			);
		};
	}, []);

	return <div>Useeffect2</div>;
};