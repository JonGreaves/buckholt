import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ds-button.component.html',
  styleUrls: ['./ds-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DsButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: ButtonType = 'button';
  @Input() label?: string;

  /** Required for icon-only buttons */
  @Input('aria-label') ariaLabel?: string;
  @Input() iconClass?: string;

  get classes(): string {
    const variantClass =
      this.variant === 'secondary'
        ? 'btn-secondary'
        : this.variant === 'ghost'
        ? 'btn-ghost'
        : 'btn-primary';

    const sizeClass =
      this.size === 'sm'
        ? 'btn-sm'
        : this.size === 'lg'
        ? 'btn-lg'
        : '';

    return ['btn', variantClass, sizeClass].filter(Boolean).join(' ');
  }
}
