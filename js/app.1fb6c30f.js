(function(t){function e(e){for(var o,i,A=e[0],r=e[1],u=e[2],l=0,c=[];l<A.length;l++)i=A[l],s[i]&&c.push(s[i][0]),s[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(c.length)c.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,A=1;A<n.length;A++){var r=n[A];0!==s[r]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var A=window["webpackJsonp"]=window["webpackJsonp"]||[],r=A.push.bind(A);A.push=e,A=A.slice();for(var u=0;u<A.length;u++)e(A[u]);var d=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"129d":function(t,e,n){t.exports=n.p+"img/edit-outline.a118c487.png"},2611:function(t,e,n){},3313:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TodoList")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list"},[n("div",{staticClass:"header"},[n("h4",[t._v("Simple Todo List")]),n("img",{attrs:{title:t.headerButtonTitle,src:t.headerButtonSrc,width:"24"},on:{click:t.headerButton}})]),"viewTasks"===t.currentState?n("ul",t._l(t.todoItems,function(e,o){return e.completed===t.showCompleted?n("TodoItem",{attrs:{item:e,index:o},on:{completeTask:t.completeTask,viewTask:function(e){return t.viewTask(o)},editTask:function(e){return t.editTask(o)}}}):t._e()}),1):n("Modal",{attrs:{"modal-content":this.todoItems[t.modalContent],"edit-mode":"editTask"===this.currentState},on:{editedValues:t.changeEditedValues}}),"viewTasks"===t.currentState?n("div",{staticClass:"new-task"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],domProps:{value:t.newTask},on:{input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),n("div",{staticClass:"add-task",on:{click:t.addTask}},[n("span",[t._v("Add Task")])])]):n("div",{staticClass:"footer-buttons"},[n("a",{staticClass:"button",class:{warning:"viewSingleTask"===t.currentState,success:"editTask"===t.currentState},on:{click:t.editSaveButton}},[t._v(t._s(t.modalButtonText))]),n("a",{staticClass:"button primal",on:{click:t.toggleTaskStatus}},[t._v(t._s(t.markButtonText))])])],1)},A=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("span",{on:{click:function(e){return t.emitToParent(t.index,"view")}}},[t._v(t._s(t.item.name))]),o("div",{staticClass:"options"},[o("img",{attrs:{src:n("129d"),width:"16"},on:{click:function(e){return t.emitToParent(t.index,"edit")}}}),o("img",{attrs:{src:n("ea8c"),width:"16"},on:{click:function(e){return t.emitToParent(t.index,"complete")}}})])])},u=[],d={name:"TodoItem",props:{item:Object,index:Number},methods:{emitToParent:function(t,e){this.$emit(e+"Task",t)}}},l=d,c=n("2877"),m=Object(c["a"])(l,r,u,!1,null,null,null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[!1===t.editMode?n("h4",[t._v(t._s(t.modalContent.name))]):n("input",{directives:[{name:"model",rawName:"v-model",value:t.modalContent.name,expression:"modalContent.name"}],attrs:{minlength:"1"},domProps:{value:t.modalContent.name},on:{change:t.sendNewValues,input:function(e){e.target.composing||t.$set(t.modalContent,"name",e.target.value)}}})])},f=[],v={name:"Modal",props:{modalContent:Object,tempContent:Object,editMode:Boolean},methods:{sendNewValues:function(){this.$emit("editedValues",this.modalContent)}}},k=v,T=(n("d8ec"),Object(c["a"])(k,h,f,!1,null,"45a0e01a",null)),g=T.exports,S={name:"TodoList",components:{TodoItem:p,Modal:g},data:function(){return{todoItems:[],showCompleted:!1,newTask:"",currentState:"viewTasks",modalContent:-1,editedValues:{},images:{headerButtonCheck:n("ea8c"),headerButtonMark:n("ad8d"),headerButtonBack:n("d9af")}}},created:function(){localStorage.todoItems?this.todoItems=JSON.parse(localStorage.todoItems):this.todoItems=[{name:"Click this long task item to see all of it's title in case you can't see it all. 👍",completed:!1},{name:"Hover over this. 😄",completed:!1},{name:"Click the top right button to see completed tasks. 👀",completed:!1},{name:"You found the completed tasks section! ✨",completed:!0}]},computed:{modalButtonText:function(){return"viewSingleTask"===this.currentState?"Edit":"Save"},markButtonText:function(){let t="Mark as";return this.todoItems[this.modalContent].completed?t+=" Incomplete":t+=" Completed",t},headerButtonSrc:function(){return"viewTasks"===this.currentState?this.showCompleted?this.images.headerButtonCheck:this.images.headerButtonMark:this.images.headerButtonBack},headerButtonTitle:function(){return"viewTasks"===this.currentState?this.showCompleted?"Show incomplete tasks":"Show completed tasks":"Go back to todo list"}},methods:{toggleListType:function(){this.showCompleted=!this.showCompleted},addTask:function(){if(!this.newTask)return alert("You need to type something in there!");this.todoItems.push({name:this.newTask,description:null,completed:!1}),this.newTask="",this.saveTasks()},toggleTaskStatus:function(){this.todoItems[this.modalContent].completed=!this.todoItems[this.modalContent].completed,this.saveTasks()},completeTask:function(t){this.todoItems[t].completed=!0,this.saveTasks()},saveTasks:function(){localStorage.todoItems=JSON.stringify(this.todoItems)},editTask:function(t){this.refreshModalValues(t),this.currentState="editTask"},viewTask:function(t){this.refreshModalValues(t),this.currentState="viewSingleTask"},refreshModalValues:function(t){this.modalContent=t,this.editedValues={}},editSaveButton:function(){"viewSingleTask"===this.currentState?this.editTask(this.modalContent):(this.saveSingleTask(),this.changeState("viewSingleTask"))},saveSingleTask:function(){JSON.stringify(this.editedValues)!==JSON.stringify({})&&""!==this.editedValues.name&&(this.todoItems[this.modalContent]=this.editedValues,this.saveTasks())},changeState:function(t){this.currentState=t},changeEditedValues:function(t){this.editedValues=t},headerButton:function(){"viewTasks"===this.currentState?this.toggleListType():("editTask"===this.currentState&&this.saveSingleTask(),this.currentState="viewTasks")}}},C=S,b=(n("ed30"),Object(c["a"])(C,i,A,!1,null,null,null)),w=b.exports,M={name:"app",components:{TodoList:w}},N=M,O=(n("b044"),Object(c["a"])(N,s,a,!1,null,null,null)),B=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(B)}}).$mount("#app")},ad8d:function(t,e,n){t.exports=n.p+"img/close-circle-outline.7a51834b.png"},b044:function(t,e,n){"use strict";var o=n("2611"),s=n.n(o);s.a},b694:function(t,e,n){},d8ec:function(t,e,n){"use strict";var o=n("3313"),s=n.n(o);s.a},d9af:function(t,e){t.exports="data:image/png;base64,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"},ea8c:function(t,e,n){t.exports=n.p+"img/checkmark-outline.64789ba8.png"},ed30:function(t,e,n){"use strict";var o=n("b694"),s=n.n(o);s.a}});
//# sourceMappingURL=app.1fb6c30f.js.map