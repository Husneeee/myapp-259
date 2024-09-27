import React from "react";

export const Jsx7 = () => {
	// Map methodunun for dongusu gibi kullanimi
	const arr = [...new Array(10)].map((item, index) => index + 1);

	return (
		<div>
			{arr.map((item) => (
				<h4 key={item}>Hello Loop</h4>
			))}
		</div>
	);
};