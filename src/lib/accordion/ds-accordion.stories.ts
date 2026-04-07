import type { Meta, StoryObj } from '@storybook/angular';
import { DsAccordionComponent, DsAccordionItem } from './ds-accordion.component';

const demoItems: DsAccordionItem[] = [
  {
    heading: 'Accordion item #1',
    bodyHtml:
      '<p>Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id orci a neque vehicula malesuada. Donec vehicula libero vel leo convallis, nec tincidunt felis tincidunt. Maecenas euismod tristique leo, vel malesuada ligula malesuada sed. Donec eget libero id leo congue venenatis.</p>',
    expanded: false,
  },
  {
    heading: 'Accordion item #2',
    bodyHtml:
      '<p>Donec et urna vel risus feugiat pharetra. Proin id lacus vitae velit accumsan venenatis. Aenean non mi vel nisi lacinia maximus. Duis efficitur, sapien quis bibendum auctor, lectus risus feugiat sapien, ac pulvinar orci est a arcu. Integer id augue vitae urna tristique tempus.</p>',
    expanded: false,
  },
];

const meta: Meta<DsAccordionComponent> = {
  title: 'Buckholt/Accordion',
  component: DsAccordionComponent,
  tags: ['autodocs'],
  args: {
    accordionId: 'accordionExample',
    size: 'medium',
    singleExpand: false,
    items: demoItems,
  },
  argTypes: {
    accordionId: {
      control: 'text',
      description: 'ID applied to the root .accordion element.',
    },
    size: {
      control: 'radio',
      options: ['medium', 'large'],
      description: 'Buckholt accordion size variant.',
    },
    singleExpand: {
      control: 'boolean',
      description: 'When true, only one item can be expanded at a time.',
    },
    items: {
      control: 'object',
      description: 'Accordion items with heading, bodyHtml, and optional expanded state.',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

export default meta;

type Story = StoryObj<DsAccordionComponent>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
    accordionId: 'accordionLarge',
  },
};

export const SingleExpand: Story = {
  args: {
    singleExpand: true,
    accordionId: 'accordionSingleExpand',
  },
};

export const FirstItemExpanded: Story = {
  args: {
    accordionId: 'accordionExpanded',
    items: [
      {
        heading: 'Accordion item #1',
        bodyHtml:
          '<p>Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id orci a neque vehicula malesuada. Donec vehicula libero vel leo convallis, nec tincidunt felis tincidunt. Maecenas euismod tristique leo, vel malesuada ligula malesuada sed. Donec eget libero id leo congue venenatis.</p>',
        expanded: true,
      },
      {
        heading: 'Accordion item #2',
        bodyHtml:
          '<p>Donec et urna vel risus feugiat pharetra. Proin id lacus vitae velit accumsan venenatis. Aenean non mi vel nisi lacinia maximus. Duis efficitur, sapien quis bibendum auctor, lectus risus feugiat sapien, ac pulvinar orci est a arcu. Integer id augue vitae urna tristique tempus.</p>',
        expanded: false,
      },
    ],
  },
};