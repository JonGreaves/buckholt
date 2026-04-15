import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsProgressBarComponent,
  DsProgressBarExpressiveColor,
  DsProgressBarSize,
  DsProgressBarStatus,
  DsProgressBarVariant,
} from './ds-progress-bar.component';

type DsProgressBarStoryArgs = {
  label: string;
  note?: string;
  helperText?: string;
  validationMessage?: string;
  variant: DsProgressBarVariant;
  status: DsProgressBarStatus;
  size: DsProgressBarSize;
  expressiveColor: DsProgressBarExpressiveColor;
  value: number;
  id: string;
};

function buildAngularSnippet(args: DsProgressBarStoryArgs): string {
  const attributes: string[] = [];

  attributes.push(`label="${escapeAttribute(args.label)}"`);

  if (args.note) {
    attributes.push(`note="${escapeAttribute(args.note)}"`);
  }

  if (args.helperText && args.status !== 'error') {
    attributes.push(`helperText="${escapeAttribute(args.helperText)}"`);
  }

  if (args.validationMessage && args.status === 'error') {
    attributes.push(
      `validationMessage="${escapeAttribute(args.validationMessage)}"`
    );
  }

  if (args.variant !== 'determinate') {
    attributes.push(`variant="${args.variant}"`);
  }

  if (args.status !== 'active') {
    attributes.push(`status="${args.status}"`);
  }

  if (args.size !== 'large') {
    attributes.push(`size="${args.size}"`);
  }

  if (args.expressiveColor !== 'primary') {
    attributes.push(`expressiveColor="${args.expressiveColor}"`);
  }

  if (args.variant === 'determinate') {
    attributes.push(`[value]="${args.value}"`);
  }

  if (args.id) {
    attributes.push(`id="${escapeAttribute(args.id)}"`);
  }

  return `<ds-progress-bar\n  ${attributes.join('\n  ')}\n></ds-progress-bar>`;
}

function escapeAttribute(value: string): string {
  return value.replace(/"/g, '&quot;');
}

const meta: Meta<DsProgressBarComponent> = {
  title: 'Buckholt/Progress bar',
  component: DsProgressBarComponent,
  tags: ['autodocs'],
  args: {
    label: 'Uploading file',
    note: '50%',
    helperText: 'This may take a few moments.',
    validationMessage: 'Upload failed. Please try again.',
    variant: 'determinate',
    status: 'active',
    size: 'large',
    expressiveColor: 'primary',
    value: 50,
    id: 'storybook-progress-bar',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Required progress label.',
    },
    note: {
      control: 'text',
      description:
        'Optional note shown in the header. Rendered only in the active state.',
    },
    helperText: {
      control: 'text',
      description:
        'Optional helper text shown below the progress bar when not in error state.',
    },
    validationMessage: {
      control: 'text',
      description:
        'Validation message shown as invalid feedback in the error state.',
    },
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
    },
    status: {
      control: 'select',
      options: ['active', 'success', 'error', 'inactive'],
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
    },
    expressiveColor: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      if: { arg: 'variant', eq: 'determinate' },
      description: 'Determinate progress value from 0 to 100.',
    },
    id: {
      control: 'text',
      description: 'Optional DOM id for label/progress association.',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: async (_code: string, context: { args: DsProgressBarStoryArgs }) =>
          buildAngularSnippet(context.args),
      },
    },
  },
};

export default meta;

type Story = StoryObj<DsProgressBarComponent>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    label: 'Uploading file',
    helperText: 'This may take a few moments.',
    note: '50%',
    value: 50,
  },
};

export const Small: Story = {
  args: {
    label: 'Uploading file',
    note: '50%',
    size: 'small',
    value: 50,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Uploading file',
    variant: 'indeterminate',
    note: undefined,
    helperText: undefined,
    value: 50,
  },
};

export const Success: Story = {
  args: {
    label: 'Upload complete',
    status: 'success',
    note: undefined,
    helperText: undefined,
    value: 100,
  },
};

export const Error: Story = {
  args: {
    label: 'Upload failed',
    status: 'error',
    note: undefined,
    helperText: 'This helper should not render in error state.',
    validationMessage: 'Upload failed. Please try again.',
    value: 100,
  },
};

export const Inactive: Story = {
  args: {
    label: 'Upload queued',
    status: 'inactive',
    note: undefined,
    helperText: undefined,
    value: 100,
  },
};

export const ExpressiveSecondary: Story = {
  args: {
    label: 'Uploading file',
    note: '50%',
    expressiveColor: 'secondary',
    value: 50,
  },
};

export const ExpressiveTertiary: Story = {
  args: {
    label: 'Uploading file',
    note: '50%',
    expressiveColor: 'tertiary',
    value: 50,
  },
};

export const ExpressiveQuaternary: Story = {
  args: {
    label: 'Uploading file',
    note: '50%',
    expressiveColor: 'quaternary',
    value: 50,
  },
};