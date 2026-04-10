import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export type DsKeyValueSize = 'md' | 'xs' | 'sm' | 'lg' | 'xl' | 'display';
export type DsKeyValueExpressive = false | 'primary' | 'secondary' | 'tertiary' | 'quaternary';

@Component({
  selector: '[dsKeyValue]',
  standalone: true,
  templateUrl: './ds-key-value.component.html',
  styleUrls: ['./ds-key-value.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsKeyValueComponent {
  @Input() keyText = 'Key';
  @Input() valueText = 'Value';
  @Input() stacked = false;
  @Input() flipped = false;
  @Input() size: DsKeyValueSize = 'md';
  @Input() expressive: DsKeyValueExpressive = false;

  @HostBinding('class')
  get hostClasses(): string {
    const classes = ['key-value'];

    if (this.stacked) {
      classes.push('key-value-stacked');

      if (this.size !== 'md') {
        classes.push(`key-value-${this.size}`);
      }
    }

    if (this.flipped) {
      classes.push('key-value-flipped');
    }

    if (this.expressive) {
      classes.push('expressive');

      if (this.expressive !== 'primary') {
        classes.push(`expressive-${this.expressive}`);
      }
    }

    return classes.join(' ');
  }
}