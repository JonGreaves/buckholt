import type { Meta, StoryObj } from '@storybook/angular';

import {
  DsTextBlockComponent,
  type DsTextBlockHeadingLevel,
  type DsTextBlockHeadingStyle,
  type DsTextBlockIconBlockSize,
  type DsTextBlockIconMode,
} from './ds-text-block.component';

const headingLevels: DsTextBlockHeadingLevel[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const headingStyles: DsTextBlockHeadingStyle[] = [
  'display-03',
  'display-02',
  'display-01',
  'headline-03',
  'headline-02',
  'headline-01',
  'title-03',
  'title-02',
  'title-01',
];

const iconModes: DsTextBlockIconMode[] = ['none', 'inline', 'block'];
const iconBlockSizes: DsTextBlockIconBlockSize[] = ['medium', 'xl'];

const meta: Meta<DsTextBlockComponent> = {
  title: 'Buckholt/Text Block',
  component: DsTextBlockComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    eyebrow: {
      control: 'text',
    },
    heading: {
      control: 'text',
    },
    headingLevel: {
      control: 'select',
      options: headingLevels,
    },
    headingStyle: {
      control: 'select',
      options: headingStyles,
    },
    paragraphs: {
      control: 'object',
    },
    iconClass: {
      control: 'text',
    },
    iconMode: {
      control: 'select',
      options: iconModes,
    },
    iconBlockSize: {
      control: 'select',
      options: iconBlockSizes,
    },
  },
};

export default meta;

type Story = StoryObj<DsTextBlockComponent>;

export const Default: Story = {
  args: {
    heading: 'Headline text block',
    headingLevel: 'h2',
    headingStyle: 'headline-03',
    paragraphs: [
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      'Mauris ac sapien non felis scelerisque tincidunt.',
    ],
    eyebrow: '',
    iconMode: 'none',
    iconClass: 'fa-regular fa-ghost',
    iconBlockSize: 'medium',
  },
};

export const HeadingOnly: Story = {
  args: {
    heading: 'Display heading text',
    headingLevel: 'h1',
    headingStyle: 'display-03',
    paragraphs: [],
    eyebrow: '',
    iconMode: 'none',
    iconClass: 'fa-regular fa-ghost',
    iconBlockSize: 'medium',
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Eyebrow text',
    heading: 'Headline text block',
    headingLevel: 'h2',
    headingStyle: 'headline-03',
    paragraphs: ['Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'],
    iconMode: 'none',
    iconClass: 'fa-regular fa-ghost',
    iconBlockSize: 'medium',
  },
};

export const WithInlineIcon: Story = {
  args: {
    heading: 'Headline with inline icon',
    headingLevel: 'h2',
    headingStyle: 'headline-03',
    paragraphs: ['Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'],
    eyebrow: '',
    iconMode: 'inline',
    iconClass: 'fa-regular fa-ghost',
    iconBlockSize: 'medium',
  },
};

export const WithIconBlock: Story = {
  args: {
    heading: 'Title with icon block',
    headingLevel: 'h3',
    headingStyle: 'title-03',
    paragraphs: ['Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'],
    eyebrow: '',
    iconMode: 'block',
    iconClass: 'fa-regular fa-ghost',
    iconBlockSize: 'medium',
  },
};

export const WithXLIconBlock: Story = {
  args: {
    heading: 'Headline with XL icon block',
    headingLevel: 'h2',
    headingStyle: 'headline-03',
    paragraphs: ['Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'],
    eyebrow: '',
    iconMode: 'block',
    iconClass: 'fa-regular fa-ghost',
    iconBlockSize: 'xl',
  },
};