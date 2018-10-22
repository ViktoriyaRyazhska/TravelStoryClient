import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlacesComponent } from './user-places.component';

describe('UserPlacesComponent', () => {
  let component: UserPlacesComponent;
  let fixture: ComponentFixture<UserPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
