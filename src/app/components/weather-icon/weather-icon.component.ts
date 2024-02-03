import { Component, Input } from '@angular/core';
import { WeatherDTO } from '../../pages/weather/services/weather.interface';

@Component({
  selector: 'hb-weather-icon',
  standalone: true,
  imports: [],
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.scss',
})
export class WeatherIconComponent {
  @Input({ required: true }) public weather!: WeatherDTO;
  @Input() public size: string = 's';

  public get iconUrl(): string {
    return `assets/weather-icons/${this.weather.icon}.svg`;
  }
}
