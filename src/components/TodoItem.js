import React, { Component } from "react";
import "../css/todoItem.scss";

// const completedStyle = {
//     fontStyle: "italic",
//     color: "#d35e0f",
//     opacity: 0.4,
//     textDecoration: "line-through",
// };

// Aufgabe
// Wandle diese Functional Component in eine Class Component um

class TodoItem extends Component {
    // constructor(props) {
    //     super(props);
    // }
	// will be called just before component will be removed from DOM
	
    componentWillUnmount() {
        alert("I hope you have really done this job since now it's about to disappear forever!")
	}
	
    render() {
        const props = this.props;
        return (
            <li className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.completed} 
                    onChange={() => props.handleChange(props.id)}>
                </input>
                {/* <span style={ props.completed ? completedStyle : null }>{props.title}</span> */}
                {/* Alternative zu inline style: css klasse verwenden */}
                <span className={ props.completed ? "completed-item" : null } >{props.title}</span>
                <button 
                    onClick={ () => { props.deleteTodoHandler(props.id) } }
                >
                    Delete
                </button>
            </li>
        )
    }
}
// const TodoItem = (props) => {
//     const completedStyle = {
//     fontStyle: "italic",
//     color: "#d35e0f",
//     opacity: 0.4,
//     textDecoration: "line-through",
//     };
//     return (
//         <li className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={props.completed} 
//                 onChange={() => props.handleChange(props.id)}>
//             </input>
//             {/* <span style={ props.completed ? completedStyle : null }>{props.title}</span> */}
//             {/* Alternative zu inline style: css klasse verwenden */}
//             <span className={ props.completed ? "completed-item" : null } >{props.title}</span>
//             <button 
//                 onClick={ () => { props.deleteTodoHandler(props.id) } }
//             >
//                 Delete
//             </button>
//         </li>
//     )
// }
export default TodoItem;

////////////////////////////////////////////////


// import React from "react";
// import "../css/todoItem.scss";

// // const completedStyle = {
// // 	fontStyle: "italic",
// // 	color: "#d35e0f",
// // 	opacity: 0.4,
// // 	textDecoration: "line-through",
// // };

// // FUNCTIONAL COMPONENT
// class TodoItem extends React.component {
// 	// PROPS WRITING ALTERNATIVE
// 	// const { completed, handleChange, deleteTodoHandler, title, id } = props;
// 	// constructor(props) {
//     //     super(props);
//     // }


// 	render() {
// 		const props = this.props;
// 		return (
// 			<li className="li-task">
// 				{/* ALTERNATIVE TO IN-LINE STYLE */}
// 				<span className={props.completed ? "completed-item" : null}>
// 					{this.props.title}
// 				</span>

// 				<input
// 					className="check-box"
// 					type="checkbox"
// 					checked={this.props.completed}
// 					onChange={() => {
// 						this.props.taskStatus(this.props.id);
// 					}}
// 				></input>

// 				<button
// 					// onClick={this.props.deleteTask}
// 					onClick={() => {
// 						this.props.deleteTask(this.props.id);
// 					}}
// 				>
// 					x
// 				</button>
// 			</li>
// 		);
// 	}
// }

// export default TodoItem;
