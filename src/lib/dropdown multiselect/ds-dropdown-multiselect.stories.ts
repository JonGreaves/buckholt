import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsDropdownMultiselectComponent,
  DsDropdownMultiselectOption,
} from './ds-dropdown-multiselect.component';

function formatString(value?: string): string {
  return value ? `'${value.replace(/'/g, "\\'")}'` : `''`;
}

function formatBoolean(value: boolean | undefined): string {
  return value ? 'true' : 'false';
}

function formatOptions(options: DsDropdownMultiselectOption[]): string {
  const entries = options
    .map(
      (option) =>
        `  { label: '${option.label.replace(/'/g, "\\'")}', value: '${option.value.replace(/'/g, "\\'")}' }`,
    )
    .join(',\n');

  return `[\n${entries}\n]`;
}

function formatValues(values: string[]): string {
  return `[${values.map((value) => `'${value.replace(/'/g, "\\'")}'`).join(', ')}]`;
}

function buildSource(args: DsDropdownMultiselectComponent): string {
  const lines = [
    `<ds-dropdown-multiselect`,
    `  id=${formatString(args.id)}`,
    `  label=${formatString(args.label)}`,
    `  placeholder=${formatString(args.placeholder)}`,
    `  size=${formatString(args.size)}`,
    `  [disabled]=${formatBoolean(args.disabled)}`,
    `  [readonly]=${formatBoolean(args.readonly)}`,
    `  [showSelectAll]=${formatBoolean(args.showSelectAll)}`,
    `  [options]=${formatOptions(args.options ?? [])}`,
    `  [values]=${formatValues(args.values ?? [])}`,
  ];

  if (args.assistiveText) {
    lines.push(`  assistiveText=${formatString(args.assistiveText)}`);
  }

  if (args.helperText) {
    lines.push(`  helperText=${formatString(args.helperText)}`);
  }

  if (typeof args.collapseThreshold === 'number') {
    lines.push(`  [collapseThreshold]=${args.collapseThreshold}`);
    lines.push(`  summaryLabel=${formatString(args.summaryLabel)}`);
  }

  lines.push(`></ds-dropdown-multiselect>`);

  return lines.join('\n');
}

const meta: Meta<DsDropdownMultiselectComponent> = {
  title: 'Buckholt/Dropdown Multiselect',
  component: DsDropdownMultiselectComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_source: string, context: { args: DsDropdownMultiselectComponent }) =>
          buildSource(context.args),
      },
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['md', 'sm'],
    },
    collapseThreshold: {
      control: { type: 'number', min: 0, step: 1 },
    },
  },
  args: {
    id: 'multiselect-example',
    label: 'Project permissions',
    assistiveText: undefined,
    helperText: 'Helper text',
    placeholder: 'Choose permissions',
    size: 'md',
    disabled: false,
    readonly: false,
    showSelectAll: true,
    collapseThreshold: undefined,
    summaryLabel: 'selected',
    values: [],
    options: [
      { label: 'View only', value: 'view-only' },
      { label: 'Comment', value: 'comment' },
      { label: 'Edit content', value: 'edit-content' },
      { label: 'Admin access', value: 'admin-access' },
    ],
  },
};

export default meta;

type Story = StoryObj<DsDropdownMultiselectComponent>;

export const Default: Story = {};

export const WithSelections: Story = {
  args: {
    values: ['comment', 'edit-content'],
  },
};

export const CollapsingTags: Story = {
  args: {
    collapseThreshold: 2,
    summaryLabel: 'selected',
    values: ['view-only', 'comment', 'edit-content', 'admin-access'],
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};