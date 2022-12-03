import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { item_removed_from_cart } from 'src/app/data/constants';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { compileComponentFromMetadata } from '@angular/compiler';
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let cartService: AddToCartService;

  beforeEach(async () => {
    const cartServiceSpy = jasmine.createSpyObj('AddToCartService', [
      'setCartStore',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MatSnackBarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // cartServiceSpy = TestBed.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Writing unit test cases //
  // it('addToCart', () => {
  //   component.onAddToCart('something');
  // });

  it('should check product is in checklist', () => {
    expect(component.wishlist).toBeDefined();
    component.wishlist = [
      {
        id: 13,
        imgUrl: 'assets/images/products/13-medium.png',
        category: 'Watch',
        title: 'Classic Watch',
        price: 132,
        reviews: 78,
        avgrating: 3.5,
      },
      {
        id: 2,
        imgUrl: 'assets/images/products/2-medium.png',
        category: 'Electronics',
        title: 'PC All-in-one',
        price: 1832,
        reviews: 78,
        avgrating: 3.5,
      },
      {
        id: 18,
        imgUrl: 'assets/images/products/18-medium.webp',
        category: 'Appliances',
        title: 'Mixer Juicer Blender combo',
        price: 432,
        reviews: 78,
        avgrating: 3.5,
      },
    ];
const res = component.onCheckProductExistInWishlist(18);
    expect(res).toEqual(true);
  });
});
