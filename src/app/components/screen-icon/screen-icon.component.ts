import { Component, OnInit } from '@angular/core';
import { ScreenIconManagerService } from '../../services/screen-icon-manager.service';

@Component({
  selector: 'app-screen-icon',
  standalone: true,
  imports: [],
  templateUrl: './screen-icon.component.html',
  styleUrl: './screen-icon.component.scss',
})
export class ScreenIconComponent implements OnInit {
  public icon: string = '';

  constructor(private _screenIconManager: ScreenIconManagerService) {}

  public ngOnInit(): void {
    this.icon = this._screenIconManager.getIcon();
  }
}
