import type { Meta, StoryObj } from '@storybook/angular';
import { DsCheckboxGroupComponent, DsCheckboxGroupItem } from './ds-checkbox-group.component';

const defaultItems: DsCheckboxGroupItem[] = [
  {
    id: 'checkbox-group-checkbox1',
    label: 'Checkbox #1',
    value: '',
  },
  {
    id: 'checkbox-group-checkbox2',
    label: 'Checkbox #2',
    value: '',
  },
  {
    id: 'checkbox-group-checkbox3',
    label: 'Checkbox #3',
    value: '',
  },
];

const meta: Meta<DsCheckboxGroupComponent> = {
  title: 'Buckholt/Checkbox Group',
  component: DsCheckboxGroupComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    assistiveText: { control: 'text' },
    helperText: { control: 'text' },
    validationMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    items: { control: 'object' },
  },
  args: {
    id: 'checkInputExample',
    label: 'Checkbox input label',
    assistiveText: undefined,
    helperText: undefined,
    validationMessage: undefined,
    disabled: false,
    readonly: false,
    invalid: false,
    items: defaultItems,
  },
};

export default meta;

type Story = StoryObj<DsCheckboxGroupComponent>;

export const Default: Story = {};

export const WithAssistiveAndHelperText: Story = {
  args: {
    id: 'checkInputHelper',
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkInputDisabledGroup',
    label: 'Disabled checkbox group',
    disabled: true,
    items: [
      {
        id: 'checkbox-group-disabled-1',
        label: 'Checkbox #1',
        disabled: true,
      },
      {
        id: 'checkbox-group-disabled-2',
        label: 'Checkbox #2',
        checked: true,
        disabled: true,
      },
      {
        id: 'checkbox-group-disabled-3',
        label: 'Checkbox #3',
        disabled: true,
      },
    ],
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'checkInputReadonlyGroup',
    label: 'Read-only checkbox group',
    readonly: true,
    items: [
      {
        id: 'checkbox-group-readonly-1',
        label: 'Checkbox #1',
        checked: true,
      },
      {
        id: 'checkbox-group-readonly-2',
        label: 'Checkbox #2',
      },
      {
        id: 'checkbox-group-readonly-3',
        label: 'Checkbox #3',
        indeterminate: true,
      },
    ],
  },
};

export const Invalid: Story = {
  args: {
    id: 'checkInputValidation',
    invalid: true,
    helperText: 'Helper text',
    validationMessage: 'Validation error message',
    items: [
      {
        id: 'checkbox-group-invalid-1',
        label: 'Checkbox #1',
        invalid: true,
      },
      {
        id: 'checkbox-group-invalid-2',
        label: 'Checkbox #2',
        invalid: true,
      },
      {
        id: 'checkbox-group-invalid-3',
        label: 'Checkbox #3',
        invalid: true,
      },
    ],
  },
};