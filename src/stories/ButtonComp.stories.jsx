import React from 'react';
import  Button  from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Form = Template.bind({});
Form.args = {
    success: false,
    value: 'Register',
};

export const Success = Template.bind({});
Success.args = {
    success: true,
    value: 'Go Back',
};

