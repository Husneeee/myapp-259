import { Component } from "react";
import { Button } from "react-bootstrap";

class ClassComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 10,
			message: "Hello Class Component",
		};
	}

	componentDidMount() {
		console.log("MOUNTING: Burasi ilk render da calisir");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(
			"UPDATING: Burasi sadece re-render da calisir. Ilk render da calismaz"
		);

		if (prevState.counter !== this.state.counter) {
			console.log(
				"UPDATING: Burasi sadece counter degeri degistiginde calisir"
			);
		}
	}

	componentWillUnmount() {
		console.log(
			"UNMOUNTING: Burasi component DOM dan atildiktan sonra calisir"
		);
	}

	render() {
		return (
			<div>
				<h1>Class Component</h1>
				<p>Message: {this.state.message}</p>
				<p>Counter: {this.state.counter}</p>

				<Button
					onClick={() =>
						this.setState((prev) => ({ counter: prev.counter + 1 }))
					}
				>
					Set Counter
				</Button>

				<Button
					onClick={() =>
						this.setState((prev) => ({ message: Math.random() }))
					}
				>
					Set Message
				</Button>
			</div>
		);
	}
}

export default ClassComp;