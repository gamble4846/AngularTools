import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPGOpenerComponent } from './rpgopener.component';

describe('RPGOpenerComponent', () => {
  let component: RPGOpenerComponent;
  let fixture: ComponentFixture<RPGOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPGOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RPGOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
