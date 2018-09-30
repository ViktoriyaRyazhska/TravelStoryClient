import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWebSocketsComponent } from './test-web-sockets.component';

describe('TestWebSocketsComponent', () => {
  let component: TestWebSocketsComponent;
  let fixture: ComponentFixture<TestWebSocketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWebSocketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWebSocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
