import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist.service';
import { forwardRef } from '@angular/core';

fdescribe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let cartStore: AddToCartService;
  let wishStore: AddToWishlistService;
  let snackbar: MatSnackBar;
  let product: any;
  let quantity: Number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [
        FormsModule,
        
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule,
      ],
      providers: [
        AddToCartService,
        AddToWishlistService,
   
        {provide: Router, useValue: {
          navigate: (router: string[])=>''
        }},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (id: any) => '2',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    cartStore = TestBed.inject(AddToCartService);
    wishStore = TestBed.inject(AddToWishlistService);
    snackbar = TestBed.inject(MatSnackBar);
    product = {
      id: 2,
      imgUrl: 'https://test.google.co.pk',
      category: '',
      title: '',
      price: 0,
      reviews: 0,
      avgrating: 0,
      description: '',
      seller: '',
      services: {
        cod: '',
        return: '',
      },
    };
    quantity = 1;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
  });
  it('onContinueShopping user should navigate to home page', () => {
    const spy = spyOn(router, 'navigate');
    component.onContinueShopping();
    expect(spy).toHaveBeenCalledWith(['home']);
  });

  //   it('onAddToCart product should be added to Cart', () => {
  //     const spy = spyOn(cartStore, 'setCartStore');
  //     component.onAddToCart();
  //     expect(spy).toHaveBeenCalledWith({ ...product, quantity });
  //   });

  //    it('onAddToWishlist user should navigate to home page', () => {
  //   component = fixture.componentInstance;
  //   const spy = spyOn(wishStore, 'setWishStore');
  //   component.onAddToWishlist();
  //   expect(spy).toHaveBeenCalledWith({
  //     ...product,
  //     date: new Date().toLocaleDateString(undefined, {
  //       day: 'numeric',
  //       month: 'long',
  //       year: 'numeric',
  //     }),
  //   });
  //  });
});
