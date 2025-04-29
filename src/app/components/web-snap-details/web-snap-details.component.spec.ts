import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSnapDetailsComponent } from './web-snap-details.component';

describe('WebSnapDetailsComponent', () => {
  let component: WebSnapDetailsComponent;
  let fixture: ComponentFixture<WebSnapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSnapDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSnapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
