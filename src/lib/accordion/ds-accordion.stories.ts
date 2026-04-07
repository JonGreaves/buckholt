import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionItem, DsAccordionComponent } from './ds-accordion.component';

type AccordionStoryArgs = {
  accordionId: string;
  size: 'md' | 'lg';
  singleExpand: boolean;
  items: AccordionItem[];
};

const meta: Meta<AccordionStoryArgs> = {
  title: 'Buckholt/Accordion',
  component: DsAccordionComponent,
  tags: ['autodocs'],

  argTypes: {
    accordionId: { control: 'text' },
    size: {
      control: 'radio',
      options: ['md', 'lg'],
    },
    singleExpand: { control: 'boolean' },
    items: { control: 'object' },
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
type Story = StoryObj<AccordionStoryArgs>;

const DEFAULT_ITEMS: AccordionItem[] = [
  {
    heading: 'Accordion item #1',
    body: 'Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id orci a neque vehicula malesuada. Donec vehicula libero vel leo convallis, nec tincidunt felis tincidunt. Maecenas euismod tristique leo, vel malesuada ligula malesuada sed. Donec eget libero id leo congue venenatis.',
    expanded: false,
  },
  {
    heading: 'Accordion item #2',
    body: 'Donec et urna vel risus feugiat pharetra. Proin id lacus vitae velit accumsan venenatis. Aenean non mi vel nisi lacinia maximus. Duis efficitur, sapien quis bibendum auctor, lectus risus feugiat sapien, ac pulvinar orci est a arcu. Integer id augue vitae urna tristique tempus.',
    expanded: false,
  },
];

export const Medium: Story = {
  args: {
    accordionId: 'accordionExample',
    size: 'md',
    singleExpand: false,
    items: DEFAULT_ITEMS,
  },
};

export const Large: Story = {
  args: {
    accordionId: 'accordionLarge',
    size: 'lg',
    singleExpand: false,
    items: DEFAULT_ITEMS,
  },
};

export const SingleExpandedItem: Story = {
  args: {
    accordionId: 'accordionSingleExpand',
    size: 'md',
    singleExpand: true,
    items: DEFAULT_ITEMS,
  },
};

export const FirstItemExpanded: Story = {
  args: {
    accordionId: 'accordionFirstExpanded',
    size: 'md',
    singleExpand: false,
    items: [
      {
        ...DEFAULT_ITEMS[0],
        expanded: true,
      },
      DEFAULT_ITEMS[1],
    ],
  },
};

export const WithSubheading: Story = {
  args: {
    accordionId: 'accordionWithSubheading',
    size: 'md',
    singleExpand: false,
    items: [
      {
        heading: 'Your responsibilities',
        subheading: 'Answering questions',
        body: 'Sed ex nibh, aliquam vel orci non, imperdiet tempor lectus. In vel nisl ut mauris pharetra mollis ut ac libero. Morbi pretium nisi in dui laoreet, sit amet consequat ipsum rhoncus.',
        expanded: true,
      },
    ],
  },
};