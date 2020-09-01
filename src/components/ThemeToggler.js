import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const darkStyle = {
	backgroundColor: "black",
	border: "none",
	color: "white",
};

const ThemeToggler = (props) => {
	// V1
	const context = useContext(ThemeContext);
	// const context = useContext(ThemeContext);
	const isDark = context[0] === "dark" ? true : false;
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
		<button
			className="toggler"
			style={isDark ? darkStyle : null}
			onClick={togglerThemHandler}
		>
			{props.children}
		</button>
	);
};

export default ThemeToggler;
