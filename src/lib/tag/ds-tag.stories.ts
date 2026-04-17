import type { Meta, StoryObj } from '@storybook/angular';
import { DsTagComponent, DsTagSelectType, DsTagSize, DsTagStatus, DsTagVariant } from './ds-tag.component';

type DsTagStoryArgs = {
  label: string;
  variant: DsTagVariant;
  size: DsTagSize;
  icon?: string;
  status: DsTagStatus;
  selectType: DsTagSelectType;
  inputId?: string;
  name?: string;
  checked: boolean;
  disabled: boolean;
  ariaSelected: boolean;
  closeAriaLabel: string;
};

function buildTemplate(args: DsTagStoryArgs): string {
  const attributes: string[] = [`label="${escapeAttribute(args.label)}"`];

  if (args.variant !== 'read-only') {
    attributes.push(`variant="${args.variant}"`);
  }

  if (args.size !== 'medium') {
    attributes.push(`size="${args.size}"`);
  }

  if (args.icon) {
    attributes.push(`icon="${escapeAttribute(args.icon)}"`);
  }

  if (args.variant === 'status') {
    attributes.push(`status="${args.status}"`);
  }

  if (args.variant === 'selectable') {
    attributes.push(`selectType="${args.selectType}"`);

    if (args.inputId) {
      attributes.push(`inputId="${escapeAttribute(args.inputId)}"`);
    }

    if (args.name) {
      attributes.push(`name="${escapeAttribute(args.name)}"`);
    }

    if (args.checked) {
      attributes.push('[checked]="true"');
    }

    if (args.disabled) {
      attributes.push('[disabled]="true"');
    }

    attributes.push(`[ariaSelected]="${args.ariaSelected ? 'true' : 'false'}"`);
  }

  if (args.variant === 'dismissible' && args.closeAriaLabel !== 'Close') {
    attributes.push(`closeAriaLabel="${escapeAttribute(args.closeAriaLabel)}"`);
  }

  return `<ds-tag ${attributes.join(' ')}></ds-tag>`;
}

function escapeAttribute(value: string): string {
  return value.replace(/"/g, '&quot;');
}

const meta: Meta<DsTagComponent> = {
  title: 'Buckholt/Tag',
  component: DsTagComponent,
  tags: ['autodocs'],
  args: {
    label: 'Read-only tag',
    variant: 'read-only',
    size: 'medium',
    icon: undefined,
    status: 'info',
    selectType: 'checkbox',
    inputId: undefined,
    name: undefined,
    checked: false,
    disabled: false,
    ariaSelected: false,
    closeAriaLabel: 'Close',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['read-only', 'dismissible', 'selectable', 'status'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: 'Small is documented only for read-only and status tags.',
    },
    icon: {
      control: 'text',
      description: 'Font Awesome class string, e.g. "fa-solid fa-sparkles". Not rendered for small tags.',
    },
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      if: { arg: 'variant', eq: 'status' },
    },
    selectType: {
      control: 'select',
      options: ['radio', 'checkbox'],
      if: { arg: 'variant', eq: 'selectable' },
    },
    inputId: {
      control: 'text',
      if: { arg: 'variant', eq: 'selectable' },
    },
    name: {
      control: 'text',
      if: { arg: 'variant', eq: 'selectable' },
    },
    checked: {
      control: 'boolean',
      if: { arg: 'variant', eq: 'selectable' },
    },
    disabled: {
      control: 'boolean',
      if: { arg: 'variant', eq: 'selectable' },
    },
    ariaSelected: {
      control: 'boolean',
      if: { arg: 'variant', eq: 'selectable' },
    },
    closeAriaLabel: {
      control: 'text',
      if: { arg: 'variant', eq: 'dismissible' },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  render: (args) => ({
    props: args,
    template: buildTemplate(args as DsTagStoryArgs),
  }),
};

export default meta;

type Story = StoryObj<DsTagComponent>;

export const ReadOnly: Story = {
  args: {
    label: 'Read-only tag',
    variant: 'read-only',
    size: 'medium',
  },
};

export const ReadOnlyWithIcon: Story = {
  args: {
    label: 'Tag with icon',
    variant: 'read-only',
    icon: 'fa-solid fa-sparkles',
  },
};

export const Dismissible: Story = {
  args: {
    label: 'Dismissible tag',
    variant: 'dismissible',
  },
};

export const DismissibleWithIcon: Story = {
  args: {
    label: 'Dismissible tag',
    variant: 'dismissible',
    icon: 'fa-solid fa-sparkles',
  },
};

export const SelectableSingle: Story = {
  args: {
    label: 'Single select',
    variant: 'selectable',
    selectType: 'radio',
    inputId: 'tag-single-select',
    name: 'singleselect',
    checked: true,
    ariaSelected: true,
  },
};

export const SelectableMulti: Story = {
  args: {
    label: 'Multi select',
    variant: 'selectable',
    selectType: 'checkbox',
    inputId: 'tag-multi-select',
    checked: false,
    ariaSelected: false,
  },
};

export const SelectableWithIcon: Story = {
  args: {
    label: 'Multi select',
    variant: 'selectable',
    selectType: 'checkbox',
    inputId: 'tag-multi-select-icon',
    icon: 'fa-solid fa-sparkles',
    checked: false,
    ariaSelected: false,
  },
};

export const StatusInfo: Story = {
  args: {
    label: 'Info',
    variant: 'status',
    status: 'info',
  },
};

export const StatusSuccess: Story = {
  args: {
    label: 'Success',
    variant: 'status',
    status: 'success',
  },
};

export const StatusWarning: Story = {
  args: {
    label: 'Warning',
    variant: 'status',
    status: 'warning',
  },
};

export const StatusError: Story = {
  args: {
    label: 'Error',
    variant: 'status',
    status: 'error',
  },
};

export const StatusInfoWithIcon: Story = {
  args: {
    label: 'Info',
    variant: 'status',
    status: 'info',
    icon: 'fa-solid fa-circle-info',
  },
};

export const SmallReadOnly: Story = {
  args: {
    label: 'Small tag',
    variant: 'read-only',
    size: 'small',
  },
};

export const SmallStatus: Story = {
  args: {
    label: 'Status',
    variant: 'status',
    size: 'small',
    status: 'info',
  },
};