import React from "react";
import ThemeContext from "../context/ThemeContext";

const styling = {
	cursor: "pointer",
};

const ThemeToggler = (props) => {
	return <button style={styling}>{props.children}</button>;
};

export default ThemeToggler;
