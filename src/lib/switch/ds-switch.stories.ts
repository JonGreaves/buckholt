import type { Meta, StoryObj } from '@storybook/angular';

import { DsSwitchComponent } from './ds-switch.component';

const meta: Meta<DsSwitchComponent> = {
  title: 'Buckholt/Forms Inputs/Switch',
  component: DsSwitchComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    label: {
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    helperText: {
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      table: {
        category: 'Appearance',
      },
    },
    checked: {
      control: 'boolean',
      table: {
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'State',
      },
    },
    showStatus: {
      control: 'boolean',
      table: {
        category: 'Appearance',
      },
      if: { arg: 'size', eq: 'small' },
    },
    alwaysActive: {
      control: 'boolean',
      table: {
        category: 'State',
      },
    },
  },
  args: {
    id: 'exampleSwitch',
    label: 'Example switch',
    helperText: undefined,
    size: 'default',
    checked: false,
    disabled: false,
    showStatus: false,
    alwaysActive: false,
  },
};

export default meta;

type Story = StoryObj<DsSwitchComponent>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    id: 'exampleSwitchChecked',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'exampleSwitchDisabled',
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    id: 'exampleSwitchHelper',
    label: 'Example switch helper',
    helperText: 'Helper text',
  },
};

export const Small: Story = {
  args: {
    id: 'exampleSwitchSmall',
    label: 'Example switch small',
    size: 'small',
  },
};

export const SmallWithStatus: Story = {
  args: {
    id: 'exampleSwitchStatus',
    label: 'Example switch status',
    size: 'small',
    showStatus: true,
  },
};

export const AlwaysActive: Story = {
  args: {
    id: 'exampleSwitchActive',
    label: 'Example switch',
    alwaysActive: true,
  },
};