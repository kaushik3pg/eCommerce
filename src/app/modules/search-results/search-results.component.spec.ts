import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchResultsComponent } from './search-results.component';
import { Router } from '@angular/router';
import { productList } from '../../data/products';
describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],  imports: [ RouterTestingModule.withRoutes([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onContinueShopping user should navigate to home page', () => {
    const spy = spyOn(router, 'navigate');
    component.onContinueShopping();
    expect(spy).toHaveBeenCalledWith(['home']);
  });
  it('ngOnInit ', () => {
    component.searchedProduct = "";
    component.searchedCategory = "";
    expect(component.products.length).toBeDefined();

    const fixture = TestBed.createComponent(SearchResultsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement
  });
 
});
