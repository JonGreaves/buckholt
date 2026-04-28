import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsSwitchSize = 'default' | 'small';

@Component({
  selector: 'ds-switch',
  standalone: true,
  templateUrl: './ds-switch.component.html',
  styleUrl: './ds-switch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsSwitchComponent {
  @Input({ required: true }) id!: string;
  @Input() label = 'Switch';
  @Input() helperText?: string;

  @Input() size: DsSwitchSize = 'default';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() showStatus = false;
  @Input() alwaysActive = false;

  get switchClasses(): string[] {
    return [
      'form-check',
      'form-switch',
      this.size === 'small' ? 'form-switch-sm' : '',
      this.size === 'small' && this.showStatus ? 'form-switch-status' : '',
      this.alwaysActive ? 'form-switch-active' : '',
    ].filter(Boolean);
  }

  get inputType(): 'checkbox' | 'radio' {
    return this.alwaysActive ? 'radio' : 'checkbox';
  }

  get isChecked(): boolean {
    return this.alwaysActive || this.checked;
  }
}