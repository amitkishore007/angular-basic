import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomComponent } from './newcustom.component';

describe('NewcustomComponent', () => {
  let component: NewcustomComponent;
  let fixture: ComponentFixture<NewcustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
