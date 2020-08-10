import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
		};
	}

	addTask = (event) => {
		this.setState({ title: event.target.value.toUpperCase() });
	};

	submitTask = (event) => {
		event.preventDefault();

		this.props.addTaskItem(this.state.title);

		// RESET COMMENT AND NAME IN STATE
		this.setState({
			title: "",
		});
	};

	render() {
		return (
			<form className="task-form" action="#">
				<label htmlFor="#">Add a task:</label>
				<input type="text" value={this.state.title} onChange={this.addTask} />
				<button onClick={this.submitTask}>Submit</button>
			</form>
		);
	}
}

export default Form;
