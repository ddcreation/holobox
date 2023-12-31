import { Routes } from '@angular/router';
import { ClockComponent } from './pages/clock/clock.component';
import { HologramComponent } from './pages/hologram/hologram.component';

export const routes: Routes = [
  { path: 'clock', component: ClockComponent },
  { path: 'hologram', component: HologramComponent },
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
];
