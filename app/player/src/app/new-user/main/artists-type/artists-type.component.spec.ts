import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsTypeComponent } from './artists-type.component';

describe('ArtistsTypeComponent', () => {
  let component: ArtistsTypeComponent;
  let fixture: ComponentFixture<ArtistsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
