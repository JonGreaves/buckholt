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
  @Input() iconClass?: string;
  @Input() note?: string;
  @Input() noteSmall?: string;
  @Input() dismissible = false;

  @Output() dismiss = new EventEmitter<void>();

  get classes(): string {
    return ['alert', `alert-${this.variant}`].join(' ');
  }

  get hasNote(): boolean {
    return !!(this.note || this.noteSmall);
  }

  get hasContextBar(): boolean {
    return false; // controlled via ng-content presence
  }

  onDismiss(): void {
    this.dismiss.emit();
  }
}
