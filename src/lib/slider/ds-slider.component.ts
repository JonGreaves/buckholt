import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ds-slider',
  standalone: true,
  templateUrl: './ds-slider.component.html',
  styleUrl: './ds-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsSliderComponent {
  @Input() id = 'slider-example';
  @Input() label = 'Slider label text';
  @Input() assistiveText = '';
  @Input() helperText = '';
  @Input() errorMessage = '';

  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;

  @Input() showNumberInput = true;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() tickCount = 5;

  @Output() valueChange = new EventEmitter<number>();

  private _value = 50;

  @Input()
  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get outputId(): string {
    return `sliderOutput-${this.id.replace(/^slider-/, '')}`;
  }

  get showTicks(): boolean {
    return !this.disabled && !this.readonly;
  }

  get ticks(): readonly number[] {
    return Array.from({ length: this.tickCount });
  }

  onValueInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._value = Number(input.value);
    this.valueChange.emit(this._value);
  }
}