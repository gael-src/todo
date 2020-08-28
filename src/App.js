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

					{/* <Switch> */}
					{/* HOME */}
					<Route path="/todo-frontend/" exact component={TodoContainer} />

					{/* HELP */}
					<Route path="/todo-frontend/help" component={Help} />

					{/* HELP / CONTACT */}
					<Route path="/todo-frontend/help/contact" component={Contact} />

					{/* IMPRESSUM */}
					<Route path="/todo-frontend/Impressum" exact component={Impressum} />
					{/* </Switch> */}
				</div>
			</Router>
		);
	}
}

export default App;
