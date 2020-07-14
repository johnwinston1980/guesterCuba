import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDispatchersComponent } from './list-dispatchers.component';

describe('ListDispatchersComponent', () => {
  let component: ListDispatchersComponent;
  let fixture: ComponentFixture<ListDispatchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDispatchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDispatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
