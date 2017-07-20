import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarMixesComponent } from './similar-mixes.component';

describe('SimilarMixesComponent', () => {
  let component: SimilarMixesComponent;
  let fixture: ComponentFixture<SimilarMixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarMixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarMixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
