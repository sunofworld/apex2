import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhucePage } from './zhuce.page';

describe('ZhucePage', () => {
  let component: ZhucePage;
  let fixture: ComponentFixture<ZhucePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhucePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhucePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
