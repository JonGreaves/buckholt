import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsDropdownTypeaheadComponent,
  DsDropdownTypeaheadOption,
} from './ds-dropdown-typeahead.component';

function formatString(value?: string): string {
  return value ? `'${value.replace(/'/g, "\\'")}'` : `''`;
}

function formatBoolean(value: boolean | undefined): string {
  return value ? 'true' : 'false';
}

function formatOptions(options: DsDropdownTypeaheadOption[]): string {
  const entries = options
    .map(
      (option) =>
        `  { label: '${option.label.replace(/'/g, "\\'")}', value: '${option.value.replace(/'/g, "\\'")}' }`,
    )
    .join(',\n');

  return `[\n${entries}\n]`;
}

function buildSource(args: DsDropdownTypeaheadComponent): string {
  const lines = [
    `<ds-dropdown-typeahead`,
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

  lines.push(`></ds-dropdown-typeahead>`);

  return lines.join('\n');
}

const meta: Meta<DsDropdownTypeaheadComponent> = {
  title: 'Buckholt/Dropdown Type-ahead',
  component: DsDropdownTypeaheadComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_source: string, context: { args: DsDropdownTypeaheadComponent }) =>
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
    id: 'dropdown-typeahead',
    label: 'Type-ahead',
    assistiveText: undefined,
    helperText: 'Helper text',
    placeholder: 'Type to filter options',
    size: 'md',
    disabled: false,
    readonly: false,
    value: null,
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Apricot', value: 'apricot' },
      { label: 'Banana', value: 'banana' },
      { label: 'Blueberry', value: 'blueberry' },
      { label: 'Cherry', value: 'cherry' },
    ],
  },
};

export default meta;

type Story = StoryObj<DsDropdownTypeaheadComponent>;

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