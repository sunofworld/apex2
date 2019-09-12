import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangembPage } from './changemb.page';

describe('ChangembPage', () => {
  let component: ChangembPage;
  let fixture: ComponentFixture<ChangembPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangembPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangembPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
