import React from "react";
import "./css/App.scss";

import TodoContainer from "./components/TodoContainer";

function App() {
	return (
		<div className="App">
			<TodoContainer text="Text as props" />
		</div>
	);
}

export default App;
