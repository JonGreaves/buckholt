import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  templateUrl: './ds-checkbox.component.html',
  styleUrl: './ds-checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCheckboxComponent {
  @Input() id = 'checkbox-checkboxlabel';
  @Input() label = 'Checkbox label';
  @Input() name?: string;
  @Input() value = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() indeterminate = false;
  @Input() required = false;
  @Input() invalid = false;

  protected onClick(event: MouseEvent): void {
    if (this.readonly) {
      event.preventDefault();
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.readonly && (event.key === ' ' || event.code === 'Space')) {
      event.preventDefault();
    }
  }
}