import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldConditionnalComponent } from './old-conditionnal.component';

describe('OldConditionnalComponent', () => {
  let component: OldConditionnalComponent;
  let fixture: ComponentFixture<OldConditionnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldConditionnalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldConditionnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
