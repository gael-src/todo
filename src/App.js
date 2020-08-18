import React from "react";
import "./css/App.scss";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Footer from "./components/Footer";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeToGetBusy: false,
		};
	}
	render() {
		return (
			<div className="App">
				{/* HEADER */}
				<Header timeToGetBusy={this.state.timeToGetBusy} />

				{/* MAIN TASK */}
				<TodoContainer text="Text as props" />

				{/* FOOTER */}
				<Footer />
			</div>
		);
	}
}

export default App;
