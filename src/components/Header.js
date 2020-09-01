import React, {useContext} from "react";
import headerPicsLight from "../assets/images/todo-illustration.jpg";
import headerPicsDark from "../assets/images/shia.jpg";
import ThemeContext from "../context/ThemeContext";

const Header = (props) => {
	const h1Style = {
		textAlign: "center",
		margin: "30px",
		color: "green",
	};
	// CONNECT CONTEXT
	const context = useContext(ThemeContext);
	const isDark = context[0] === "dark" ? true : false;
	return (
		<header>
			{isDark ? (
				<img className="header-pics" src={headerPicsDark} alt="" />
			) : (
				<img className="header-pics" src={headerPicsLight} alt="" />
			)}
			{/* <img className="header-pics" src={headerPicsLight} alt="" /> */}
			{/* <img className="header-pics" src={headerPicsDark} alt="" /> */}
			{props.timeToGetBusy ? <p style={h1Style}>Time to get busy!</p> : null}
		</header>
	);
};

export default Header;
