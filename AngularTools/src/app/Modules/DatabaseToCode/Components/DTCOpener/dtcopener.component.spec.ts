import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTCOpenerComponent } from './dtcopener.component';

describe('DTCOpenerComponent', () => {
  let component: DTCOpenerComponent;
  let fixture: ComponentFixture<DTCOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTCOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DTCOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
