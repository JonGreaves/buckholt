import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ds-input-row',
  standalone: true,
  templateUrl: './ds-input-row.component.html',
  styleUrl: './ds-input-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsInputRowComponent {}