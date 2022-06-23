import React from 'react';
import  Checkbox  from '../components/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Checkbox',
    label: 'Label sample',
    msg: 'Default error message',
    valid: true
};

