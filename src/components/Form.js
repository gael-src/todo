import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			correctLength: true,
		};
	}

	// ADD TASK
	addTask = (event) => {
		this.setState({ title: event.target.value });
	};

	// SUBMIT TASK
	submitTask = (event) => {
		event.preventDefault();

		// LENGTH CHECK
		if (this.state.title.length > 3 && this.state.title.length < 25) {
			// SET STATE
			this.props.addTaskItem(this.state.title);

			// RESET INPUT
			this.setState({
				title: "",
				correctLength: true,
			});
		} else {
			// RESET INPUT
			this.setState({
				correctLength: false,
			});
		}
	};

	render() {
		return (
			<form className="task-form" action="#">
				<label htmlFor="#">Add a task:</label>
				<input type="text" value={this.state.title} onChange={this.addTask} />
				{this.state.correctLength ? null : (
					<p>Task musst be between 3 and 25 length</p>
				)}
				<button onClick={this.submitTask}>Submit</button>
			</form>
		);
	}
}

export default Form;
