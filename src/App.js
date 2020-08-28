import React from "react";
import "./css/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Impressum from "./components/Impressum";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeToGetBusy: false,
		};
	}
	render() {
		return (
			<Router>
				<div className="App">
					{/* NAV */}
					<Nav />

					{/* HEADER */}
					<Header timeToGetBusy={this.state.timeToGetBusy} />

					<Switch>
						{/* MAIN TASK */}
						{/* LAST ELEMENT BECAUSE OF / OR USE "EXACT" ATTRIBUTE */}
						<Route path="/todo-frontend/" exact component={TodoContainer} />
						{/* <TodoContainer text="Text as props" /> */}

						{/* MAIN TASK */}
						<Route path="/todo-frontend/help" exact component={Help} />
						<Route path="/todo-frontend/help/contact" exact component={Contact} />
						{/* <Help /> */}

						{/* MAIN TASK */}
						<Route path="/todo-frontend/Impressum" exact component={Impressum} />
						{/* <Impressum /> */}
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
