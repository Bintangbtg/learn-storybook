import React from 'react';
import Images from '../components/Image/Images';

export default {
  title: 'Example/Images',
  // title: 'Example/Nyoba/Images', | kalo mau mengelompokaan di dalam folder percobaan
  component: Images,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

const Template = (args) => <Images {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};