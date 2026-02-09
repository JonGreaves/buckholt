import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { DsButtonIconDirective } from './ds-button-icon.directive';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, DsButtonIconDirective],
  templateUrl: './ds-button.component.html',
  styleUrls: ['./ds-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DsButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: ButtonType = 'button';

  /** Required for icon-only buttons */
  @Input('aria-label') ariaLabel?: string;

  @ContentChild(DsButtonIconDirective) icon?: DsButtonIconDirective;

  get hasIcon(): boolean {
    return !!this.icon;
  }

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
