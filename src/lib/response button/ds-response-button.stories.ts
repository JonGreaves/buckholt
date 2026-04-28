import type { Meta, StoryObj } from '@storybook/angular';

import {
  DsResponseButtonComponent,
  type DsResponseButtonOption,
} from './ds-response-button.component';

const defaultOptions: DsResponseButtonOption[] = [
  { label: 'Response 1', value: 'response1' },
  { label: 'Response 2', value: 'response2' },
  { label: 'Response 3', value: 'response3' },
];

const iconOptions: DsResponseButtonOption[] = [
  {
    label: 'Response 1',
    value: 'response1',
    iconClass: 'fa-regular fa-ghost',
  },
  {
    label: 'Response 2',
    value: 'response2',
    iconClass: 'fa-regular fa-bell',
  },
  {
    label: 'Response 3',
    value: 'response3',
    iconClass: 'fa-regular fa-star',
  },
];

const meta: Meta<DsResponseButtonComponent> = {
  title: 'Buckholt/Response button',
  component: DsResponseButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    assistiveText: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    validationMessage: {
      control: 'text',
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multi'],
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
    equalWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    inputId: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
  },
  args: {
    label: 'Response button label',
    assistiveText: '',
    helperText: '',
    validationMessage: '',
    options: defaultOptions,
    selectionMode: 'single',
    size: 'medium',
    equalWidth: false,
    disabled: false,
    readonly: false,
    required: false,
    name: 'responsebuttoninputlabel',
    inputId: 'responsebutton',
  },
};

export default meta;

type Story = StoryObj<DsResponseButtonComponent>;

export const Default: Story = {};

export const MultiSelect: Story = {
  args: {
    selectionMode: 'multi',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const LargeWithIcons: Story = {
  args: {
    size: 'large',
    options: iconOptions,
  },
};

export const EqualWidth: Story = {
  args: {
    equalWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Response 1', value: 'response1', checked: true },
      { label: 'Response 2', value: 'response2' },
      { label: 'Response 3', value: 'response3' },
    ],
  },
};

export const ReadOnly: Story = {
  args: {
    readonly: true,
    options: [
      { label: 'Response 1', value: 'response1', checked: true },
      { label: 'Response 2', value: 'response2' },
      { label: 'Response 3', value: 'response3' },
    ],
  },
};

export const WithHelperText: Story = {
  args: {
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
  },
};

export const WithValidation: Story = {
  args: {
    required: true,
    validationMessage: 'Select a response.',
  },
};