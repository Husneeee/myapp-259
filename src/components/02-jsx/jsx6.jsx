import React from "react";

export const Jsx6 = () => {
	const users = [
		{ id: 1, firstName: "John", lastName: "Doe", age: 25 },
		{ id: 2, firstName: "Jane", lastName: "Doe", age: 24 },
		{ id: 3, firstName: "Bob", lastName: "Smith", age: 30 },
		{ id: 4, firstName: "Alice", lastName: "Smith", age: 28 },
		{ id: 5, firstName: "Mark", lastName: "Johnson", age: 35 },
	];

	// Bu bolumde her turlu iteration yontemi kullanilabilir.
	// for, for of, for in, forEach, map, filter, reduce gibi yontemler kullanilabilir.
	// ANCAK JSX ICINDE SADECE MAP KULLANILIR

	// Bir zamanlar Javascript:
	/*
    let strUsers = "";

    users.forEach(item=> {
        strUsers += `<li>${item.firstName} ${item.lastName}</li>`
    });

    document.getElementById("....").innerHTML = strUsers;
    */

	return (
		<ul>
			{users.map((item) => (
				<li key={item.id}>
					{item.firstName} {item.lastName}
				</li>
			))}
		</ul>
	);
};