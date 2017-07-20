import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTypeComponent } from './music-type.component';

describe('MusicTypeComponent', () => {
  let component: MusicTypeComponent;
  let fixture: ComponentFixture<MusicTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
