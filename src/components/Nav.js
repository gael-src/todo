import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<h3>task-src</h3>
			<ul>
				<li>
					<Link className="nav-links" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="nav-links" to="/help">
						Help
					</Link>
				</li>
				<li>
					<Link className="nav-links" to="/Impressum">
						Impressum
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
