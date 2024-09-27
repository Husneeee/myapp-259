import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import StoreContext from "../../store";

export const CurrencyList = () => {
	const { currencies } = useContext(StoreContext);
	const arrCurrencies = Object.entries(currencies);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				Exchange Rates
			</Dropdown.Toggle>

			<Dropdown.Menu style={{ height: "70vh", overflow: "auto" }}>
				{arrCurrencies.map((item) => (
					<Dropdown.Item href="#/action-1" key={item[0]}>
						1 {item[0]} = { (1 / item[1]).toFixed(2)}₺
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};