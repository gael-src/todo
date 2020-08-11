import React from "react";
import "./css/App.scss";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

function App() {
	return (
		<div className="App">
			{/* HEADER */}
			<Header />

			<TodoContainer text="Text as props" />
		</div>
	);
}

export default App;
