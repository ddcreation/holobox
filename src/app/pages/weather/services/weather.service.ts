import { Injectable } from '@angular/core';
import { WeatherDTO } from './weather.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import weatherResponse from './example.json';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _apiKey = import.meta.env.HB_WEATHER_API_KEY;
  private _location = import.meta.env.HB_LOCATION;
  private _forecastNumber = 7;

  constructor(private _http: HttpClient) {}

  today$(): Observable<WeatherDTO> {
    return of();
  }

  forecast$(): Observable<WeatherDTO> {
    const current = new Date().toISOString().substring(0, 10);
    console.log(current);
    // temp mock:
    return of(weatherResponse as any as WeatherDTO);
    return this._http.get<WeatherDTO>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this._location}/${current}/next${this._forecastNumber}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=${this._apiKey}&options=beta&contentType=json`
    );
  }
}
