import type { Meta, StoryObj } from '@storybook/angular';
import { DsAlertComponent } from './ds-alert.component';

type AlertStoryArgs = {
  variant: 'info' | 'success' | 'warning' | 'error';
  message: string;
  note?: string;
  noteSmall?: string;
  icon: boolean;
  dismissible: boolean;
  hasContext: boolean;
};

const meta: Meta<AlertStoryArgs> = {
  title: 'Buckholt/Alert',
  component: DsAlertComponent,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
    note: { control: 'text' },
    noteSmall: { control: 'text' },
    icon: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    hasContext: { control: 'boolean' },
  },

  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

export default meta;
type Story = StoryObj<AlertStoryArgs>;

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational alert.',
    note: '',
    noteSmall: '',
    icon: true,
    dismissible: false,
    hasContext: false,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'This is an success alert.',
    note: '',
    noteSmall: '',
    icon: true,
    dismissible: false,
    hasContext: false,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'This is an warning alert.',
    note: '',
    noteSmall: '',
    icon: true,
    dismissible: false,
    hasContext: false,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'This is an error alert.',
    note: '',
    noteSmall: '',
    icon: true,
    dismissible: false,
    hasContext: false,
  },
};
