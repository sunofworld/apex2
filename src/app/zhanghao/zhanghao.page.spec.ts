import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhanghaoPage } from './zhanghao.page';

describe('ZhanghaoPage', () => {
  let component: ZhanghaoPage;
  let fixture: ComponentFixture<ZhanghaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhanghaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhanghaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
