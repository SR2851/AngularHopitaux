import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPatientComponent } from './put-patient.component';

describe('PutPatientComponent', () => {
  let component: PutPatientComponent;
  let fixture: ComponentFixture<PutPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
