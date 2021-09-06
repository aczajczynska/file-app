import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../ui-components/Button/index';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Btn = Template.bind({});
Btn.args = {
  label: 'Button',
};
