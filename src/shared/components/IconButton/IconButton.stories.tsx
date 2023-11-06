import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButtons',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  args: {
    text: 'test story',
    variant: 'primary'
  }
}
export const Secondary: Story = {
  args: {
    text: 'test story',
    variant: 'secondary'
  }
}
