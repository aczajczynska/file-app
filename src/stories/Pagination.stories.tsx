import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from '../ui-components/Pagination'

export default {
  title: 'Example/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const BasicPagination = Template.bind({})
BasicPagination.args = {
  currentValue: 3,
  totalValue: 5,
}
