import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutHopitalComponent } from './put-hopital.component';

describe('PutHopitalComponent', () => {
  let component: PutHopitalComponent;
  let fixture: ComponentFixture<PutHopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutHopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
