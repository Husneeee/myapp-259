import React, { useContext, useEffect, useState } from "react";
import { FormControl, FormSelect, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";

export const Converter = () => {
	const { currencies } = useContext(StoreContext);
	const arrCurrencies = Object.keys(currencies);

	const [amount, setAmount] = useState(0);
	const [currency, setCurrency] = useState("USD");
	const [result, setResult] = useState(0);


	useEffect(() => {
		const tryVal = (amount / currencies[currency]).toFixed(2);
		setResult(tryVal);
	}, [amount, currency, currencies]);


	return (
		<InputGroup className="mb-3">
			<FormControl
				placeholder="Type amount"
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>

			<FormSelect
				value={currency}
				onChange={(e) => setCurrency(e.target.value)}
			>
				{arrCurrencies.map((item) => (
					<option key={item}>{item}</option>
				))}
			</FormSelect>

			<InputGroup.Text id="basic-addon1">{result} ₺</InputGroup.Text>
		</InputGroup>
	);
};