import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'Handel',
    brandUrl: 'https://github.com/onwidget/Handel',
    brandTarget: '_blank',
  }),
});
