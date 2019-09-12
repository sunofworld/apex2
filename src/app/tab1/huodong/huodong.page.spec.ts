import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuodongPage } from './huodong.page';

describe('HuodongPage', () => {
  let component: HuodongPage;
  let fixture: ComponentFixture<HuodongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuodongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuodongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
