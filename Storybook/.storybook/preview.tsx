import type { Preview } from '@storybook/react';
import satsailsTheme from './satsails-theme';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: satsailsTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#f9f9f9' },
        { name: 'dark', value: '#0C0B0D' },
      ],
    },
  },
};

export default preview;
