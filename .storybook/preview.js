import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { themes } from '../src/core'

const appThemes = [themes.defaultTheme];

addDecorator(withThemesProvider(appThemes), ThemeProvider);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1E2661'
      },
      {
        name: 'light',
        value: '#fff'
      },
      {
        name: 'primary',
        value: '#84E349'
      },
      {
        name: 'secondary',
        value: '#0792F1'
      },
      {
        name: 'tertiary',
        value: '#7C4AD3'
      }
    ]
  }
}