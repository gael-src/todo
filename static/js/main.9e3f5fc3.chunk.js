(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),r=(a(13),a(14),a(7)),s=a(1),i=a(2),d=a(4),u=a(3),m=function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center",margin:"30px",color:"green"}},"todo"),o.a.createElement("h2",{style:{textAlign:"center",margin:"22px",color:"yellow"}},"React Learning to do's"))},p=(a(15),function(t){return o.a.createElement("li",{className:"li-task"},o.a.createElement("span",{className:t.completed?"completed-item":null},t.title),o.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){t.taskStatus(t.id)}}),o.a.createElement("button",{onClick:function(){t.deleteTask(t.id)}},"x"))}),h=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).addTask=function(t){n.setState({title:t.target.value.toUpperCase()})},n.submitTask=function(t){t.preventDefault(),n.state.title.length>3&&n.state.title.length<25?(n.props.addTaskItem(n.state.title),n.setState({title:"",correctLength:!0})):n.setState({correctLength:!1})},n.state={title:"",correctLength:!0},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"task-form",action:"#"},o.a.createElement("label",{htmlFor:"#"},"Add a task:"),o.a.createElement("input",{type:"text",value:this.state.title,onChange:this.addTask}),this.state.correctLength?null:o.a.createElement("p",null,"Task musst be between 3 and 25 length"),o.a.createElement("button",{onClick:this.submitTask},"Submit"))}}]),a}(o.a.Component),k=a(18),f=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).taskStatus=function(t){var e=n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));n.setState({todos:e})},n.addTaskItem=function(t){var e={id:Object(k.a)(),title:t,completed:!1},a=Object(r.a)(n.state.todos);a.push(e),n.setState({todos:a})},n.deleteTask=function(t){var e=n.state.todos.filter((function(e){return e.id!==t}));n.setState({todos:e})},n.state={todos:[{id:Object(k.a)(),title:"Read React doc",completed:!1},{id:Object(k.a)(),title:"Make a to-do",completed:!1}]},n}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(h,{addTaskItem:this.addTaskItem}),o.a.createElement("ul",{className:"todo-list"},this.state.todos.map((function(e){return o.a.createElement(p,{key:e.id,title:e.title,completed:e.completed,id:e.id,taskStatus:t.taskStatus,deleteTask:t.deleteTask})}))))}}]),a}(o.a.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{text:"Text as props"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9e3f5fc3.chunk.js.map