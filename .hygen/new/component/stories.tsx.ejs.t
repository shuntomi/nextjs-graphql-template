---
to: "<%= have_storybook ? `${targetDir}/index.stories.tsx` : null %>"
---

import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { <%= name %> } from './index';

// eslint-disable-next-line import/no-default-export
export default {
  title: '<%= targetDir %>',
  component: <%= name %>,
} as Meta;

const Template: Story<ComponentProps<typeof <%= name %>>> = (args) => (
  <<%= name %> {...args} />
);

<%if (have_container) {-%>
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
<%} else { -%>
// SAMPLE: context 1
export const Context1 = Template.bind({});
Context1.args = {
  name: 'Bob',
};
<%}-%>
