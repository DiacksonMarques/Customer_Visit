import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientuniComponent } from './clientuni.component';

describe('ClientuniComponent', () => {
  let component: ClientuniComponent;
  let fixture: ComponentFixture<ClientuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
