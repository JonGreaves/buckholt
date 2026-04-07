import type { Meta, StoryObj } from '@storybook/angular';
import { DsBreadcrumbComponent } from './ds-breadcrumb.component';

const buildAngularSnippet = (args: DsBreadcrumbComponent): string => {
  const inputLines: string[] = [];

  if (args.items?.length) {
    inputLines.push(`[items]="${toTemplateExpression(args.items)}"`);
  }

  if (args.overflowItems?.length) {
    inputLines.push(`[overflowItems]="${toTemplateExpression(args.overflowItems)}"`);
  }

  if (args.includeCurrent) {
    inputLines.push(`[includeCurrent]="true"`);

    if (args.currentLabel) {
      inputLines.push(`currentLabel="${escapeAttribute(args.currentLabel)}"`);
    }
  }

  if (args.listTag && args.listTag !== 'ol') {
    inputLines.push(`listTag="${args.listTag}"`);
  }

  if (args.dividerIcon) {
    inputLines.push(`dividerIcon="${escapeAttribute(args.dividerIcon)}"`);
  }

  if (args.menuPanelId && args.menuPanelId !== 'menu-panel-breadcrumb') {
    inputLines.push(`menuPanelId="${escapeAttribute(args.menuPanelId)}"`);
  }

  if (
    args.overflowTooltipTitle &&
    args.overflowTooltipTitle !== 'Options' &&
    args.overflowItems?.length
  ) {
    inputLines.push(
      `overflowTooltipTitle="${escapeAttribute(args.overflowTooltipTitle)}"`
    );
  }

  const joinedInputs =
    inputLines.length > 0
      ? '\n  ' + inputLines.join('\n  ') + '\n'
      : '\n';

  return `<ds-breadcrumb${joinedInputs}></ds-breadcrumb>`;
};

function toTemplateExpression(value: unknown): string {
  return value
    ? JSON.stringify(value, null, 2)
        .replace(/\n/g, '\n  ')
        .replace(/"/g, "'")
    : "[]";
}

function escapeAttribute(value: string): string {
  return value.replace(/"/g, '&quot;');
}

const meta: Meta<DsBreadcrumbComponent> = {
  title: 'Buckholt/Breadcrumb',
  component: DsBreadcrumbComponent,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Navigation', href: '#' },
    ],
    overflowItems: [],
    includeCurrent: true,
    currentLabel: 'Breadcrumb',
    listTag: 'ol',
    dividerIcon: undefined,
    menuPanelId: 'menu-panel-breadcrumb-story',
    overflowTooltipTitle: 'Options',
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Visible linked breadcrumb items.',
    },
    overflowItems: {
      control: 'object',
      description: 'Optional overflow menu items rendered as menu buttons.',
    },
    includeCurrent: {
      control: 'boolean',
      description: 'Whether to render the final current-page item.',
    },
    currentLabel: {
      control: 'text',
      description: 'Non-interactive current-page text shown last.',
    },
    listTag: {
      control: 'inline-radio',
      options: ['ol', 'ul'],
      description: 'Underlying list element.',
    },
    dividerIcon: {
      control: 'text',
      description:
        'Optional divider override mapped to --breadcrumb-divider-icon.',
    },
    menuPanelId: {
      control: 'text',
      description: 'ID used by the overflow menu panel and aria-controls.',
    },
    overflowTooltipTitle: {
      control: 'text',
      description: 'Tooltip title used on the overflow trigger item.',
    },
    overflowItemSelected: {
      action: 'overflowItemSelected',
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, context: { args: DsBreadcrumbComponent }) =>
          buildAngularSnippet(context.args),
      },
    },
  },
};

export default meta;

type Story = StoryObj<DsBreadcrumbComponent>;

export const Default: Story = {};

export const WithoutCurrentPage: Story = {
  args: {
    includeCurrent: false,
    currentLabel: undefined,
  },
};

export const WithOverflow: Story = {
  args: {
    items: [
      { label: 'Breadcrumb 1', href: '#' },
      { label: 'Breadcrumb 4', href: '#' },
    ],
    overflowItems: [
      { label: 'Breadcrumb 2' },
      { label: 'Breadcrumb 3' },
    ],
    includeCurrent: true,
    currentLabel: 'Breadcrumb 5',
    menuPanelId: 'menu-panel-breadcrumb-overflow',
  },
};

export const CustomDivider: Story = {
  args: {
    items: [{ label: 'Insurance', href: '#' }],
    includeCurrent: true,
    currentLabel: 'Car',
    dividerIcon: '>',
  },
};

export const UnorderedList: Story = {
  args: {
    listTag: 'ul',
  },
};