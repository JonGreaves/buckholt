import type { Meta, StoryObj } from '@storybook/angular';

import {
  DsMultiFieldInputComponent,
  type DsMultiFieldInputField,
} from './ds-multi-field-input.component';

const textFields: DsMultiFieldInputField[] = [
  {
    type: 'text',
    id: 'Input-inputlabel-1',
    placeholder: 'Placeholder',
  },
  {
    type: 'text',
    id: 'Input-inputlabel-2',
    placeholder: 'Placeholder',
  },
];

const selectAndTextFields: DsMultiFieldInputField[] = [
  {
    type: 'select',
    id: 'Input-inputlabel-1',
    value: '',
    options: [
      { label: 'Please select', value: '' },
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
  },
  {
    type: 'text',
    id: 'Input-inputlabel-2',
    placeholder: 'Placeholder',
  },
];

const meta: Meta<DsMultiFieldInputComponent> = {
  title: 'Buckholt/Multi-field input',
  component: DsMultiFieldInputComponent,
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
    stacked: {
      control: 'boolean',
    },
    fields: {
      control: 'object',
    },
  },
  args: {
    label: 'Input label',
    stacked: false,
    fields: textFields,
  },
};

export default meta;

type Story = StoryObj<DsMultiFieldInputComponent>;

export const TextInputs: Story = {};

export const SelectAndTextInput: Story = {
  args: {
    fields: selectAndTextFields,
  },
};

export const StackedTextInputs: Story = {
  args: {
    stacked: true,
    fields: textFields,
  },
};

export const Disabled: Story = {
  args: {
    fields: textFields.map((field) => ({
      ...field,
      disabled: true,
    })),
  },
};

export const ReadOnly: Story = {
  args: {
    fields: textFields.map((field) => ({
      ...field,
      value: 'Read only value',
      readonly: true,
    })),
  },
};