import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSnapComponent } from './web-snap.component';

describe('WebSnapComponent', () => {
  let component: WebSnapComponent;
  let fixture: ComponentFixture<WebSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
