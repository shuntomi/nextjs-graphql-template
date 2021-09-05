---
to: "<%= have_storybook ? `${targetDir}/index.stories.tsx` : null %>"
---

import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { <%= name %> } from './index';

export default {
  title: '<%= targetDir %>',
  component: <%= name %>,
} as Meta;

const Template: Story<ComponentProps<typeof <%= name %>>> = (args) => (
  <<%= name %> {...args} />
);

export const Default = Template.bind({});
