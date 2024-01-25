import { Directive, OnDestroy, OnInit, inject } from '@angular/core';
import { ScreenIconManagerService } from '../../services/screen-icon-manager.service';

export interface HoloboxPage {
  holopageInit?(): void | null;
  holopageDestroy?(): void | null;
}

@Directive()
export abstract class HoloboxPage implements HoloboxPage, OnInit, OnDestroy {
  protected _iconManager = inject(ScreenIconManagerService);
  protected abstract icon: string;

  public ngOnInit(): void {
    this._iconManager.setIcon(this.icon);

    if (typeof this.holopageInit !== 'undefined') {
      this.holopageInit();
    }
  }

  public ngOnDestroy(): void {
    if (typeof this.holopageDestroy !== 'undefined') {
      this.holopageDestroy();
    }
  }
}
