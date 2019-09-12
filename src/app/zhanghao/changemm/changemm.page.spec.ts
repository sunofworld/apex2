import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemmPage } from './changemm.page';

describe('ChangemmPage', () => {
  let component: ChangemmPage;
  let fixture: ComponentFixture<ChangemmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangemmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
