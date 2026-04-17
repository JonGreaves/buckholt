import type { Meta, StoryObj } from '@storybook/angular';
import { DsToastComponent, DsToastContextBarType, DsToastStatus } from './ds-toast.component';
import { DsToastContainerComponent } from './ds-toast-container.component';

type ToastStoryArgs = {
  message: string;
  status: DsToastStatus | null;
  note?: string;
  smallNote?: string;
  showIcon: boolean;
  showClose: boolean;
  fade: boolean;
  show: boolean;
  autoHide: boolean;
  ariaLive: 'assertive' | 'polite' | 'off';
  ariaAtomic: boolean;
  contextBarType: DsToastContextBarType | null;
  contextBarText?: string;
  contextBarButtonLabel?: string;
  contextBarLinkLabel?: string;
  contextBarLinkHref?: string;
};

const meta: Meta<ToastStoryArgs> = {
  title: 'Buckholt/Toast',
  component: DsToastComponent,
  tags: ['autodocs'],
  args: {
    message: 'Toast message',
    status: 'info',
    note: 'Nam tempor finibus lorem, nec varius arcu convallis vehicula malesuada.',
    smallNote: '',
    showIcon: true,
    showClose: false,
    fade: false,
    show: true,
    autoHide: false,
    ariaLive: 'assertive',
    ariaAtomic: true,
    contextBarType: null,
    contextBarText: '1 min ago',
    contextBarButtonLabel: 'Button',
    contextBarLinkLabel: 'Link',
    contextBarLinkHref: '#',
  },
  argTypes: {
    status: {
      control: 'select',
      options: [null, 'info', 'success', 'warning', 'error'],
    },
    ariaLive: {
      control: 'select',
      options: ['assertive', 'polite', 'off'],
    },
    contextBarType: {
      control: 'select',
      options: [null, 'timestamp', 'button', 'link'],
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

type Story = StoryObj<ToastStoryArgs>;

export const Default: Story = {};

export const MessageOnly: Story = {
  args: {
    status: null,
    note: '',
    smallNote: '',
    showIcon: false,
  },
};

export const WithSmallNote: Story = {
  args: {
    status: null,
    showIcon: false,
    smallNote: 'Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis.',
  },
};

export const WithTimestampContextBar: Story = {
  args: {
    contextBarType: 'timestamp',
    contextBarText: '1 min ago',
  },
};

export const WithButtonContextBar: Story = {
  args: {
    contextBarType: 'button',
    contextBarButtonLabel: 'Button',
  },
};

export const WithLinkContextBar: Story = {
  args: {
    contextBarType: 'link',
    contextBarLinkLabel: 'Link',
    contextBarLinkHref: '#',
  },
};

export const Dismissible: Story = {
  args: {
    showClose: true,
  },
};

export const Animated: Story = {
  args: {
    showClose: true,
    fade: true,
    show: true,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    message: 'Toast successfully launched',
    note: 'Sed vehicula magna at lacus, quis laoreet nulla condimentum.',
    showIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    message: 'Warning toast message',
    note: '',
    showIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    message: 'Error message',
    note: '',
    showIcon: true,
  },
};

export const Stacked = {
  render: () => ({
    props: {},
    moduleMetadata: {
      imports: [DsToastContainerComponent, DsToastComponent],
    },
    template: `
      <ds-toast-container>
        <ds-toast
          message="Toast message"
          status="info"
          [showIcon]="true"
          [fade]="true"
          [show]="true"
        />
        <ds-toast
          message="Error message"
          status="error"
          [showIcon]="true"
          [fade]="true"
          [show]="true"
        />
      </ds-toast-container>
    `,
  }),
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};