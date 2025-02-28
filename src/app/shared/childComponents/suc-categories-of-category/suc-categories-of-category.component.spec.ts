import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucCategoriesOfCategoryComponent } from './suc-categories-of-category.component';

describe('SucCategoriesOfCategoryComponent', () => {
  let component: SucCategoriesOfCategoryComponent;
  let fixture: ComponentFixture<SucCategoriesOfCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucCategoriesOfCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucCategoriesOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
