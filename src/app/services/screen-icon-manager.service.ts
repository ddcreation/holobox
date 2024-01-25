import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenIconManagerService {
  private _icon$ = new BehaviorSubject<string | null>(null);

  constructor() {}

  public subscribeIcon(): Observable<string | null> {
    return this._icon$.asObservable();
  }

  public setIcon(icon: string): void {
    this._icon$.next(icon);
  }
}
