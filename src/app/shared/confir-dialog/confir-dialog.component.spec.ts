import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirDialogComponent } from './confir-dialog.component';

describe('ConfirDialogComponent', () => {
  let component: ConfirDialogComponent;
  let fixture: ComponentFixture<ConfirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
