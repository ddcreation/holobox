import { Component, OnInit } from '@angular/core';
import { ScreenIconManagerService } from '../../services/screen-icon-manager.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screen-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-icon.component.html',
  styleUrl: './screen-icon.component.scss',
})
export class ScreenIconComponent implements OnInit {
  public icon$: Observable<string | null> = of(null);

  constructor(private _screenIconManager: ScreenIconManagerService) {}

  public ngOnInit(): void {
    this.icon$ = this._screenIconManager.subscribeIcon();
  }
}
