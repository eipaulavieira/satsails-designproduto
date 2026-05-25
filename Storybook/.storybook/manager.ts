import { addons } from '@storybook/manager-api';
import satsailsTheme from './satsails-theme';

addons.setConfig({
  theme: satsailsTheme,
  sidebar: {
    showRoots: true,
  },
});
