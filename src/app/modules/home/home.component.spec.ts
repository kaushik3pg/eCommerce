import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let event : any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ], imports:[BrowserAnimationsModule, MatPaginatorModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCategoryFilterChange items of selected categories should display', () => {
   
    component.onCategoryFilterChange();

    expect(component.products.length).toBeDefined();
  });

  
  it('onPageChange, respectetive page items should display', () => {
   // component.productList= []
    component.itemsPerPage = 2;
    let startIndex = 1;
    let endIndex = 3;
    //products = productList.slice(startIndex, endIndex);
    component.onPageChange(event);

    expect(component.products).toBeDefined();
  });
});
