import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type DsSelectableCardSelectionType = 'radio' | 'checkbox';

@Component({
  selector: 'ds-selectable-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-selectable-card.component.html',
  styleUrl: './ds-selectable-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsSelectableCardComponent {
  @Input() selectionType: DsSelectableCardSelectionType = 'radio';
  @Input() inputId = 'selectable-card';
  @Input() name = 'selectable';
  @Input() value = '';
  @Input() checked = false;

  @Input() title = 'Selectable card title';
  @Input() body =
    'Duis non quam et nisi tincidunt fermentum. Pellentesque habitant morbi tristique senectus.';

  @Output() checkedChange = new EventEmitter<boolean>();

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
  }

  onCardClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (target?.closest('input, a, button, select, textarea, label')) {
      return;
    }

    if (this.selectionType === 'radio') {
      if (!this.checked) {
        this.checked = true;
        this.checkedChange.emit(true);
      }
      return;
    }

    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}