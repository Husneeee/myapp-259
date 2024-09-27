import React, { useEffect, useState } from "react";
import { AppRouter } from "./router";
import StoreContext from "./store";
import { useCurrencies } from "./hooks/usecurrencies";
import { Loading } from "./components/00-common/loading";
import { ErrorMessage } from "./components/00-common/error-message";

export const App = () => {
	const { currencies, error, loading } = useCurrencies();

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;

	return (
		<StoreContext.Provider value={{ currencies }}>
			<AppRouter />
		</StoreContext.Provider>
	);
};