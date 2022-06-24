import"./index.b33b8c1a.js";import{s as m}from"./styled-components.browser.esm.1eb5a0e8.js";import{a as l,j as s}from"./jsx-runtime.93253c16.js";function f(e){const c=t=>{let n=new Date(t),p=n.getDay(),d=n.getMonth(),u=n.getFullYear();const r=new Date;let a=r.getFullYear()-u;(r.getMonth()<d||r.getMonth()===d&&r.getDay()<p)&&(a-=1),localStorage.setItem("age",a)};return l("div",{className:e.className,children:[l("label",{htmlFor:e.field,children:[e.field," ",e.req&&"*"]}),s("input",{name:e.field,placeholder:e.placeholder,type:e.type,onChange:t=>{e.type==="date"?c(t.target.value):localStorage.setItem(`${e.field}`,t.target.value)}}),!e.valid&&l("p",{className:"errorMsg",children:[e.field," Invalid"]})]})}const g=m(f)`
display: flex;
flex-direction: column;
color: #767676;
width: 100%;
font-size: 14px;
input{
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;

}
.errorMsg{
    color: red;
}
`;var i=g,w={parameters:{storySource:{source:`import React from 'react';\r
import  Input  from '../components/Input';\r
\r
export default {\r
  title: 'Input',\r
  component: Input,\r
};\r
\r
const Template = (args) => <Input {...args} />;\r
\r
export const Text = Template.bind({});\r
Text.args = {\r
    field: 'Name',\r
    placeholder: 'Name',\r
    type: 'text',\r
    req: true,\r
    valid: true\r
};\r
\r
export const Password = Template.bind({});\r
Password.args = {\r
    field: 'Password',\r
    placeholder: '',\r
    type: 'password',\r
    req: true,\r
    valid: true\r
};\r
\r
export const Date = Template.bind({});\r
Date.args = {\r
    field: 'Date',\r
    placeholder: '',\r
    type: 'date',\r
    req: true,\r
    valid: true\r
};`,locationsMap:{text:{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}},password:{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}},date:{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}}}}},title:"Input",component:i};const o=e=>s(i,{...e}),y=o.bind({});y.args={field:"Name",placeholder:"Name",type:"text",req:!0,valid:!0};const x=o.bind({});x.args={field:"Password",placeholder:"",type:"password",req:!0,valid:!0};const h=o.bind({});h.args={field:"Date",placeholder:"",type:"date",req:!0,valid:!0};const D=["Text","Password","Date"];export{h as Date,x as Password,y as Text,D as __namedExportsOrder,w as default};
//# sourceMappingURL=InputComp.stories.f96bf824.js.map
