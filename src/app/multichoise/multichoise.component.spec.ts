import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultichoiseComponent } from './multichoise.component';

describe('MultichoiseComponent', () => {
  let component: MultichoiseComponent;
  let fixture: ComponentFixture<MultichoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultichoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultichoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
