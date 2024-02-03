import { Routes } from '@angular/router';
import { ClockComponent } from './pages/clock/clock.component';
import { HologramComponent } from './pages/hologram/hologram.component';
import { RotateComponent } from './pages/rotate/rotate.component';
import { WeatherComponent } from './pages/weather/weather.component';

export const routes: Routes = [
  { path: 'clock', component: ClockComponent, data: { icon: 'clock' } },
  {
    path: 'hologram',
    component: HologramComponent,
    data: { icon: 'play-btn' },
  },
  {
    path: 'weather',
    component: WeatherComponent,
    data: { icon: 'cloud-sun' },
  },
  {
    path: '',
    component: RotateComponent,
    data: { icon: 'arrow-clockwise' },
  },
];
