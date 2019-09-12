import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MengdianPage } from './mengdian.page';

describe('MengdianPage', () => {
  let component: MengdianPage;
  let fixture: ComponentFixture<MengdianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MengdianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MengdianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
