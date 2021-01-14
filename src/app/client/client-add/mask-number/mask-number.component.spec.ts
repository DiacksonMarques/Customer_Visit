import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskNumberComponent } from './mask-number.component';

describe('MaskNumberComponent', () => {
  let component: MaskNumberComponent;
  let fixture: ComponentFixture<MaskNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
