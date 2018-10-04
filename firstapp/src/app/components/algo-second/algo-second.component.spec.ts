import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoSecondComponent } from './algo-second.component';

describe('AlgoSecondComponent', () => {
  let component: AlgoSecondComponent;
  let fixture: ComponentFixture<AlgoSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
