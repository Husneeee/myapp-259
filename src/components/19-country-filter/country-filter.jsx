import React, { useEffect, useState } from "react";
import { Card, Container, FormControl } from "react-bootstrap";
import data from "./countries.json";

export const CountryFilter = () => {
	const [searchText, setSearchText] = useState("");
	const [countries, setCountries] = useState([]);

	// Re-render larda state degerleri korunur

	useEffect(() => {
		if (!searchText) {
			setCountries([]);
			return;
		}
		const arr = data.filter((item) =>
			item.name
				.toLocaleLowerCase()
				.includes(searchText.toLocaleLowerCase())
		);

		setCountries(arr);
	}, [searchText]);


	return (
		<Container className="mt-4">
			<h1 className="text-center">Country Filter</h1>

			<FormControl
				placeholder="Enter Country Name"
				type="search"
				onChange={(e) => setSearchText(e.target.value)}
			/>

			<Card className={`mt-4 ${!countries.length ? "d-none" : ""}`}>
				<Card.Body>
					{countries.map((item, index) => (
						<p key={item.code}>
							{index + 1}- {item.name}
						</p>
					))}
				</Card.Body>
			</Card>
		</Container>
	);
};