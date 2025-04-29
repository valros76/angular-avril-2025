import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSnapListComponent } from './web-snap-list.component';

describe('WebSnapListComponent', () => {
  let component: WebSnapListComponent;
  let fixture: ComponentFixture<WebSnapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSnapListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
