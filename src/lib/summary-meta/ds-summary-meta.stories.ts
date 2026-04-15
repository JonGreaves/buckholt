import type { Meta, StoryObj } from '@storybook/angular';

import { DsSummaryMetaComponent } from './ds-summary-meta.component';

type SummaryMetaStoryArgs = {
  stacked: boolean;
  headline: string;
  label: string;
  text: string;
  iconBlockClasses: string;
  iconClasses: string;
};

const meta: Meta<DsSummaryMetaComponent & SummaryMetaStoryArgs> = {
  title: 'Buckholt/Summary-meta',
  component: DsSummaryMetaComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  args: {
    stacked: false,
    headline: 'Headline',
    label: 'Label',
    text: 'Body text content',
    iconBlockClasses: 'icon-block icon-block-xxl expressive-dark expressive-primary',
    iconClasses: 'fa-regular fa-ghost',
  },
  argTypes: {
    stacked: {
      control: 'boolean',
    },
    headline: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    iconBlockClasses: {
      control: 'text',
      name: 'icon block classes',
    },
    iconClasses: {
      control: 'text',
      name: 'icon classes',
    },
  },
};

export default meta;

type Story = StoryObj<DsSummaryMetaComponent & SummaryMetaStoryArgs>;

export const Default: Story = {};

export const Stacked: Story = {
  args: {
    stacked: true,
  },
};