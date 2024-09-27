// KURAL 4: JSX icinde JavaScript ifadesi yerlestirmek 
//icin { } kullanilmalidir. 

export const Jsx2 = () => {
	const student = {
		firstName: "John",
		lastName: "Doe",
		age: 25,
		skills: ["HTML", "CSS", "JavaScript"],
		address: {
			street: "123 Main St",
			city: "Anytown",
			state: "CA",
		},
	};

	return (
		<ul>
			<li>
				<b>First Name: </b> <span>{student.firstName}</span>
			</li>
            <li>
				<b>Last Name: </b> <span>{student.lastName}</span>
			</li>
            <li>
				<b>Address: </b> <span>{student.address.street}</span>
			</li>
            <li>
				<b>Skills: </b> <span>{student.skills.toString()}</span>
			</li>
		</ul>
	);
};

