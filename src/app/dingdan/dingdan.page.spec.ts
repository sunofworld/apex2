import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DingdanPage } from './dingdan.page';

describe('DingdanPage', () => {
  let component: DingdanPage;
  let fixture: ComponentFixture<DingdanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingdanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingdanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
