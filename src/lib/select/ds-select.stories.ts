import type { Meta, StoryObj } from '@storybook/angular';

import { DsSelectComponent, type DsSelectOption } from './ds-select.component';

const options: DsSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const meta: Meta<DsSelectComponent> = {
  title: 'Buckholt/Select',
  component: DsSelectComponent,
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
        category: 'Attributes',
      },
    },
    name: {
      control: 'text',
      table: {
        category: 'Attributes',
      },
    },
    label: {
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    assistiveText: {
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
    validationMessage: {
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    value: {
      control: 'text',
      table: {
        category: 'State',
      },
    },
    required: {
      control: 'boolean',
      table: {
        category: 'Attributes',
      },
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      table: {
        category: 'Appearance',
      },
    },
    state: {
      control: 'select',
      options: ['default', 'disabled', 'readonly', 'invalid'],
      table: {
        category: 'State',
      },
    },
    options: {
      control: 'object',
      table: {
        category: 'Content',
      },
    },
  },
  args: {
    id: 'exampleSelect',
    name: 'exampleSelect',
    label: 'Select label',
    assistiveText: '',
    helperText: '',
    validationMessage: '',
    placeholder: 'Choose an option',
    value: '',
    required: false,
    size: 'medium',
    state: 'default',
    options,
  },
};

export default meta;

type Story = StoryObj<DsSelectComponent>;

export const Default: Story = {};

export const WithAssistiveText: Story = {
  args: {
    id: 'exampleSelectAssistive',
    assistiveText: 'Assistive text',
  },
};

export const WithHelperText: Story = {
  args: {
    id: 'exampleSelectHelper',
    helperText: 'Helper text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'exampleSelectValidation',
    state: 'invalid',
    helperText: 'Helper text',
    validationMessage: 'Validation error message',
  },
};

export const Disabled: Story = {
  args: {
    id: 'exampleSelectDisabled',
    label: 'Select disabled label',
    state: 'disabled',
  },
};

export const Readonly: Story = {
  args: {
    id: 'exampleSelectReadonly',
    label: 'Select disabled label',
    state: 'readonly',
  },
};

export const Small: Story = {
  args: {
    id: 'exampleSelectSmall',
    size: 'small',
  },
};