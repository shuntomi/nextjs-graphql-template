import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Sample } from './index';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'src/components/templates/Sample',
  component: Sample,
} as Meta;

const Template: Story<ComponentProps<typeof Sample>> = (args) => (
  <Sample {...args} />
);

// SAMPLE: context 1
export const Context1 = Template.bind({});
Context1.args = {
  incrementNumber: 1,
};

// SAMPLE: context 2
export const Context2 = Template.bind({});
Context2.args = {
  incrementNumber: 2,
};
