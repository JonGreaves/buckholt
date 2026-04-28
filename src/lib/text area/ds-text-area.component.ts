import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-text-area',
  standalone: true,
  templateUrl: './ds-text-area.component.html',
  styleUrl: './ds-text-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsTextAreaComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;

  @Input() name?: string;
  @Input() value = '';
  @Input() placeholder?: string;
  @Input() rows = 3;
  @Input() maxlength?: number;

  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() validationMessage?: string;

  @Input() showCounter = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() invalid = false;

  get isInvalid(): boolean {
    return this.invalid || !!this.validationMessage;
  }

  get currentCount(): number {
    return this.value.length;
  }
}