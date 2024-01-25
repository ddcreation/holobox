import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HoloboxPage } from '../../models/holobox-page/holobox-page.component';

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
export class ClockComponent extends HoloboxPage {
  protected icon = 'clock';
  public timer: Date = new Date();
  private _timerFn: any;

  public override holopageInit(): void {
    this._timerFn = setInterval(() => (this.timer = new Date()), 1000);
  }

  public override holopageDestroy(): void {
    clearInterval(this._timerFn);
  }
}
