import React from "react";

export const Welcome = (props) => {
	return (
		<div style={{ color: props.textColor || "red" }}>
			<h2>
				Welcome {props.firstName} {props.lastName}
			</h2>
		</div>
	);
};