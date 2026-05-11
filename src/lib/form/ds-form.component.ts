import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-form',
  standalone: true,
  templateUrl: './ds-form.component.html',
  styleUrl: './ds-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsFormComponent {
  @Input() id?: string;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledby?: string;
}