import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['green', 'red', 'blue', 'yellow', 'teal'],
    },
    onClick : {action: 'clicked'}
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: 'green',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
};

export const Log = Template.bind({});
Log.args = {
  colorScheme: 'blue',
  children: 'Log',
  onClick: () => console.log('tombol ditekan'),
};
//membuat ketika button di klik akan muncul console sesuai inputan di atas