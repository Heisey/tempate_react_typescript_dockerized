import { Meta } from '@storybook/react';
import App from '../'

export default {
  title: 'Pages/Client/App Base',
  component: App,
  argTypes: {}
} as Meta;

const Template = (args) => (
  <App {...args} />
)

export const Base = Template.bind({});