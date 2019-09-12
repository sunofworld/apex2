import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaifaPage } from './daifa.page';

describe('DaifaPage', () => {
  let component: DaifaPage;
  let fixture: ComponentFixture<DaifaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaifaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaifaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
