import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DsListVariant = 'unordered' | 'ordered';

export interface DsListItem {
  text: string;
  isHeading?: boolean;
  icon?: string;
  iconClass?: string;
  children?: DsListItem[];
}

@Component({
  selector: 'ds-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-list.component.html',
  styleUrl: './ds-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsListComponent {
  @Input() variant: DsListVariant = 'unordered';
  @Input() unstyled = false;
  @Input() items: DsListItem[] = [];

  protected isOrdered(): boolean {
    return this.variant === 'ordered';
  }

  protected trackByIndex(index: number): number {
    return index;
  }
}