import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ds-toast-container',
  standalone: true,
  templateUrl: './ds-toast-container.component.html',
  styleUrl: './ds-toast-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsToastContainerComponent {}