import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypFormComponent } from './typ-form.component';

describe('TypFormComponent', () => {
  let component: TypFormComponent;
  let fixture: ComponentFixture<TypFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
