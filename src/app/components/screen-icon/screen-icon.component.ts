import { Component } from '@angular/core';

@Component({
  selector: 'app-screen-icon',
  standalone: true,
  imports: [],
  templateUrl: './screen-icon.component.html',
  styleUrl: './screen-icon.component.scss',
})
export class ScreenIconComponent {
  public icon: string = 'arrow-clockwise';
}
