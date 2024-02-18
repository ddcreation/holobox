import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { ScreenIconComponent } from './components/screen-icon/screen-icon.component';
import { Observable, Subscription, filter, map, mergeMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, ScreenIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  public readonly mirror_mode = import.meta.env.HB_MIRROR_MODE;
  public icon: string = '';
  private _router$ = new Subscription();

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this._router$ = this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._rootRoute(this._route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary'),
        mergeMap(
          (route: ActivatedRoute) => route.data as Observable<{ icon: string }>
        )
      )
      .subscribe((route) => {
        this.icon = route.icon;
      });
  }

  public ngOnDestroy(): void {
    this._router$.unsubscribe();
  }

  private _rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
