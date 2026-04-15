import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-summary-meta',
  standalone: true,
  templateUrl: './ds-summary-meta.component.html',
  styleUrl: './ds-summary-meta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsSummaryMetaComponent {
  @Input() stacked = false;

  @Input() headline = '';
  @Input() label?: string;
  @Input() text?: string;

  /**
   * Matches Buckholt’s documented icon block example by default.
   * Keep this honest: classes map directly to the rendered icon block.
   */
  @Input() iconBlockClasses = 'icon-block icon-block-xxl expressive-dark expressive-primary';

  /**
   * Direct class mapping for the icon element.
   */
  @Input() iconClasses = 'fa-regular fa-ghost';
}