import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsIconBlockSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type DsIconBlockTone = 'default' | 'light' | 'dark';
export type DsIconBlockPalette = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

@Component({
  selector: 'ds-icon-block',
  standalone: true,
  templateUrl: './ds-icon-block.component.html',
  styleUrl: './ds-icon-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsIconBlockComponent {
  /**
   * Raw icon classes applied directly to the inner <i> element.
   * Keep this honest to the Buckholt markup rather than inventing an icon abstraction.
   */
  @Input() iconClass = 'fa-regular fa-ghost';

  /**
   * Buckholt documents medium as the base size with no extra modifier class.
   */
  @Input() size: DsIconBlockSize = 'md';

  /**
   * Default uses the neutral styling.
   * Light and dark enable the expressive theme classes.
   */
  @Input() expressiveTone: DsIconBlockTone = 'default';

  /**
   * Primary is the default expressive palette and adds no extra palette class.
   * Palette modifiers only apply when an expressive tone is active.
   */
  @Input() expressivePalette: DsIconBlockPalette = 'primary';

  get containerClassNames(): string {
    const classes = ['icon-block'];

    const sizeClassMap: Record<Exclude<DsIconBlockSize, 'md'>, string> = {
      xs: 'icon-block-xs',
      sm: 'icon-block-sm',
      lg: 'icon-block-lg',
      xl: 'icon-block-xl',
      xxl: 'icon-block-xxl',
    };

    if (this.size !== 'md') {
      classes.push(sizeClassMap[this.size]);
    }

    if (this.expressiveTone === 'light' || this.expressiveTone === 'dark') {
      classes.push(`expressive-${this.expressiveTone}`);

      if (this.expressivePalette !== 'primary') {
        classes.push(`expressive-${this.expressivePalette}`);
      }
    }

    return classes.join(' ');
  }
}