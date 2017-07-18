import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarArtistsComponent } from './similar-artists.component';

describe('SimilarArtistsComponent', () => {
  let component: SimilarArtistsComponent;
  let fixture: ComponentFixture<SimilarArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
