import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsProgressBarVariant = 'determinate' | 'indeterminate';
export type DsProgressBarStatus = 'active' | 'success' | 'error' | 'inactive';
export type DsProgressBarSize = 'large' | 'small';
export type DsProgressBarExpressiveColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary';

@Component({
  selector: 'ds-progress-bar',
  standalone: true,
  templateUrl: './ds-progress-bar.component.html',
  styleUrl: './ds-progress-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsProgressBarComponent {
  private static nextUniqueId = 0;

  @Input({ required: true }) label = '';
  @Input() note?: string;
  @Input() helperText?: string;
  @Input() validationMessage?: string;

  @Input() variant: DsProgressBarVariant = 'determinate';
  @Input() status: DsProgressBarStatus = 'active';
  @Input() size: DsProgressBarSize = 'large';
  @Input() expressiveColor: DsProgressBarExpressiveColor = 'primary';

  /**
   * Used for determinate mode only.
   * Values are clamped between 0 and 100.
   */
  @Input() value = 0;

  /**
   * Allows consumers and Storybook to provide a stable id.
   * Falls back to an auto-generated id when omitted.
   */
  @Input() id = `ds-progress-bar-${DsProgressBarComponent.nextUniqueId++}`;

  get isIndeterminate(): boolean {
    return this.variant === 'indeterminate';
  }

  get isError(): boolean {
    return this.status === 'error';
  }

  get progressClasses(): string[] {
    const classes = ['progress'];

    if (this.size === 'small') {
      classes.push('progress-sm');
    }

    switch (this.status) {
      case 'success':
        classes.push('is-valid');
        break;
      case 'error':
        classes.push('is-invalid');
        break;
      case 'inactive':
        classes.push('progress-inactive');
        break;
      default:
        break;
    }

    switch (this.expressiveColor) {
      case 'secondary':
        classes.push('expressive-secondary');
        break;
      case 'tertiary':
        classes.push('expressive-tertiary');
        break;
      case 'quaternary':
        classes.push('expressive-quaternary');
        break;
      default:
        break;
    }

    return classes;
  }

  get progressBarClasses(): string[] {
    const classes = ['progress-bar'];

    if (this.isIndeterminate) {
      classes.push('progress-bar-indeterminate');
    }

    return classes;
  }

  get clampedValue(): number {
    if (Number.isNaN(this.value)) {
      return 0;
    }

    return Math.min(100, Math.max(0, this.value));
  }

  get effectiveValue(): number {
    if (this.isIndeterminate) {
      return 0;
    }

    if (
      this.status === 'success' ||
      this.status === 'error' ||
      this.status === 'inactive'
    ) {
      return 100;
    }

    return this.clampedValue;
  }

  get progressBarWidth(): string | null {
    if (this.isIndeterminate) {
      return null;
    }

    if (
      this.status === 'success' ||
      this.status === 'error' ||
      this.status === 'inactive'
    ) {
      return null;
    }

    return `${this.effectiveValue}%`;
  }

  get shouldRenderNote(): boolean {
    return !!this.note && this.status === 'active';
  }

  get shouldRenderHelperText(): boolean {
    return !!this.helperText && !this.isError;
  }

  get shouldRenderValidationMessage(): boolean {
    return this.isError && !!this.validationMessage;
  }
}