import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenIconManagerService {
  private _icon = 'arrow-clockwise';

  constructor() {}

  public getIcon(): string {
    return this._icon;
  }

  public setIcon(icon: string): void {
    this._icon = icon;
  }
}
