import type { Meta, StoryObj } from '@storybook/angular';
import { DsDropdownComponent, DsDropdownOption } from './ds-dropdown.component';

function formatString(value?: string): string {
  return value ? `'${value.replace(/'/g, "\\'")}'` : `''`;
}

function formatBoolean(value: boolean | undefined): string {
  return value ? 'true' : 'false';
}

function formatOptions(options: DsDropdownOption[]): string {
  const entries = options
    .map(
      (option) =>
        `  { label: '${option.label.replace(/'/g, "\\'")}', value: '${option.value.replace(/'/g, "\\'")}' }`,
    )
    .join(',\n');

  return `[\n${entries}\n]`;
}

function buildSource(args: DsDropdownComponent): string {
  const lines = [
    `<ds-dropdown`,
    `  id=${formatString(args.id)}`,
    `  label=${formatString(args.label)}`,
    `  placeholder=${formatString(args.placeholder)}`,
    `  size=${formatString(args.size)}`,
    `  [disabled]=${formatBoolean(args.disabled)}`,
    `  [readonly]=${formatBoolean(args.readonly)}`,
    `  [options]=${formatOptions(args.options ?? [])}`,
  ];

  if (args.assistiveText) {
    lines.push(`  assistiveText=${formatString(args.assistiveText)}`);
  }

  if (args.helperText) {
    lines.push(`  helperText=${formatString(args.helperText)}`);
  }

  if (args.value) {
    lines.push(`  value=${formatString(args.value)}`);
  }

  lines.push(`></ds-dropdown>`);

  return lines.join('\n');
}

const meta: Meta<DsDropdownComponent> = {
  title: 'Buckholt/Dropdown',
  component: DsDropdownComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_source: string, context: { args: DsDropdownComponent }) =>
          buildSource(context.args),
      },
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['md', 'sm'],
    },
  },
  args: {
    id: 'dropdown-example',
    label: 'Dropdown label text',
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
    placeholder: 'Choose an option…',
    size: 'md',
    disabled: false,
    readonly: false,
    value: null,
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
      { label: 'Option 4', value: 'option-4' },
    ],
  },
};

export default meta;

type Story = StoryObj<DsDropdownComponent>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readonly: true,
    value: 'option-2',
  },
};