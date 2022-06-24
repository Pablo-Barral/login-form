import"./index.b33b8c1a.js";import{s as n}from"./styled-components.browser.esm.1eb5a0e8.js";import{a as t,j as r}from"./jsx-runtime.93253c16.js";function c(e){return t("div",{className:`${e.className} container`,children:[t("span",{children:[r("input",{name:e.name,className:"checkbox",type:"checkbox",onChange:a=>{localStorage.setItem(`${e.name}`,a.target.checked)}}),r("span",{className:"checkmark"}),r("label",{htmlFor:e.name,children:e.label})]}),!e.valid&&r("p",{className:"errorMsg",children:e.msg})]})}const l=n(c)`
display: flex;
flex-direction: column;
.errorMsg{
    color: red;
}
`;var o=l,h={parameters:{storySource:{source:`import React from 'react';\r
import  Checkbox  from '../components/Checkbox';\r
\r
export default {\r
  title: 'Checkbox',\r
  component: Checkbox,\r
};\r
\r
const Template = (args) => <Checkbox {...args} />;\r
\r
export const Default = Template.bind({});\r
Default.args = {\r
    name: 'Checkbox',\r
    label: 'Label sample',\r
    msg: 'Default error message',\r
    valid: true\r
};\r
\r
`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}}}}},title:"Checkbox",component:o};const s=e=>r(o,{...e}),i=s.bind({});i.args={name:"Checkbox",label:"Label sample",msg:"Default error message",valid:!0};const b=["Default"];export{i as Default,b as __namedExportsOrder,h as default};
//# sourceMappingURL=CheckboxComp.stories.a6e36ab6.js.map
