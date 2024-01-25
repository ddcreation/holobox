import { Component, OnDestroy, OnInit } from '@angular/core';
import { HOLOBOX_PAGES } from '../pages.index';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-rotate',
  standalone: true,
  imports: [NgComponentOutlet],
  template: '<ng-container *ngComponentOutlet="currentPage" />',
})
export class RotateComponent implements OnInit, OnDestroy {
  private _screeenRetention = 60000;
  private _timerFn: any;

  private _holoPages = HOLOBOX_PAGES;
  private _currentPageIdx = 0;

  public get currentPage() {
    return this._holoPages[this._currentPageIdx];
  }

  private _displayNextPage() {
    this._currentPageIdx++;

    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this._currentPageIdx === this._holoPages.length) {
      this._currentPageIdx = 0;
    }
  }

  public ngOnInit(): void | null {
    this._timerFn = setInterval(
      () => this._displayNextPage(),
      this._screeenRetention
    );
  }

  public ngOnDestroy(): void | null {
    clearInterval(this._timerFn);
  }
}
