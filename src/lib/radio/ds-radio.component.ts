import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-radio',
  standalone: true,
  templateUrl: './ds-radio.component.html',
  styleUrl: './ds-radio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsRadioComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;
  @Input() name = '';
  @Input() value = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() readonly = false;
}