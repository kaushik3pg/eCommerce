import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let router: Router;
  let event: any;
  let element: Element | any;

  let wishItem: {
    id: number;
    imgUrl: string;
    category: string;
    title: string;
    price: number;
    reviews: number;
    avgrating: number;
    quantity?: number;
    date: string;
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    router = TestBed.inject(Router);
    element = document.querySelector('#myLink');
    event = new Event('click');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onProductCardClickNavigateTo user should navigate to productid page', () => {
    const spy = spyOn(router, 'navigate');
    component.onProductCardClickNavigateTo(2);
    expect(spy).toHaveBeenCalledWith(['product', 2]);
  });

  it('primaryAction should emit item', () => {
    wishItem = {
      id: 13,
      imgUrl: 'assets/images/products/13-medium.png',
      category: 'Watch',
      title: 'Classic Watch',
      price: 132,
      reviews: 78,
      avgrating: 3.5,
      quantity: 5,
      date: new Date().toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    component.primaryAction(event, wishItem);
    expect(component.primaryAction).toHaveBeenCalled();

    const spy =  spyOn(event, 'stopPropagation');

    element.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
  });
});
