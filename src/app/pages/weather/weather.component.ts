import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WeatherDTO } from './services/weather.interface';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  host: {
    class: 'my-auto px-5',
  },
  imports: [CommonModule],
  providers: [WeatherService],
})
export class WeatherComponent implements OnInit, OnDestroy {
  public weatherDatas: WeatherDTO | null = null;

  private _subscriptions = new Subscription();

  constructor(private _weatherService: WeatherService) {}

  public ngOnInit(): void {
    this._subscriptions.add(this._forecast());
  }

  public ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _forecast() {
    return this._weatherService.forecast$().subscribe((forecast) => {
      this.weatherDatas = forecast;
    });
  }
}
