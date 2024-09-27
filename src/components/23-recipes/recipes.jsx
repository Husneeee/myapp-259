import React, { useState } from "react";
import { SearchBox } from "./search-box";
import { SearchResults } from "./search-results";

export const Recipes = () => {
	const [searchText, setSearchText] = useState("");

	return (
		<div>
			<SearchBox setSearchText={setSearchText} />
			<SearchResults searchText={searchText} />
		</div>
	);
};