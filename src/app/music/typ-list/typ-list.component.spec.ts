import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypListComponent } from './typ-list.component';

describe('TypListComponent', () => {
  let component: TypListComponent;
  let fixture: ComponentFixture<TypListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
