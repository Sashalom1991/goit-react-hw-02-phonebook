(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={form:"FormContact_form__agLJ_",label:"FormContact_label__3OkBm",input:"FormContact_input__1XIsX",btn:"FormContact_btn__PWtoO"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=n(12),i=n(3),l=n(4),u=n(6),b=n(5),m=n(22),j=(n(17),n(18),n(11)),h=n(2),p=n.n(h),d=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handelChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handelSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handelSubmit,className:p.a.form,children:[Object(d.jsxs)("label",{className:p.a.label,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handelChange,className:p.a.input})]}),Object(d.jsxs)("label",{className:p.a.label,children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handelChange,className:p.a.input})]}),Object(d.jsx)("button",{type:"submit",className:p.a.btn,children:"Add Contact"})]})}}]),n}(a.Component),C=f,O=n(8),x=n.n(O),_=function(t){var e=t.contacts,n=t.delContact;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("b",{children:a}),": ",c]}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(e)},className:x.a.btn,children:"Delete"})]},e)}))})})},v=n(9),g=n.n(v),y=function(t){var e=t.value,n=t.onChangeFilter;return Object(d.jsxs)("label",{className:g.a.label,children:["Find contact by name",Object(d.jsx)("input",{type:"text",value:e,onChange:n,className:g.a.input})]})},F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.FormSubmitHandler=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a},r=t.state.contacts;r.find((function(t){return t.name.toUpperCase()===c.name.toUpperCase()}))?alert("".concat(n," is already in contacts")):r.find((function(t){return t.number.toUpperCase()===c.number.toUpperCase()}))?alert("".concat(a," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.FilterContacts=function(e){t.setState({filter:e.currentTarget.value})},t.SearchContacts=function(){t.state.contacts.filter((function(e){return e.name.toUpperCase().includes(t.state.filter.toUpperCase())}))},t.onDelBtnChange=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.FilterContacts,e=this.FormSubmitHandler,n=this.onDelBtnChange,a=this.state,c=a.contacts,r=a.filter,s=c.filter((function(t){return t.name.toUpperCase().includes(r.toUpperCase())}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(C,{onSubmit:e}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(y,{value:r,onChangeFilter:t}),Object(d.jsx)(_,{contacts:s,delContact:n})]})})}}]),n}(a.Component),S=F;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactsList_list__2nEoe",btn:"ContactsList_btn__2C8UH"}},9:function(t,e,n){t.exports={label:"Filter_label__1s8b-",input:"Filter_input__1MvSI"}}},[[20,1,2]]]);
//# sourceMappingURL=main.26235496.chunk.js.map