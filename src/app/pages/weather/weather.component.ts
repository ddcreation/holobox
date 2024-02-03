import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  host: {
    class: 'my-auto px-5',
  },
})
export class WeatherComponent implements OnInit, OnDestroy {
  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
