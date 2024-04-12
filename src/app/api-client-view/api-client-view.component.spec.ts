import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClientViewComponent } from './api-client-view.component';

describe('ApiClientViewComponent', () => {
  let component: ApiClientViewComponent;
  let fixture: ComponentFixture<ApiClientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiClientViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiClientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
