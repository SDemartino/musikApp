import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypComponent } from './typ.component';

describe('TypComponent', () => {
  let component: TypComponent;
  let fixture: ComponentFixture<TypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
