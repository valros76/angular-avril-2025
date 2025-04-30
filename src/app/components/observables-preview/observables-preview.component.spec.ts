import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPreviewComponent } from './observables-preview.component';

describe('ObservablesPreviewComponent', () => {
  let component: ObservablesPreviewComponent;
  let fixture: ComponentFixture<ObservablesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
