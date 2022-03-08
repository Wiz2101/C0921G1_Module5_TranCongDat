import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityVisualComponent } from './facility-visual.component';

describe('ListComponent', () => {
  let component: FacilityVisualComponent;
  let fixture: ComponentFixture<FacilityVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
