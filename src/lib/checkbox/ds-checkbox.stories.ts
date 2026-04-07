import type { Meta, StoryObj } from '@storybook/angular';
import { DsCheckboxComponent } from './ds-checkbox.component';

const meta: Meta<DsCheckboxComponent> = {
  title: 'Buckholt/Checkbox Single',
  component: DsCheckboxComponent,
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
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  args: {
    id: 'checkbox-checkboxlabel',
    label: 'Checkbox label',
    name: undefined,
    value: '',
    checked: false,
    disabled: false,
    readonly: false,
    indeterminate: false,
    required: false,
    invalid: false,
  },
};

export default meta;

type Story = StoryObj<DsCheckboxComponent>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    id: 'checkbox-selected',
    label: 'Checkbox selected',
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    id: 'checkbox-indeterminate',
    label: 'Checkbox indeterminate',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: 'Checkbox disabled',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'checkbox-readonly',
    label: 'Checkbox read-only',
    checked: true,
    readonly: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'checkbox-invalid',
    label: 'Checkbox invalid',
    invalid: true,
  },
};