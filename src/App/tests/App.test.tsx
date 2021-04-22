import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import App from '..';
import { themes } from 'core'

test('renders Header', () => {
  const AppComponent = render(
    <ThemeProvider theme={themes.defaultTheme}>
      <App />
    </ThemeProvider>
  );

  const buttonComponent = AppComponent.getByTestId('Buttons/Standard')
  expect(buttonComponent).toHaveTextContent('Button Text')
});

