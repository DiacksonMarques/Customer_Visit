import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisituniComponent } from './visituni.component';

describe('VisituniComponent', () => {
  let component: VisituniComponent;
  let fixture: ComponentFixture<VisituniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisituniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisituniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
