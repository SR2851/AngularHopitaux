import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHopitalComponent } from './delete-hopital.component';

describe('DeleteHopitalComponent', () => {
  let component: DeleteHopitalComponent;
  let fixture: ComponentFixture<DeleteHopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
