import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenIconComponent } from './screen-icon.component';

describe('ScreenIconComponent', () => {
  let component: ScreenIconComponent;
  let fixture: ComponentFixture<ScreenIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
