import React, { useState } from "react";
import "./css/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Impressum from "./components/Impressum";
import ThemeContext from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";

const darkStyle = {
	// backgroundColor: "yellow",
};

class App extends React.Component {
	// function App() {
	constructor(props) {
		super(props);
		this.state = {
			timeToGetBusy: false,
			theme: "light",
		};
	}

	// CONNECT CONTEXT
	static contextType = ThemeContext;

	setThemeHandler = () => {
		// this.setState({ theme: this.state.theme === "dark" ? "light" : "dark" });
		this.setState((currentState) => {
			return {
				theme: currentState.theme === "dark" ? "light" : "dark",
			};
		});
	};
	// const themeStateHook = useState("light");
	render() {
		// CONNECT CONTEXT
		const isDark = this.context[0] === "dark" ? true : false;
		return (
			<Router>
				{/* <ThemeContext.Provider value="light"> */}
				<ThemeContext.Provider value={[this.state.theme, this.setThemeHandler]}>
					<div className="App" style={this.state.theme ? darkStyle : "light"}>
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
						<Route
							path="/todo-frontend/Impressum"
							exact
							component={Impressum}
						/>
						{/* </Switch> */}
						<ThemeToggler />
						{/* Toggle Theme</ThemeToggler> */}
					</div>
				</ThemeContext.Provider>
			</Router>
		);
	}
}

export default App;
