import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeijianPage } from './peijian.page';

describe('PeijianPage', () => {
  let component: PeijianPage;
  let fixture: ComponentFixture<PeijianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeijianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeijianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
