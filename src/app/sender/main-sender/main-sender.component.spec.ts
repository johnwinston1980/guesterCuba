import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSenderComponent } from './main-sender.component';

describe('MainSenderComponent', () => {
  let component: MainSenderComponent;
  let fixture: ComponentFixture<MainSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
