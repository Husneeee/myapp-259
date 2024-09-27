import React, { useState } from "react";
import { Child } from "./child";

export const Parent = () => {
	const [counter, setCounter] = useState(0);

    // Child component ten parent component e data akatariminda state ler kullanilir
    // Child component te parent component te tanimlana state degerini degistirme 
	//kabiliyetine sahip bir fonksiyon olusturulup gonderirlir.
    // Bu fonksiyon parent component te bulunur. Fonksiyonun gorevi bazi kriterleri kontrol 
	//ederek state in istenilen sekilde degistirilmesini saglamaktir

	const handleCounter = (val) => {
		if (val === -1 && counter === 0) return;

		setCounter((prev) => prev + val);
	};

	return (
		<div className="text-center mt-5">
			<h1>{counter}</h1>
			<Child handleCounter={handleCounter} />
		</div>
	);
};