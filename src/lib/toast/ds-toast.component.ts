import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsToastStatus = 'info' | 'success' | 'warning' | 'error';
export type DsToastContextBarType = 'timestamp' | 'button' | 'link';

@Component({
  selector: 'ds-toast',
  standalone: true,
  templateUrl: './ds-toast.component.html',
  styleUrl: './ds-toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsToastComponent {
  @Input({ required: true }) message = '';

  @Input() status: DsToastStatus | null = null;
  @Input() note?: string;
  @Input() smallNote?: string;

  @Input() showIcon = false;
  @Input() showClose = false;

  @Input() fade = false;
  @Input() show = false;

  @Input() autoHide = false;

  @Input() ariaLive: 'assertive' | 'polite' | 'off' = 'assertive';
  @Input() ariaAtomic = true;

  @Input() contextBarType: DsToastContextBarType | null = null;
  @Input() contextBarText?: string;
  @Input() contextBarButtonLabel?: string;
  @Input() contextBarLinkLabel?: string;
  @Input() contextBarLinkHref?: string;

  get toastClasses(): string[] {
    const classes = ['toast'];

    if (this.status) {
      classes.push(`toast-${this.status}`);
    }

    if (this.fade) {
      classes.push('fade');
    }

    if (this.show) {
      classes.push('show');
    }

    return classes;
  }

  get iconClasses(): string[] {
    return ['fa-solid', this.statusIconClass];
  }

  get statusIconClass(): string {
    switch (this.status) {
      case 'warning':
        return 'fa-triangle-exclamation';
      case 'error':
        return 'fa-circle-exclamation';
      case 'info':
      case 'success':
      default:
        return 'fa-circle-info';
    }
  }

  get hasContextBar(): boolean {
    switch (this.contextBarType) {
      case 'timestamp':
        return !!this.contextBarText;
      case 'button':
        return !!this.contextBarButtonLabel;
      case 'link':
        return !!this.contextBarLinkLabel && !!this.contextBarLinkHref;
      default:
        return false;
    }
  }

  get dataBsAutohide(): 'true' | 'false' {
    return this.autoHide ? 'true' : 'false';
  }
}