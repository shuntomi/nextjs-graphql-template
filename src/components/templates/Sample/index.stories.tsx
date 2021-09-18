import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Sample } from './index';

export default {
  title: 'src/components/templates/Sample',
  component: Sample,
} as Meta;

const Template: Story<ComponentProps<typeof Sample>> = (args) => (
  <Sample {...args} />
);

export const Default = Template.bind({});
