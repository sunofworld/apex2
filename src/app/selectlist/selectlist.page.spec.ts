import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectlistPage } from './selectlist.page';

describe('SelectlistPage', () => {
  let component: SelectlistPage;
  let fixture: ComponentFixture<SelectlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
