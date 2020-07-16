import React from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <TodoContainer text="Text as props" />
    </div>
  );
}

export default App;
