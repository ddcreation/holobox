import { Routes } from '@angular/router';
import { ClockComponent } from './pages/clock/clock.component';
import { HologramComponent } from './pages/hologram/hologram.component';
import { RotateComponent } from './pages/rotate/rotate.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'clock', component: ClockComponent, data: { icon: 'clock' } },
  {
    path: 'hologram',
    component: HologramComponent,
    data: { icon: 'play-btn' },
  },
  {
    path: '',
    component: RotateComponent,
    data: { icon: 'arrow-clockwise' },
  },
];
