import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { DsCollapseComponent } from './ds-collapse.component';

const meta: Meta<DsCollapseComponent> = {
  title: 'Buckholt/Collapse',
  component: DsCollapseComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsCollapseComponent],
    }),
  ],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID applied to the collapse card and referenced by the trigger/link target.',
    },
    trigger: {
      control: 'text',
      description: 'Visible trigger label.',
    },
    expanded: {
      control: 'boolean',
      description: 'Applies the documented open state by adding the `show` class and `aria-expanded="true"`.',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Renders the optional documented close button directly under `.collapse-content`.',
    },
    closeAriaLabel: {
      control: 'text',
      description: 'Accessible label for the optional close button.',
    },
  },
  args: {
    id: 'collapseexample',
    trigger: 'Collapse trigger',
    expanded: false,
    showCloseButton: false,
    closeAriaLabel: 'Close',
  },
};

export default meta;

type Story = StoryObj<DsCollapseComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ds-collapse
        [id]="id"
        [trigger]="trigger"
        [expanded]="expanded"
        [showCloseButton]="showCloseButton"
        [closeAriaLabel]="closeAriaLabel"
      >
        <div class="text-block">
          <h6 class="collapse-title">Collapse title</h6>
          <p>
            Collapse content. Etiam id velit feugiat, scelerisque velit a, scelerisque nunc.
            Vestibulum ante ipsum primis in faucibus orci luctus.
          </p>
        </div>
      </ds-collapse>
    `,
  }),
};

export const WithCloseButton: Story = {
  args: {
    id: 'collapseexampleclose',
    trigger: 'Collapse trigger',
    showCloseButton: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-collapse
        [id]="id"
        [trigger]="trigger"
        [expanded]="expanded"
        [showCloseButton]="showCloseButton"
        [closeAriaLabel]="closeAriaLabel"
      >
        <div class="text-block">
          <h6 class="collapse-title">Collapse title</h6>
          <p>
            Collapse content. Etiam id velit feugiat, scelerisque velit a, scelerisque nunc.
            Vestibulum ante ipsum primis in faucibus orci luctus.
          </p>
        </div>
      </ds-collapse>
    `,
  }),
};

export const ContextBar: Story = {
  args: {
    id: 'collapse-contextbar',
    trigger: 'Context bar example',
    expanded: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-collapse
        [id]="id"
        [trigger]="trigger"
        [expanded]="expanded"
        [showCloseButton]="showCloseButton"
        [closeAriaLabel]="closeAriaLabel"
      >
        <div class="collapse-contextbar">
          <ul class="list">
            <li class="list-heading">List heading</li>
            <li class="list-item">
              <span class="list-icon text-success">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              </span>
              List item 1
            </li>
            <li class="list-item">
              <span class="list-icon text-success">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              </span>
              List item 2
            </li>
            <li class="list-item">
              <span class="list-icon text-success">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              </span>
              List item 3
            </li>
          </ul>

          <a class="link-standalone" href="#" target="_self">
            <span class="icon">
              <i class="fa-regular fa-arrow-down-to-bracket" aria-hidden="true"></i>
            </span>
            Standalone link
          </a>
        </div>
      </ds-collapse>
    `,
  }),
};