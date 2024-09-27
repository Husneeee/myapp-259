import React from "react";

export const GalleryItem = (props) => {
	return (
		<div className="gallery-item">
			<img src={`/images/gallery/
				${props.image}`} alt="" />
		</div>
	);
};