import { Component } from '@angular/core';
import { HoloboxPage } from '../../models/holobox-page/holobox-page.component';

@Component({
  selector: 'app-hologram',
  standalone: true,
  imports: [],
  templateUrl: './hologram.component.html',
})
export class HologramComponent extends HoloboxPage {
  public apiLoaded = false;
  protected icon = 'play-btn-fill';
}
