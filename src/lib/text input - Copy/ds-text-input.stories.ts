import type { Meta, StoryObj } from '@storybook/angular';

import { DsTextInputComponent } from './ds-text-input.component';

const meta: Meta<DsTextInputComponent> = {
  title: 'Buckholt/Text input',
  component: DsTextInputComponent,
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
    labelMeta: {
      control: 'select',
      options: ['', 'required', 'optional'],
    },
    type: {
      control: 'select',
      options: ['text', 'password'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    value: {
      control: 'text',
    },
    placeholder: {
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
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    iconClass: {
      control: 'text',
    },
    actionIconClass: {
      control: 'text',
    },
    actionAriaLabel: {
      control: 'text',
    },
    showClearButton: {
      control: 'boolean',
    },
  },
  args: {
    id: 'exampleTextInput',
    label: 'Example text input',
    labelMeta: '',
    type: 'text',
    size: 'medium',
    value: '',
    placeholder: '',
    assistiveText: '',
    helperText: '',
    validationMessage: '',
    required: false,
    disabled: false,
    readonly: false,
    invalid: false,
    iconClass: '',
    actionIconClass: '',
    actionAriaLabel: '',
    showClearButton: false,
  },
};

export default meta;

type Story = StoryObj<DsTextInputComponent>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    id: 'exampleTextInputHelper',
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
  },
};

export const Required: Story = {
  args: {
    id: 'exampleTextInputrequired',
    label: 'Required input',
    labelMeta: 'required',
    required: true,
  },
};

export const Optional: Story = {
  args: {
    id: 'exampleTextInputoptional',
    label: 'Optional input',
    labelMeta: 'optional',
  },
};

export const WithIcon: Story = {
  args: {
    id: 'exampleTextInputicon',
    label: 'Input with icon',
    iconClass: 'fa-regular fa-ghost',
  },
};

export const WithActionButton: Story = {
  args: {
    id: 'exampleTextInputactionbtn',
    label: 'Input action button',
    actionIconClass: 'fa-regular fa-calendar-day',
    actionAriaLabel: 'Open calendar',
  },
};

export const WithClearButton: Story = {
  args: {
    id: 'exampleTextInputclear',
    label: 'Input clear button',
    showClearButton: true,
  },
};

export const WithValidation: Story = {
  args: {
    id: 'exampleTextInputvalidation',
    label: 'Input label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    validationMessage: 'Validation error message',
    required: true,
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'exampleDisabledTextInput',
    label: 'Example disabled text input',
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    id: 'exampleReadonlyTextInput',
    label: 'Example read only text input',
    readonly: true,
  },
};

export const Small: Story = {
  args: {
    id: 'exampleSmallTextInput',
    label: 'Small input',
    size: 'small',
  },
};