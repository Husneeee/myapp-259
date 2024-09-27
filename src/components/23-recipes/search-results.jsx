import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Recipe } from "./recipe";

export const SearchResults = ({ searchText }) => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		// Debouncing
		const loadData = async () => {
			const res = await axios(
				`https://dummyjson.com/recipes/search?q=${searchText}`
			);
			const { data } = res;
			setRecipes(data.recipes);
		};

		const debounce = setTimeout(() => {
			loadData();
			console.log("A");
		}, 500);

		console.log(searchText);

		// Buradaki return fonksiyonu ilk render da calismaz
		// searchText prop unun degeri degistiginde onceki deger hafizadan atilmadan hemen once, 
		//yeni deger searchText e gelemeden hemen once calisir
		return () => {
			console.log("B");
			clearTimeout(debounce);
		};
	}, [searchText]);

	return (
		<Container className="my-4">
			<p>
				<em>{recipes.length} recipes found</em>
			</p>

			{searchText}

			<Row className="g-4" xs={1} sm={2} md={3} lg={4} xl={5}>
				{recipes.map((item) => (
					<Col key={item.id}>
						<Recipe {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};