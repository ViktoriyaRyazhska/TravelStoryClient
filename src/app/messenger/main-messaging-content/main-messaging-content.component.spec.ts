import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMessagingContentComponent } from './main-messaging-content.component';

describe('MainMessagingContentComponent', () => {
  let component: MainMessagingContentComponent;
  let fixture: ComponentFixture<MainMessagingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMessagingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMessagingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
