(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/todo-illustration.d80fbbb9.jpg"},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(31),s=a.n(l),r=(a(40),a(7)),i=a(8),c=a(10),u=a(9),m=(a(41),a(11)),d=a(1);var p=function(){return o.a.createElement("nav",null,o.a.createElement("h1",{className:"h1-style"},"task-src"),o.a.createElement("ul",{className:"ul-nav"},o.a.createElement("li",{className:"li-nav"},o.a.createElement(m.b,{className:"nav-links",to:"/todo-frontend/"},"Home")),o.a.createElement("li",{className:"li-nav"},o.a.createElement(m.b,{className:"nav-links",to:"/todo-frontend/help"},"Help")),o.a.createElement("li",{className:"li-nav"},o.a.createElement(m.b,{className:"nav-links",to:"/todo-frontend/help/contact"},"Contact")),o.a.createElement("li",{className:"li-nav"},o.a.createElement(m.b,{className:"nav-links",to:"/todo-frontend/Impressum"},"Impressum"))))},h=a(33),f=a.n(h),E=function(e){return o.a.createElement("header",null,o.a.createElement("img",{className:"header-pics",src:f.a,alt:""}),e.timeToGetBusy?o.a.createElement("p",{style:{textAlign:"center",margin:"30px",color:"green"}},"Time to get busy!"):null)},g=a(34),b=(a(47),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("select",{name:"priority",id:"priority",defaultValue:"select_priority",onChange:this.props.priorityHandleChange},o.a.createElement("option",{disabled:"true",selected:!0,value:"select_priority"},"Priority"),o.a.createElement("option",{value:"high"},"High"),o.a.createElement("option",{value:"middle"},"Middle"),o.a.createElement("option",{value:"low"},"Low"))}}]),a}(o.a.Component)),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).priorityHandleChange=function(e){console.log("priorityHandleChange"),console.log(e),n.setState({priority:e.target.value})},n.state={priority:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=null;return"high"===this.state.priority?a={fontWeight:"bold"}:"low"===this.state.priority&&(a={color:"grey"}),o.a.createElement("li",{className:"li-task"},"high"===this.state.priority?o.a.createElement("span",null,"!"):null,o.a.createElement("span",{className:t.completed?"completed-item":null,style:a},this.props.title),o.a.createElement("input",{className:"check-box",type:"checkbox",checked:this.props.completed,onChange:function(){e.props.taskStatus(e.props.id)}}),o.a.createElement("button",{onClick:function(){e.props.deleteTask(e.props.id)}},"x"),o.a.createElement(b,{priorityHandleChange:this.priorityHandleChange,priority:this.state.priority}))}}]),a}(o.a.Component),y=a(17),k=function(e){console.log(Object(n.useState)("hello"));var t=Object(n.useState)(""),a=Object(y.a)(t,2),l=a[0],s=a[1],r=Object(n.useState)(!1),i=Object(y.a)(r,2),c=i[0],u=i[1],m=Object(n.useState)(!1),d=Object(y.a)(m,2),p=d[0],h=d[1];Object(n.useEffect)((function(){console.log("useEffect function from Form triggered")}));return o.a.createElement("form",{className:"task-form",action:"#"},o.a.createElement("label",{htmlFor:"#"},"Add a task:"),o.a.createElement("input",{type:"text",value:l,onChange:function(e){s(e.target.value)}}),c?o.a.createElement("p",null,"Task musst be between 3 and 25 length"):null,p?o.a.createElement("p",null,"Please don't use @ in your Todos!"):null,o.a.createElement("button",{onClick:function(t){if(t.preventDefault(),l.includes("@"))return h(!0);h(!1),l.length>3&&l.length<25?(e.addTaskItem(l),u(!1),s("")):u(!0)}},"Submit"))},j=a(16),O=a.n(j),S=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).taskStatus=function(e){var t=n.state.todos.map((function(t){return t._id===e&&(t.completed=!t.completed),t}));n.setState({todos:t})},n.addTaskItem=function(e){n.setState({isLoading:!0}),O.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){console.log(e.data);var t=Object(g.a)(n.state.todos);t.unshift(e.data),n.setState({todos:t,isLoading:!1})})).catch((function(e){alert("Beim hinzuf\xfcgen gab es einen Fehler: "+e.response),console.error(e)}))},n.deleteTask=function(e){n.setState({isLoading:!0}),O.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(t){console.log(t);var a=n.state.todos.filter((function(t){return t._id!==e}));n.setState({todos:a,isLoading:!1})})).catch((function(e){alert("Beim Entfernen gab es einen Fehler: "+e.response),console.error(e)}))},n.state={todos:[],isLoading:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://tasks-src.herokuapp.com/tasks").then((function(t){console.log(t.data),e.setState({todos:t.data})}))}},{key:"componentDidUpdate",value:function(e){if(console.log("Component did update"),console.log(e),this.state.todos.length>5&&!1===this.state.timeToGetBusy)this.setState({timeToGetBusy:!0});else{if(!(this.state.todos.length<5&&!0===this.state.timeToGetBusy))return;this.setState({timeToGetBusy:!1})}}},{key:"render",value:function(){var e=this;return console.log("todooooooooooComponent render",this.state.todos),o.a.createElement("div",{style:this.state.isLoading?{opacity:.3}:null},o.a.createElement(k,{addTaskItem:this.addTaskItem}),this.state.isLoading?o.a.createElement("p",null,"Task is loading..."):null,o.a.createElement("ul",{className:"todo-list"},this.state.todos.map((function(t){return o.a.createElement(v,{title:t.title,completed:t.completed,id:t._id,taskStatus:e.taskStatus,deleteTask:e.deleteTask})}))))}}]),a}(o.a.Component),T=function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Help"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima sequi eius omnis placeat. Sit assumenda iure architecto, earum, consequuntur aliquam molestias modi dicta repellat atque unde corporis rerum! Omnis."))},w=function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Contact"),o.a.createElement("textarea",{name:"contact",id:"",cols:"30",rows:"10"}))},C=function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Impressum"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima sequi eius omnis placeat. Sit assumenda iure architecto, earum, consequuntur aliquam molestias modi dicta repellat atque unde corporis rerum! Omnis."),o.a.createElement("a",{href:"https://www.freepik.com/vectors/data"},"Data vector created by stories - www.freepik.com"))},N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={timeToGetBusy:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(E,{timeToGetBusy:this.state.timeToGetBusy}),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/todo-frontend/",exact:!0,component:S}),o.a.createElement(d.a,{path:"/todo-frontend/help",exact:!0,component:T}),o.a.createElement(d.a,{path:"/todo-frontend/help/contact",exact:!0,component:w}),o.a.createElement(d.a,{path:"/todo-frontend/Impressum",exact:!0,component:C}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.5599d584.chunk.js.map