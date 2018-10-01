import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeProfilePicComponent } from './dialog-change-profile-pic.component';

describe('DialogChangeProfilePicComponent', () => {
  let component: DialogChangeProfilePicComponent;
  let fixture: ComponentFixture<DialogChangeProfilePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogChangeProfilePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChangeProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
