import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowsSideComponent } from './user-follows-side.component';

describe('UserFollowsSideComponent', () => {
  let component: UserFollowsSideComponent;
  let fixture: ComponentFixture<UserFollowsSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowsSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
