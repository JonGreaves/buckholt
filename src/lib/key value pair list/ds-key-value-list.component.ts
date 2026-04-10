import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export interface DsKeyValueListItem {
  key: string;
  value: string;
}

export type DsKeyValueListDirection = 'column' | 'row';

@Component({
  selector: '[dsKeyValueList]',
  standalone: true,
  templateUrl: './ds-key-value-list.component.html',
  styleUrls: ['./ds-key-value-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsKeyValueListComponent {
  @Input() items: DsKeyValueListItem[] = [];
  @Input() direction: DsKeyValueListDirection = 'column';
  @Input() stacked = false;

  @HostBinding('class')
  get hostClasses(): string {
    const classes = ['key-value-list'];

    if (this.direction === 'row') {
      classes.push('key-value-list-row');
    }

    if (this.stacked) {
      classes.push('key-value-list-stacked');
    }

    return classes.join(' ');
  }
}