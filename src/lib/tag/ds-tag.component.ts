import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsTagVariant = 'read-only' | 'dismissible' | 'selectable' | 'status';
export type DsTagSize = 'medium' | 'small';
export type DsTagSelectType = 'radio' | 'checkbox';
export type DsTagStatus = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'ds-tag',
  standalone: true,
  templateUrl: './ds-tag.component.html',
  styleUrl: './ds-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsTagComponent {
  @Input({ required: true }) label = '';

  @Input() variant: DsTagVariant = 'read-only';
  @Input() size: DsTagSize = 'medium';

  /**
   * Font Awesome icon class string, e.g. "fa-solid fa-sparkles".
   * Only renders where the documented Buckholt patterns support icons.
   */
  @Input() icon?: string;

  /**
   * Status modifier for status tags only.
   */
  @Input() status: DsTagStatus = 'info';

  /**
   * Selectable tag input type.
   */
  @Input() selectType: DsTagSelectType = 'checkbox';

  /**
   * Native input attributes for selectable tags.
   */
  @Input() inputId?: string;
  @Input() name?: string;
  @Input() checked = false;
  @Input() disabled = false;

  /**
   * Buckholt examples show aria-selected on the wrapper.
   */
  @Input() ariaSelected = false;

  /**
   * Close button aria-label for dismissible tags.
   */
  @Input() closeAriaLabel = 'Close';

  get classes(): string[] {
    const classes = ['tag'];

    if (this.variant === 'dismissible') {
      classes.push('tag-dismissible');
    }

    if (this.variant === 'selectable') {
      classes.push('tag-selectable');
    }

    if (this.variant === 'status') {
      classes.push('tag-status', `tag-status-${this.status}`);
    }

    if (this.isSmall) {
      classes.push('tag-sm');
    }

    return classes;
  }

  get isSmall(): boolean {
    return this.size === 'small' && this.supportsSmallSize;
  }

  get supportsSmallSize(): boolean {
    return this.variant === 'read-only' || this.variant === 'status';
  }

  get shouldRenderIcon(): boolean {
    if (!this.icon) {
      return false;
    }

    if (this.isSmall) {
      return false;
    }

    return true;
  }

  get isSelectable(): boolean {
    return this.variant === 'selectable';
  }

  get isDismissible(): boolean {
    return this.variant === 'dismissible';
  }

  get isStatus(): boolean {
    return this.variant === 'status';
  }

  get resolvedInputId(): string | null {
    if (!this.isSelectable) {
      return null;
    }

    return this.inputId?.trim() || null;
  }

  get wrapperAriaSelected(): 'true' | 'false' | null {
    if (!this.isSelectable) {
      return null;
    }

    return this.ariaSelected ? 'true' : 'false';
  }

  get inputClass(): string | null {
    return this.checked ? 'active' : null;
  }
}