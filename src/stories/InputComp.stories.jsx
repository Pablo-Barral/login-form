import React from 'react';
import  Input  from '../components/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    field: 'Name',
    placeholder: 'Name',
    type: 'text',
    req: true,
    valid: true
};

export const Password = Template.bind({});
Password.args = {
    field: 'Password',
    placeholder: '',
    type: 'password',
    req: true,
    valid: true
};

export const Date = Template.bind({});
Date.args = {
    field: 'Date',
    placeholder: '',
    type: 'date',
    req: true,
    valid: true
};