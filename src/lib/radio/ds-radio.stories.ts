import type { Meta, StoryObj } from '@storybook/angular';

import { DsRadioComponent } from './ds-radio.component';
import { DsRadioGroupComponent, type DsRadioOption } from './ds-radio-group.component';

const radioOptions: DsRadioOption[] = [
  {
    id: 'radio-radioLabel1',
    label: 'Radio #1',
    value: 'radio-1',
    checked: true,
  },
  {
    id: 'radio-radioLabel2',
    label: 'Radio #2',
    value: 'radio-2',
  },
  {
    id: 'radio-radioLabel3',
    label: 'Radio #3',
    value: 'radio-3',
  },
];

const meta: Meta<DsRadioGroupComponent> = {
  title: 'Buckholt/Radio',
  component: DsRadioGroupComponent,
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
    labelFor: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    assistiveText: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    invalidFeedback: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
  },
  args: {
    label: 'Radio input label',
    labelFor: 'radio-radioLabel1',
    name: 'radioGroup',
    assistiveText: '',
    helperText: '',
    invalidFeedback: '',
    disabled: false,
    readonly: false,
    options: radioOptions,
  },
};

export default meta;

type Story = StoryObj<DsRadioGroupComponent>;

export const Default: Story = {};

export const WithAssistiveText: Story = {
  args: {
    assistiveText: 'Assistive text',
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Helper text',
  },
};

export const WithValidation: Story = {
  args: {
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
    invalidFeedback: 'Validation error message',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};

export const SingleRadio: StoryObj<DsRadioComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ds-radio
        [id]="id"
        [label]="label"
        [name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        [readonly]="readonly"
      />
    `,
  }),
  args: {
    id: 'radio-radioLabel',
    label: 'Radio label',
    name: 'radioSingle',
    value: 'radio',
    checked: false,
    disabled: false,
    readonly: false,
  },
};