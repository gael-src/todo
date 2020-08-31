import React from "react";
import ThemeContext from "../context/ThemeContext";

const darkPriorityStyle = {
	backgroundColor: "black",
	border: "none",
	color: "white",
};

class Priority extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }

	// CONNECT CONTEXT
	static contextType = ThemeContext;

	render() {
		// CONNECT CONTEXT
		// const isDark = this.context === "dark" ? true : false;
		const isDark = this.context === "dark" ?? null;

		return (
			<select
				name="priority"
				id="priority"
				defaultValue="select_priority"
				onChange={this.props.priorityHandleChange}
				style={isDark ? darkPriorityStyle : null}
			>
				<option disabled="true" selected value="select_priority">
					Priority
				</option>
				<option value="high">High</option>
				<option value="middle">Middle</option>
				<option value="low">Low</option>
			</select>
		);
	}
}
//
export default Priority;
