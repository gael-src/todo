import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
	return (
		<section>
			<h2>Help</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima sequi
				eius omnis placeat. Sit assumenda iure architecto, earum, consequuntur
				aliquam molestias modi dicta repellat atque unde corporis rerum! Omnis.
			</p>
			<Link className="nav-links" to="/todo-frontend/help/contact">
				Contact
			</Link>
		</section>
	);
};

export default Help;
