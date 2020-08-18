import React from "react";
import headerPics from "../assets/images/jonathan-bean-unsplash.jpg";

const Header = (props) => {
	const h1Style = {
		textAlign: "center",
		margin: "30px",
		color: "green",
	};
	return (
		<header>
			<img className="header-pics" src={headerPics} alt=""/>
			<h1 style={h1Style}>todo</h1>
			{props.timeToGetBusy ? <p style={h1Style}>Time to get busy!</p> : null}
			<h2
				style={{
					textAlign: "center",
					margin: "22px",
					color: "green",
				}}
			>
				React Learning to do's
			</h2>
		</header>
	);
};

export default Header;
