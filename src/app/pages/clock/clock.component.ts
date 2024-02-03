import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateService } from '../../services/date.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  providers: [DateService],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
  host: {
    class: 'my-auto px-5',
  },
})
export class ClockComponent {
  public timer: BehaviorSubject<Date>;

  constructor(private _dateService: DateService) {
    this.timer = this._dateService.currentDate$;
  }
}
