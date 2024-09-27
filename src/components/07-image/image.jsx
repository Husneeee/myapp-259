import React from "react";
import imgFrontend from "../../assets/img/frontend.jpg";
import imgHome from "../../assets/img/home.svg";
import imgSalesForce from "../../assets/img/salesforce.png";

export const Image = () => {
	return (
		<div>
			<h2>Static Images</h2>
			<p>
				Eger image ler public klasorunde ise ve herhangi bir
				optimizasyon gerekmiyorsa bu yontem kullanilir
			</p>
			<img src="/vite.svg" alt="" />

			<h2>Dynamic Images</h2>
			<p>
				Eger image ler src klasorunde ise ve optimizasyon gerekiyorsa bu
				yontem kullanilir.
			</p>

			<img src={imgFrontend} alt="" />
			<img src={imgHome} alt="" />
			<img src={imgSalesForce} alt="" />
            <h1>Hello</h1>
		</div>
	);
};