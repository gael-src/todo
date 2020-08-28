import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<h1 className="h1-style">task-src</h1>
			<ul className="ul-nav">
				<li className="li-nav">
					<Link className="nav-links" to="/">
						Home
					</Link>
				</li>
				<li className="li-nav">
					<Link className="nav-links" to="/help">
						Help
					</Link>
				</li>
				<li className="li-nav">
					<Link className="nav-links" to="/Impressum">
						Impressum
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
