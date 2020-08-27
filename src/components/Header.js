import React from "react";
import headerPics from "../assets/images/todo-illustration.jpg";
// import { Link } from "react-router-dom";


const Header = (props) => {
	const h1Style = {
		textAlign: "center",
		margin: "30px",
		color: "green",
	};
	return (
		<header>
			<img className="header-pics" src={headerPics} alt="" />
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
			{/* <ul>
				<Link className="nav-links" to="/">
					<li>Home</li>
				</Link>

				<Link className="nav-links" to="/about">
					<li>About</li>
				</Link>

				<Link className="nav-links" to="/shop">
					<li>Shop</li>
				</Link>

				<Link className="nav-links" to="/shop/socks">
					<li>Socks</li>
				</Link>
			</ul> */}
		</header>
	);
};

export default Header;
