import React from 'react';
import Images from '../components/Image/Images';
import Button from './Button';

export default {
  title: 'Example/Subscription'
};

const Template = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
    <Images size="medium" />
    {/* <Button label="subscribe" /> */}
    {/* mau panggil button tapi error, masi di cari */}
  </div>
);

export const Default = Template.bind({});
Default.args = {};