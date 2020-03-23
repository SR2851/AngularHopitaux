import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutMedecinComponent } from './put-medecin.component';

describe('PutMedecinComponent', () => {
  let component: PutMedecinComponent;
  let fixture: ComponentFixture<PutMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
