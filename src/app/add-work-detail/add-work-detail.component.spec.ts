import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkDetailComponent } from './add-work-detail.component';

describe('AddWorkDetailComponent', () => {
  let component: AddWorkDetailComponent;
  let fixture: ComponentFixture<AddWorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
