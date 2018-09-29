import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGallerySideComponent } from './user-gallery-side.component';

describe('UserGallerySideComponent', () => {
  let component: UserGallerySideComponent;
  let fixture: ComponentFixture<UserGallerySideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGallerySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGallerySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
