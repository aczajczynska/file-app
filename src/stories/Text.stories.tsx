import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '../ui-components/Text';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
  content: 'Title',
  option: 'title',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  content: 'Subtitle',
  option: 'subtitle',
};

export const ContentText = Template.bind({});
ContentText.args = {
  content: 'Content text',
  option: 'content',
};

export const Txt = Template.bind({});
Txt.args = {
  content: 'Text',
  option: 'text',
};
