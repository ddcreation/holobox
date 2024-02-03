import { Component, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WeatherDTO, WeatherResponse } from './services/weather.interface';
import { DateService } from '../../services/date.service';
import { WeatherIconComponent } from '../../components/weather-icon/weather-icon.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  host: {
    class: 'my-auto px-5',
  },
  imports: [CommonModule, WeatherIconComponent],
  providers: [WeatherService, DateService],
})
export class WeatherComponent implements OnInit, OnDestroy {
  public currentDate: BehaviorSubject<Date>;
  public weatherDatas: WeatherResponse | null = null;

  private _subscriptions = new Subscription();

  constructor(
    private _weatherService: WeatherService,
    private _dateService: DateService
  ) {
    this.currentDate = this._dateService.currentDate$;
  }

  public ngOnInit(): void {
    this._subscriptions.add(this._forecast());
  }

  public ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public get today(): WeatherDTO | null {
    return this.weatherDatas?.days[0] || null;
  }

  private _forecast() {
    return this._weatherService
      .forecast$()
      .subscribe((forecast) => (this.weatherDatas = forecast));
  }
}
