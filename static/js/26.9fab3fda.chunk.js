"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26],{3026:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,o,i,p,x=r(4270),d=r(9434),a=r(9778),s=r(168),c=r(5867),l=c.zo.div(t||(t=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px outset grey;\n  padding: 8px;\n  border: 1px solid #e8e8e8;\n  border-radius: 1em;\n  box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;\n\n  &:hover {\n    border: 1px solid #77c063;\n    color: #ff0000;\n"]))),u=c.zo.b(o||(o=(0,s.Z)(["\n  text-align: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),f=c.zo.button(i||(i=(0,s.Z)(["\n  font-size: 13px;\n  padding: 4px 8px;\n  margin-left: auto;\n  color: #090909;\n  background-color: #e8e8e8;\n  border: 1px solid #e8e8e8;\n  border-radius: 1em;\n  cursor: pointer;\n  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n\n  &:hover {\n    border: 1px solid #77c063;\n    color: #ff0000;\n  }\n"]))),b=c.zo.input(p||(p=(0,s.Z)(["\n  margin-left: 8px;\n  width: 18px;\n  height: 18px;\n  border-box: 1px solid #e8e8e8;\n  cursor: pointer;\n"]))),m=r(184);function g(n){var e=n.id,r=n.text,t=n.completed,o=(0,d.I0)();return(0,m.jsxs)(l,{children:[(0,m.jsx)(b,{type:"checkbox",checked:t,onChange:function(){return o((0,a.KE)(e))}}),(0,m.jsx)(u,{children:r}),(0,m.jsx)(f,{type:"button",onClick:function(){return o((0,a._5)(e))},children:"Delete"})]})}var h,k,v=function(n){return n.tasks},j=c.zo.ul(h||(h=(0,s.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n"])));function w(){var n=(0,d.v9)(v).tasks;return(0,m.jsx)(j,{children:n.map((function(n){var e=n.id,r=n.text,t=n.completed;return(0,m.jsx)("li",{children:(0,m.jsx)(g,{id:e,text:r,completed:t})},e)}))})}var y,z=c.zo.form(k||(k=(0,s.Z)(["\n  display: flex;\n  gap: 12px;\n  background-color: #e8e8e8;\n  width: 100%;\n  margin: auto;\n  border: 1px solid #e8e8e8;\n  border-radius: 24px;\n  padding: 24px;\n  margin-bottom: 16px;\n  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 6px #ffffff;\n\n  button {\n    width: 130px;\n    padding: 0.3em 1em;\n    border-radius: 1em;\n    color: #5a5a5a;\n    background: #e8e8e8;\n    border: 2px solid #e8e8e8;\n    transition: all 0.3s;\n    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n  }\n\n  button:hover,\n  button:focus {\n    border: 2px solid #77c063;\n    color: #090909;\n  }\n\n  input {\n    width: 100%;\n    padding: 6px 12px;\n    border: 1px solid #e8e8e8;\n    border-radius: 1em;\n    outline: none;\n    text-align: center;\n    box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;\n  }\n"])));function Z(){var n=(0,d.I0)();return(0,m.jsxs)(z,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget,t=r.elements.text.value;if(""!==t)return n((0,a.gI)(t)),void r.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,m.jsx)("input",{name:"text"}),(0,m.jsx)("button",{type:"submit",children:"Add task"})]})}var _=(0,c.vJ)(y||(y=(0,s.Z)(["\n  body{\n    background-color: #e8e8e8;\n  }\n"]))),C=r(8346);function I(){return(0,m.jsxs)(C.x,{children:[(0,m.jsx)(x.q,{title:"Your tasks"}),(0,m.jsx)(Z,{}),(0,m.jsx)(w,{}),(0,m.jsx)(_,{})]})}}}]);
//# sourceMappingURL=26.9fab3fda.chunk.js.map