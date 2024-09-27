import React from "react";
import "./product-card.scss";

export const ProductCard = (props) => {

    // Buradaki props.children ifadesi 
    //componetin arasindaki diger elementleri 
    //verecektir.


	return (
		<div className="product-card">
			<h3>{props.title}</h3>
			<p>{props.children}</p>
			<h5>${props.price}</h5>
		</div>
	);
};