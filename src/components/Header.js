import React from "react";

const Header = () => {
	const h1Style = {
		textAlign: "center",
		margin: "30px",
		color: "green",
	};
	return (
		<div>
			<h1 style={h1Style}>todo</h1>
			<p style={h1Style}>Time to get busy!</p>
			<h2
				style={{
					textAlign: "center",
					margin: "22px",
					color: "green",
				}}
			>
				React Learning to do's
			</h2>
		</div>
	);
};

export default Header;
