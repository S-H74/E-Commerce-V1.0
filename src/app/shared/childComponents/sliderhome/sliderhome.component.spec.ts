import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderhomeComponent } from './sliderhome.component';

describe('SliderhomeComponent', () => {
  let component: SliderhomeComponent;
  let fixture: ComponentFixture<SliderhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
