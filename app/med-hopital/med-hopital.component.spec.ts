import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedHopitalComponent } from './med-hopital.component';

describe('MedHopitalComponent', () => {
  let component: MedHopitalComponent;
  let fixture: ComponentFixture<MedHopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedHopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
