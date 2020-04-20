import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { ThemeType } from '../src/types';
import { createTheme } from '../src/theme';
import { ThemeProvider } from '../src/providers/ThemeProvider';

const themes = [
  {
    name: 'Light',
    backgroundColor: '#ffffff',
    ...createTheme(ThemeType.LIGHT),
  },
  { name: 'Dark', backgroundColor: '#333333', ...createTheme(ThemeType.DARK) },
];

addDecorator(withThemesProvider(themes), ThemeProvider);
