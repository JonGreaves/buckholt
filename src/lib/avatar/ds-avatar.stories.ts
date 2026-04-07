import type { Meta, StoryObj } from '@storybook/angular';
import { DsAvatarComponent } from './ds-avatar.component';
import type {
  DsAvatarExpressivePalette,
  DsAvatarSize,
  DsAvatarVariant,
} from './ds-avatar.component';

type AvatarArgs = {
  variant: DsAvatarVariant;
  size: DsAvatarSize;
  iconClass: string;
  initials: string;
  src: string;
  alt: string;
  expressivePalette: DsAvatarExpressivePalette;
  expressiveDark: boolean;
};

function buildTemplate(args: AvatarArgs): string {
  const attributes: string[] = [];

  attributes.push(`variant="${args.variant}"`);

  if (args.size !== 'md') {
    attributes.push(`size="${args.size}"`);
  }

  if (args.variant === 'icon' && args.iconClass) {
    attributes.push(`iconClass="${args.iconClass}"`);
  }

  if (args.variant === 'initials' && args.initials) {
    attributes.push(`initials="${args.initials}"`);
  }

  if (args.variant === 'image' && args.src) {
    attributes.push(`src="${args.src}"`);
  }

  if (args.variant === 'image') {
    attributes.push(`alt="${args.alt ?? ''}"`);
  }

  if (args.expressivePalette !== 'default') {
    attributes.push(`expressivePalette="${args.expressivePalette}"`);
  }

  if (args.expressiveDark) {
    attributes.push(`[expressiveDark]="true"`);
  }

  return `<ds-avatar ${attributes.join(' ')}></ds-avatar>`;
}

const meta: Meta<DsAvatarComponent> = {
  title: 'Buckholt/Avatar',
  component: DsAvatarComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['icon', 'initials', 'image'],
    },
    size: {
      control: 'inline-radio',
      options: ['md', 'sm', 'xs'],
    },
    expressivePalette: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary', 'quaternary'],
    },
    expressiveDark: {
      control: 'boolean',
    },
    iconClass: {
      control: 'text',
      if: { arg: 'variant', eq: 'icon' },
    },
    initials: {
      control: 'text',
      if: { arg: 'variant', eq: 'initials' },
    },
    src: {
      control: 'text',
      if: { arg: 'variant', eq: 'image' },
    },
    alt: {
      control: 'text',
      if: { arg: 'variant', eq: 'image' },
    },
  },
  args: {
    variant: 'icon',
    size: 'md',
    iconClass: 'fa-regular fa-user',
    initials: 'MF',
    src: 'https://i.pravatar.cc/96?img=12',
    alt: 'Maria Foster',
    expressivePalette: 'default',
    expressiveDark: false,
  },
  render: (args) => ({
    props: args,
    template: buildTemplate(args as AvatarArgs),
  }),
};

export default meta;

type Story = StoryObj<DsAvatarComponent>;

export const Icon: Story = {
  args: {
    variant: 'icon',
    iconClass: 'fa-regular fa-user',
  },
};

export const Initials: Story = {
  args: {
    variant: 'initials',
    initials: 'MF',
  },
};

export const Image: Story = {
  args: {
    variant: 'image',
    src: 'https://i.pravatar.cc/96?img=12',
    alt: 'Maria Foster',
  },
};

export const Small: Story = {
  args: {
    variant: 'icon',
    size: 'sm',
    iconClass: 'fa-regular fa-user-secret',
  },
};

export const ExtraSmall: Story = {
  args: {
    variant: 'icon',
    size: 'xs',
    iconClass: 'fa-regular fa-user-robot',
  },
};

export const ExpressiveSecondaryDark: Story = {
  args: {
    variant: 'initials',
    initials: 'RD',
    expressivePalette: 'secondary',
    expressiveDark: true,
  },
};