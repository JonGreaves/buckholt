import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

export interface DsKeyValueGridItem {
  key: string;
  value: string;
}

@Component({
  selector: '[dsKeyValueGrid]',
  standalone: true,
  templateUrl: './ds-key-value-grid.component.html',
  styleUrls: ['./ds-key-value-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsKeyValueGridComponent {
  @Input() items: DsKeyValueGridItem[] = [];
  @Input() columns = 3;

  @HostBinding('class')
  readonly hostClasses = 'grid key-value-grid';

  @HostBinding('style.--columns')
  get hostColumns(): string {
    return String(this.columns);
  }
}