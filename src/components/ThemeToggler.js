import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const styling = {
	cursor: "pointer",
};

const ThemeToggler = (props) => {
	// V1
	const context = useContext(ThemeContext);
	// debugger;
	//V2 also possible (even maybe better)
	// const [theme, setTheme] = useContext(ThemeContext);

	const togglerThemHandler = () => {
		// V1
		const reversedTheme = context[0] === "dark" ? "light" : "dark";
		context[1](reversedTheme);

		// V2
		// const reversedThemeV2 = theme === 'dark' ? 'light' : 'dark';
		// setTheme(reversedThemeV2);
	};
	return (
		<button style={styling} onClick={togglerThemHandler}>
			{props.children}
		</button>
	);
};

export default ThemeToggler;
