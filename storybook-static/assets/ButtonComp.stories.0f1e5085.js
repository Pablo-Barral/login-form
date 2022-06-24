import"./index.b33b8c1a.js";import{s as e,C as s}from"./styled-components.browser.esm.1eb5a0e8.js";import{j as n}from"./jsx-runtime.93253c16.js";function c(t){return n("button",{className:t.className,onClick:t.function,children:t.value})}const a=e(c)`
background: #0DBDBD;
border: 0;
color: #FFFFFF;
padding: 11px;
border-radius: 10px;
${t=>t.success&&s`
    padding: 65px;
    font-size: 36px;
    `}
`;var o=a,p={parameters:{storySource:{source:`import React from 'react';\r
import  Button  from '../components/Button';\r
\r
export default {\r
  title: 'Button',\r
  component: Button,\r
};\r
\r
const Template = (args) => <Button {...args} />;\r
\r
export const Form = Template.bind({});\r
Form.args = {\r
    success: false,\r
    value: 'Register',\r
};\r
\r
export const Success = Template.bind({});\r
Success.args = {\r
    success: true,\r
    value: 'Go Back',\r
};\r
\r
`,locationsMap:{form:{startLoc:{col:17,line:9},endLoc:{col:47,line:9},startBody:{col:17,line:9},endBody:{col:47,line:9}},success:{startLoc:{col:17,line:9},endLoc:{col:47,line:9},startBody:{col:17,line:9},endBody:{col:47,line:9}}}}},title:"Button",component:o};const r=t=>n(o,{...t}),l=r.bind({});l.args={success:!1,value:"Register"};const u=r.bind({});u.args={success:!0,value:"Go Back"};const B=["Form","Success"];export{l as Form,u as Success,B as __namedExportsOrder,p as default};
//# sourceMappingURL=ButtonComp.stories.0f1e5085.js.map
