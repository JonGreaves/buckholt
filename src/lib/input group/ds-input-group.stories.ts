import type { Meta, StoryObj } from '@storybook/angular';
import { DsInputGroupComponent } from './ds-input-group.component';

const meta: Meta<DsInputGroupComponent> = {
  title: 'Buckholt/Input Group',
  component: DsInputGroupComponent,
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
    },
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    startAddon: {
      control: 'text',
    },
    endAddon: {
      control: 'text',
    },
    actions: {
      control: 'object',
    },
  },
  args: {
    id: 'inputgroup-example',
    label: 'Input label',
    type: 'text',
    value: '',
    placeholder: '',
    disabled: false,
    readonly: false,
    startAddon: undefined,
    endAddon: 'End addon',
    actions: [],
  },
};

export default meta;

type Story = StoryObj<DsInputGroupComponent>;

export const EndAddon: Story = {
  args: {
    id: 'inputgroup-endaddon',
    label: 'Input label',
    endAddon: 'End addon',
  },
};

export const StartAddon: Story = {
  args: {
    id: 'inputgroup-startaddon',
    label: 'Input label',
    startAddon: 'Start addon',
    endAddon: undefined,
  },
};

export const ActionButton: Story = {
  args: {
    id: 'inputgroup-actionexample',
    label: 'Action button example',
    endAddon: undefined,
    actions: [
      {
        label: 'Action',
      },
    ],
  },
};

export const MultipleActionButtons: Story = {
  args: {
    id: 'inputgroup-multiple-actions',
    label: 'Multiple action buttons example',
    endAddon: undefined,
    actions: [
      {
        label: 'Action',
      },
      {
        label: 'Action',
      },
    ],
  },
};

export const StartAndEndAddon: Story = {
  args: {
    id: 'inputgroup-start-end-addon',
    label: 'Input label',
    startAddon: 'Start addon',
    endAddon: 'End addon',
  },
};