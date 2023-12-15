import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  standalone: true,
  imports: [NgIf]
})
export class CounterDisplayComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) counter!: number;
  @Output() pick = new EventEmitter<number>();
}
