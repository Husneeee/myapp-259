
import React from "react";

// KURAL 5: Parenti olmayan bir JSX yapisi olusturmak icin Fragment kullanilir
// <React.Fragment> </React.Fragment>   veya   <> </>

export const Jsx3 = () => {
	return (
		<>
			<p>Lorem ipsum dolor sit amet.</p>
			<p>Lorem ipsum dolor sit amet consectetur.</p>
			<p>Lorem ipsum dolor sit.</p>
		</>
	);
};