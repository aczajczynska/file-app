import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input as InputComponent } from "../ui-components/Input/index";

export default {
  title: "Example/InputComponent",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input = Template.bind({});
Input.args = {
  label: "Label",
  placeholder: "Input Placeholder",
};

export const RequredInput = Template.bind({});
RequredInput.args = {
  label: "Label",
  placeholder: "Input Placeholder",
  requiredText: "Required",
};

export const WarnInput = Template.bind({});
WarnInput.args = {
  label: "Label",
  placeholder: "Input Placeholder",
  warning: "Input Warning!",
  warn: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
  label: "Disabled Input",
  placeholder: "Input Placeholder",
};
