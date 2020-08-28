import React from "react";
import headerPics from "../assets/images/todo-illustration.jpg";

const Header = (props) => {
	const h1Style = {
		textAlign: "center",
		margin: "30px",
		color: "green",
	};
	return (
		<header>
			<img className="header-pics" src={headerPics} alt="" />
			{props.timeToGetBusy ? <p style={h1Style}>Time to get busy!</p> : null}
		</header>
	);
};

export default Header;
