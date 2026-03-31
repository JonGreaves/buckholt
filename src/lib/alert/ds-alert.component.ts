import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgIf } from '@angular/common';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'ds-alert',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ds-alert.component.html',
  styleUrls: ['./ds-alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsAlertComponent {
  @Input() variant: AlertVariant = 'info';

  /** REQUIRED */
  @Input() message!: string;

  /** Optional */
  @Input() note?: string;
  @Input() noteSmall?: string;

  /** Controls */
  @Input() icon = false;
  @Input() dismissible = false;
  @Input() hasContext = false;

  @Output() dismiss = new EventEmitter<void>();

  get classes(): string {
    return ['alert', `alert-${this.variant}`].join(' ');
  }

  get hasNote(): boolean {
    return !!(this.note || this.noteSmall);
  }

  /**
   * Auto-map variant to correct Buckholt solid icon
   */
  get iconClass(): string {
    switch (this.variant) {
      case 'success':
        return 'fa-solid fa-circle-check';
      case 'warning':
        return 'fa-solid fa-triangle-exclamation';
      case 'error':
        return 'fa-solid fa-circle-xmark';
      default:
        return 'fa-solid fa-circle-info';
    }
  }

  onDismiss(): void {
    this.dismiss.emit();
  }
}
