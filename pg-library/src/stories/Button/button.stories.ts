import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn()},
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Example',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Example',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Example',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Example',
  },
};
