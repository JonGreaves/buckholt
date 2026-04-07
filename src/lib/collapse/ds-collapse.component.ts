import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-collapse',
  standalone: true,
  templateUrl: './ds-collapse.component.html',
  styleUrl: './ds-collapse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCollapseComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) trigger!: string;
  @Input() expanded = false;
  @Input() showCloseButton = false;
  @Input() closeAriaLabel = 'Close';

  get targetSelector(): string {
    return `#${this.id}`;
  }

  get ariaExpanded(): 'true' | 'false' {
    return this.expanded ? 'true' : 'false';
  }
}