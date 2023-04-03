import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTMOpenerComponent } from './dtmopener.component';

describe('DTMOpenerComponent', () => {
  let component: DTMOpenerComponent;
  let fixture: ComponentFixture<DTMOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTMOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DTMOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
