import { Injectable } from '@angular/core';
import { WeatherDTO, WeatherResponse } from './weather.interface';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import weatherResponse from './example.json';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _apiKey = import.meta.env.HB_WEATHER_API_KEY;
  private _metrics = import.meta.env.HB_UNIT_GROUP;
  private _lang = import.meta.env.HB_LOCALE_ID.substring(0, 2);
  private _location = import.meta.env.HB_LOCATION;
  private _forecastNumber = 7;

  constructor(private _http: HttpClient) {}

  forecast$(): Observable<WeatherResponse> {
    const current = new Date().toISOString().substring(0, 10);
    // temp mock:
    return of(weatherResponse as any as WeatherResponse);
    return this._http.get<WeatherResponse>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this._location}/${current}/next${this._forecastNumber}days?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=${this._apiKey}&options=beta&contentType=json&unitGroup=${this._metrics}&lang=${this._lang}&iconSet=icons2`
    );
  }
}
