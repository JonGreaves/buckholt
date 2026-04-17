import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsVersaTileActionsDirective,
  DsVersaTileComponent,
} from './ds-versa-tile.component';

type VersaTileStoryArgs = {
  label: string;
  text: string;
  iconClass: string | null;
  progressValue: number | null;
};

const meta: Meta<VersaTileStoryArgs> = {
  title: 'Buckholt/Versa-tile',
  component: DsVersaTileComponent,
  tags: ['autodocs'],
  args: {
    label: 'Rick Deckard',
    text: 'Additional driver',
    iconClass: null,
    progressValue: null,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Versa-tile label text.',
    },
    text: {
      control: 'text',
      description: 'Versa-tile body text.',
    },
    iconClass: {
      control: 'text',
      description: 'Optional icon class string for the icon inside .icon-block.',
    },
    progressValue: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Optional progress percentage from 0 to 100.',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
      description: {
        component:
          'Buckholt Versa-tile. The component owns the documented outer structure. Optional actions are supplied through an ng-template using the dsVersaTileActions directive so .versatile-actions only renders when content exists.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<VersaTileStoryArgs>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    iconClass: 'fa-regular fa-ghost',
  },
};

export const WithProgress: Story = {
  args: {
    progressValue: 62,
  },
};

export const WithIconAndProgress: Story = {
  args: {
    iconClass: 'fa-regular fa-ghost',
    progressValue: 62,
  },
};

export const WithActions: Story = {
  render: (args) => ({
    props: args,
    imports: [DsVersaTileComponent, DsVersaTileActionsDirective],
    template: `
      <ds-versa-tile
        [label]="label"
        [text]="text"
        [iconClass]="iconClass"
        [progressValue]="progressValue"
      >
        <ng-template dsVersaTileActions>
          <div class="button-set">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </ng-template>
      </ds-versa-tile>
    `,
  }),
};

export const WithActionsAndProgress: Story = {
  args: {
    progressValue: 62,
  },
  render: (args) => ({
    props: args,
    imports: [DsVersaTileComponent, DsVersaTileActionsDirective],
    template: `
      <ds-versa-tile
        [label]="label"
        [text]="text"
        [iconClass]="iconClass"
        [progressValue]="progressValue"
      >
        <ng-template dsVersaTileActions>
          <div class="button-set">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </ng-template>
      </ds-versa-tile>
    `,
  }),
};