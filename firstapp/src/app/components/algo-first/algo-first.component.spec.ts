import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoFirstComponent } from './algo-first.component';

describe('AlgoFirstComponent', () => {
  let component: AlgoFirstComponent;
  let fixture: ComponentFixture<AlgoFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
