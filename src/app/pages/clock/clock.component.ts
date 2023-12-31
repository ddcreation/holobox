import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
  host: {
    class: 'my-auto px-5',
  },
})
export class ClockComponent implements OnInit, OnDestroy {
  public timer: Date = new Date();
  private _timerFn: any;

  public ngOnInit(): void {
    this._timerFn = setInterval(() => (this.timer = new Date()), 1000);
  }

  public ngOnDestroy(): void {
    clearInterval(this._timerFn);
  }
}
