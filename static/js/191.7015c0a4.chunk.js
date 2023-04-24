"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[191],{5393:function(n,e,r){r.d(e,{II:function(){return s},l0:function(){return u},zx:function(){return d}});var t,a,o,i=r(168),c=r(6444),u=c.ZP.form(t||(t=(0,i.Z)(["\n  max-width: 360px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  gap: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(0, 128, 128, 0.5);\n  border-radius: 10px;\n  padding: 15px;\n"]))),s=c.ZP.input(a||(a=(0,i.Z)(["\n  padding: 8px;\n  border-radius: 10px;\n  border: none;\n  :hover,\n  :focus {\n    outline: 2px solid teal;\n  }\n"]))),d=c.ZP.button(o||(o=(0,i.Z)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 8px;\n  border-radius: 10px;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  line-height: 1.2;\n  background-color: teal;\n  cursor: pointer;\n  :focus,\n  :hover {\n    background-color: rgba(0, 128, 128, 0.8);\n    transform: scale(1.1);\n  }\n"])))},8191:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(9439),a=r(2791),o=r(5393),i=r(9434),c=r(3064),u=r(6382),s=function(n){return n.filter.filter},d=function(n){return n.contacts.contacts},l=function(n){return n.contacts.error},p=function(n){return n.contacts.isLoading},f=function(n){var e=d(n),r=s(n).toLowerCase().trim();return e.filter((function(n){return n.name.toLowerCase().trim().includes(r)}))},x=r(184);function m(n){n.onSubmit;var e=(0,i.v9)(d),r=(0,i.I0)(),s=(0,a.useState)(""),l=(0,t.Z)(s,2),p=l[0],f=l[1],m=(0,a.useState)(""),h=(0,t.Z)(m,2),b=h[0],g=h[1],v=function(n){var e=n.target,r=e.name,t=e.value;switch(r){case"name":f(t);break;case"number":g(t);break;default:return}};return(0,x.jsxs)(o.l0,{onSubmit:function(n){n.preventDefault();var t=e.find((function(n){return n.name===p}));if(t)alert("".concat(p," is already in contact"));else{var a={name:p,number:b,id:(0,u.x0)()};r((0,c.uK)(a)),f(""),g("")}},children:[(0,x.jsx)(o.II,{onChange:v,type:"text",name:"name",value:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name"}),(0,x.jsx)(o.II,{onChange:v,type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Number"}),(0,x.jsx)(o.zx,{type:"submit",children:"Add contact"})]})}var h,b,g=r(168),v=r(6444),j=v.ZP.label(h||(h=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 285px;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 8px;\n"]))),w=v.ZP.input(b||(b=(0,g.Z)(["\n  max-width: 285px;\n  width: 100%;\n  margin-top: 8px;\n  padding: 8px;\n  border-radius: 8px;\n  border: none;\n  :hover,\n  :focus {\n    outline: 2px solid teal;\n  }\n"]))),Z=r(4808);var y,k,C,I=function(){var n=(0,i.I0)(),e=(0,i.v9)(s);return(0,x.jsx)(j,{children:(0,x.jsx)(w,{type:"text",value:e,placeholder:"Find contacts by name",name:"filter",onChange:function(e){n((0,Z.S)(e.currentTarget.value))}})})},P=v.ZP.ul(y||(y=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  gap: 8px;\n"]))),z=v.ZP.li(k||(k=(0,g.Z)(["\n  display: flex;\n  gap: 8px;\n  border: 1px solid teal;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n"]))),A=v.ZP.button(C||(C=(0,g.Z)(["\n  font-size: 16px;\n  padding: 3px;\n  display: flex;\n\n  margin-left: auto;\n\n  border: none;\n  border-radius: 10px;\n  color: #ffffff;\n  line-height: 1.2;\n  background-color: teal;\n  cursor: pointer;\n  :focus,\n  :hover {\n    background-color: tomato;\n    transform: scale(1.1);\n  }\n"])));var S=function(n){var e=n.id,r=n.name,t=n.number,a=(0,i.I0)();return(0,x.jsxs)(z,{children:[(0,x.jsxs)("p",{children:[r,": ",t]}),(0,x.jsx)(A,{onClick:function(){a((0,c.GK)(e))},children:"Delete"})]})};var L=function(){var n=(0,i.v9)(f);return(0,x.jsx)(P,{children:n.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,x.jsx)(S,{id:e,name:r,number:t},e)}))})},N=r(2831),_=r(8402);var F=function(){return(0,x.jsx)(_.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#008080","#269393","#40a0a0","#80c0c0","#b3d9d9"]})};var q=function(){var n=(0,i.I0)(),e=(0,i.v9)(p),r=(0,i.v9)(l);return(0,a.useEffect)((function(){n((0,c.yF)())}),[n]),(0,x.jsxs)(N.Ar,{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(m,{}),e&&!r&&(0,x.jsx)(F,{}),(0,x.jsxs)(N.$0,{children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(I,{}),(0,x.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=191.7015c0a4.chunk.js.map