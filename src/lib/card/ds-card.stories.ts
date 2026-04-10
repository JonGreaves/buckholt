import type { Meta, StoryObj } from '@storybook/angular';
import { DsCardComponent } from './ds-card.component';

const meta: Meta<DsCardComponent> = {
  title: 'Buckholt/Card - Basic',
  component: DsCardComponent,
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
      control: 'select',
      options: ['core', 'clickable'],
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
    style: {
      control: 'select',
      options: ['default', 'secondary'],
    },
    imageAlignment: {
      control: 'select',
      options: ['top', 'left', 'right'],
    },
    linkTarget: {
      control: 'select',
      options: ['_self', '_blank'],
    },
    emphasisInline: {
      control: 'boolean',
    },
    emphasisCentered: {
      control: 'boolean',
    },
    emphasisSecondary: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'core',
    size: 'md',
    style: 'default',
    title: 'Card title text',
    body: 'Duis non quam et nisi tincidunt fermentum. Pellentesque habitant morbi tristique senectus.',
    href: '#',
    imageSrc: '',
    imageAlt: '',
    imageAlignment: 'top',
    linkText: '',
    linkHref: '#',
    linkTarget: '_self',
    emphasisTitle: '',
    emphasisBody: '',
    emphasisInline: false,
    emphasisCentered: false,
    emphasisSecondary: false,
  },
};

export default meta;
type Story = StoryObj<DsCardComponent>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
  },
};

export const WithTopImage: Story = {
  args: {
    imageSrc: 'buckholt/pexels-therato-18903363-scaled.jpg',
    imageAlt: 'Placeholder image',
    linkText: 'Link text',
  },
};

export const WithHorizontalImageLeft: Story = {
  args: {
    imageSrc: 'buckholt/pexels-pixabay-268533.jpg',
    imageAlt: 'Placeholder image',
    imageAlignment: 'left',
    linkText: 'Link text',
  },
};

export const WithHorizontalImageRight: Story = {
  args: {
    imageSrc: 'buckholt/pexels-maxandrey-1366630-scaled.jpg',
    imageAlt: 'Placeholder image',
    imageAlignment: 'right',
    linkText: 'Link text',
  },
};

export const WithStandaloneLink: Story = {
  args: {
    linkText: 'Link text',
  },
};

export const Clickable: Story = {
  args: {
    variant: 'clickable',
    href: '#',
  },
};

export const ClickableWithImage: Story = {
  args: {
    variant: 'clickable',
    href: '#',
    imageSrc: 'buckholt/pexels-magalie-parise-2147945619-32285955-scaled-e1749471330673.jpg',
    imageAlt: 'Placeholder image',
  },
};

export const WithEmphasisTile: Story = {
  args: {
    emphasisTitle: 'Emphasis tile',
    emphasisBody: 'Duis non quam et nisi tincidunt fermentum.',
  },
};

export const WithInlineEmphasisTile: Story = {
  args: {
    emphasisTitle: 'Emphasis tile',
    emphasisBody: 'Duis non quam et nisi tincidunt fermentum.',
    emphasisInline: true,
  },
};

export const SecondaryCardWithSecondaryEmphasisTile: Story = {
  args: {
    style: 'secondary',
    emphasisTitle: 'Emphasis tile secondary',
    emphasisBody: 'Duis non quam et nisi tincidunt fermentum.',
    emphasisSecondary: true,
  },
};