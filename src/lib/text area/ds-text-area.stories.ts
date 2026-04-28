import type { Meta, StoryObj } from '@storybook/angular';
import { DsTextAreaComponent } from './ds-text-area.component';

const buildAngularSource = (args: DsTextAreaComponent): string => {
  const inputs: string[] = [
    `id="${args.id}"`,
    `label="${args.label}"`,
  ];

  if (args.name) inputs.push(`name="${args.name}"`);
  if (args.value) inputs.push(`value="${args.value}"`);
  if (args.placeholder) inputs.push(`placeholder="${args.placeholder}"`);
  if (args.rows !== 3) inputs.push(`[rows]="${args.rows}"`);
  if (args.maxlength) inputs.push(`[maxlength]="${args.maxlength}"`);
  if (args.assistiveText) inputs.push(`assistiveText="${args.assistiveText}"`);
  if (args.helperText) inputs.push(`helperText="${args.helperText}"`);
  if (args.validationMessage) inputs.push(`validationMessage="${args.validationMessage}"`);
  if (args.showCounter) inputs.push(`[showCounter]="true"`);
  if (args.disabled) inputs.push(`[disabled]="true"`);
  if (args.readonly) inputs.push(`[readonly]="true"`);
  if (args.invalid) inputs.push(`[invalid]="true"`);

  return `<ds-text-area\n  ${inputs.join('\n  ')}\n/>`;
};

const meta: Meta<DsTextAreaComponent> = {
  title: 'Buckholt/Text area',
  component: DsTextAreaComponent,
  tags: ['autodocs'],
  args: {
    id: 'exampleTextarea',
    label: 'Example text area',
    value: '',
    placeholder: '',
    rows: 3,
    maxlength: 250,
    assistiveText: '',
    helperText: '',
    validationMessage: '',
    showCounter: false,
    disabled: false,
    readonly: false,
    invalid: false,
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'number', min: 1 } },
    maxlength: { control: { type: 'number', min: 1 } },
    assistiveText: { control: 'text' },
    helperText: { control: 'text' },
    validationMessage: { control: 'text' },
    showCounter: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, context: { args: DsTextAreaComponent }) =>
          buildAngularSource(context.args),
      },
    },
  },
};

export default meta;

type Story = StoryObj<DsTextAreaComponent>;

export const Default: Story = {};

export const WithAssistiveText: Story = {
  args: {
    id: 'exampleTextareaHelper',
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
  },
};

export const WithCounter: Story = {
  args: {
    id: 'exampleTextareaCounter',
    label: 'Example text area counter',
    showCounter: true,
    maxlength: 250,
  },
};

export const Error: Story = {
  args: {
    id: 'exampleTextareaValidation',
    label: 'Text area validation',
    helperText: 'Helper text',
    validationMessage: 'Validation error message',
  },
};

export const Disabled: Story = {
  args: {
    id: 'exampleDisabledTextarea',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'exampleReadonlyTextarea',
    readonly: true,
    value: 'Read-only text area value',
  },
};