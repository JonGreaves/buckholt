import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  TemplateRef,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: 'ng-template[dsVersaTileActions]',
  standalone: true,
})
export class DsVersaTileActionsDirective {
  constructor(public readonly templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'ds-versa-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-versa-tile.component.html',
  styleUrl: './ds-versa-tile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsVersaTileComponent {
  readonly label = input.required<string>();
  readonly text = input.required<string>();
  readonly iconClass = input<string | null>(null);
  readonly progressValue = input<number | null>(null);

  @ContentChild(DsVersaTileActionsDirective)
  protected actionsTemplate?: DsVersaTileActionsDirective;

  protected readonly hasIcon = computed(() => {
    const iconClass = this.iconClass();
    return typeof iconClass === 'string' && iconClass.trim().length > 0;
  });

  protected readonly hasProgress = computed(() => this.progressValue() !== null);

  protected readonly clampedProgressValue = computed(() => {
    const value = this.progressValue();

    if (value === null || Number.isNaN(value)) {
      return 0;
    }

    return Math.min(100, Math.max(0, value));
  });

  protected readonly progressWidth = computed(() => `${this.clampedProgressValue()}%`);
}