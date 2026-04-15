import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface DsPageNavigationItem {
  label: string;
  href: string;
  active?: boolean;
  iconClass?: string;
}

@Component({
  selector: 'ul[ds-page-navigation]',
  standalone: true,
  templateUrl: './ds-page-navigation.component.html',
  styleUrl: './ds-page-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nav',
  },
})
export class DsPageNavigationComponent {
  /**
   * Buckholt page-navigation items.
   * The docs support a label, link target, optional active state,
   * and optional icon rendered directly inside the anchor.
   */
  @Input({ required: true }) items: DsPageNavigationItem[] = [];

  getLinkClasses(item: DsPageNavigationItem): string[] {
    return item.active ? ['nav-link', 'active'] : ['nav-link'];
  }

  trackByIndex(index: number): number {
    return index;
  }
}