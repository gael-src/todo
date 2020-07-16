import React from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <h1>todo</h1>
      <TodoContainer text="Text as props"/>
    </div>
  )
}

export default App;
