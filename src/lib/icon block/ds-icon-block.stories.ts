import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import {
  DsIconBlockComponent,
  DsIconBlockPalette,
  DsIconBlockSize,
  DsIconBlockTone,
} from './ds-icon-block.component';

type StoryArgs = {
  iconClass: string;
  size: DsIconBlockSize;
  expressiveTone: DsIconBlockTone;
  expressivePalette: DsIconBlockPalette;
};

const SIZE_OPTIONS: DsIconBlockSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const TONE_OPTIONS: DsIconBlockTone[] = ['default', 'light', 'dark'];
const PALETTE_OPTIONS: DsIconBlockPalette[] = ['primary', 'secondary', 'tertiary', 'quaternary'];

function escapeAttribute(value: string): string {
  return value.replace(/"/g, '&quot;');
}

function buildAngularSnippet(args: StoryArgs): string {
  const attributes: string[] = [];

  if (args.iconClass !== 'fa-regular fa-ghost') {
    attributes.push(`iconClass="${escapeAttribute(args.iconClass)}"`);
  }

  if (args.size !== 'md') {
    attributes.push(`size="${args.size}"`);
  }

  if (args.expressiveTone !== 'default') {
    attributes.push(`expressiveTone="${args.expressiveTone}"`);

    if (args.expressivePalette !== 'primary') {
      attributes.push(`expressivePalette="${args.expressivePalette}"`);
    }
  }

  return attributes.length
    ? `<ds-icon-block ${attributes.join(' ')}></ds-icon-block>`
    : `<ds-icon-block></ds-icon-block>`;
}

const meta: Meta<DsIconBlockComponent> = {
  title: 'Buckholt/Icon block',
  component: DsIconBlockComponent,
  tags: ['autodocs'],
  args: {
    iconClass: 'fa-regular fa-ghost',
    size: 'md',
    expressiveTone: 'default',
    expressivePalette: 'primary',
  },
  argTypes: {
    iconClass: {
      control: 'text',
      description: 'Raw classes applied directly to the inner <i> element.',
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: 'select' },
    },
    expressiveTone: {
      options: TONE_OPTIONS,
      control: { type: 'inline-radio' },
    },
    expressivePalette: {
      options: PALETTE_OPTIONS,
      control: { type: 'inline-radio' },
      if: { arg: 'expressiveTone', neq: 'default' },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_source: string, context: { args: StoryArgs }) => buildAngularSnippet(context.args),
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<ds-icon-block ${argsToTemplate(args)}></ds-icon-block>`,
  }),
};

export default meta;

type Story = StoryObj<DsIconBlockComponent>;

export const Default: Story = {};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    iconClass: 'fa-regular fa-sparkles',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    iconClass: 'fa-regular fa-car',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    iconClass: 'fa-regular fa-phone',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    iconClass: 'fa-regular fa-flag',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    size: 'xxl',
    iconClass: 'fa-regular fa-pizza-slice',
  },
};

export const ExpressiveLight: Story = {
  args: {
    expressiveTone: 'light',
    expressivePalette: 'primary',
    iconClass: 'fa-regular fa-rocket-launch',
  },
};

export const ExpressiveDark: Story = {
  args: {
    expressiveTone: 'dark',
    expressivePalette: 'primary',
    iconClass: 'fa-regular fa-ufo',
  },
};

export const ExpressiveSecondary: Story = {
  args: {
    expressiveTone: 'light',
    expressivePalette: 'secondary',
    iconClass: 'fa-regular fa-cloud',
  },
};

export const ExpressiveTertiary: Story = {
  args: {
    expressiveTone: 'dark',
    expressivePalette: 'tertiary',
    iconClass: 'fa-regular fa-pizza-slice',
  },
};

export const ExpressiveQuaternary: Story = {
  args: {
    expressiveTone: 'light',
    expressivePalette: 'quaternary',
    iconClass: 'fa-regular fa-file',
  },
};