import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown as DropdownComponent } from "../ui-components/Dropdown";

export default {
  title: "Example/Dropdown",
  component: DropdownComponent,
  argTypes: {
    onSelect: { action: "select" },
    onClick: { action: "clicked" },
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof DropdownComponent>;

const Template: ComponentStory<typeof DropdownComponent> = (args) => (
  <DropdownComponent {...args} />
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: "Dropdown",
  placeholder: "Pick option",
  values: ["First", "Second", "Third"],
};
