import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export interface DsKeyValueTableItem {
  key: string;
  value: string;
}

@Component({
  selector: '[dsKeyValueTable]',
  standalone: true,
  templateUrl: './ds-key-value-table.component.html',
  styleUrls: ['./ds-key-value-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsKeyValueTableComponent {
  @Input() items: DsKeyValueTableItem[] = [];
  @Input() dividers = false;

  @HostBinding('class')
  readonly hostClasses = 'key-value-table';
}