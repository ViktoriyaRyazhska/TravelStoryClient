import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoSideComponent } from './user-info-side.component';

describe('UserInfoSideComponent', () => {
  let component: UserInfoSideComponent;
  let fixture: ComponentFixture<UserInfoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
