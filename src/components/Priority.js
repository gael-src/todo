import React from "react";

class Priority extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }

	
	render() {
		return (
			<select
				name="priority"
				id="priority"
				defaultValue="select_priority"
				onChange={this.props.priorityHandleChange}
			>
				<option disabled="true" selected value="select_priority">Priority</option>
				<option value="high">High</option>
				<option value="middle">Middle</option>
				<option value="low">Low</option>
			</select>
		);
	}
}
//
export default Priority;
