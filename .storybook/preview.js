import * as nextImage from 'next/image';
import { MockedProvider } from '@apollo/client/testing';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

// See: https://storybook.js.org/tutorials/design-systems-for-developers/react/en/build/
// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

// See: https://xenox.dev/next-image-with-storybookjs/
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
  },
};
