import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeixiuPage } from './weixiu.page';

describe('WeixiuPage', () => {
  let component: WeixiuPage;
  let fixture: ComponentFixture<WeixiuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeixiuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeixiuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
