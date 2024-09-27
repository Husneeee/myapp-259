import React, { useEffect, useState } from "react";

export const useCurrencies = () => {
	const [currencies, setCurrencies] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCurrencies = async () => {
			try {
				const res = await fetch(
					"https://api.frankfurter.app/latest?from=try"
				);
				const data = await res.json();
				setCurrencies(data.rates);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		//Normalde buradaki gecikmmeyi saglayan timeout u koymaya gerek yok. data ne kadar hizli gelirse o kadar iyi. 
		// Deneme maksatli, loading spinner i gorebilmek icin setTimeout konuldu
		const timer = setTimeout(() => {
			fetchCurrencies();
		}, 2000);

		return () => clearTimeout(timer);

	}, []);

	return { currencies, error, loading };
};