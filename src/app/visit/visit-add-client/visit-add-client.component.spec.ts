import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitAddClientComponent } from './visit-add-client.component';

describe('VisitAddClientComponent', () => {
  let component: VisitAddClientComponent;
  let fixture: ComponentFixture<VisitAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitAddClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
