import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ padding: '200px' }}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
