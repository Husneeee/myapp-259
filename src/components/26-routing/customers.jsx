import React from "react";
import { Link } from "react-router-dom";

export const Customers = () => {
	return (
		<div>
			<h1>Customers</h1>
			<ul>
				<li>
					<Link to="/customers/1">John Doe</Link>
				</li>
				<li>
					<Link to="/customers/2">Jane Smith</Link>
				</li>
				<li>
					<Link to="/customers/3">Bob Johnson</Link>
				</li>
				<li>
					<Link to="/customers/4">Alice Brown</Link>
				</li>
				<li>
					<Link to="/customers/5">Mike Davis</Link>
				</li>
			</ul>
		</div>
	);
};