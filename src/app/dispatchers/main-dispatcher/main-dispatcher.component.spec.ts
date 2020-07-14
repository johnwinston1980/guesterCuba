import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDispatcherComponent } from './main-dispatcher.component';

describe('MainDispatcherComponent', () => {
  let component: MainDispatcherComponent;
  let fixture: ComponentFixture<MainDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
