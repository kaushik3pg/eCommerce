import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Router} from '@angular/router';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      imports: [MatSnackBarModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
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

  it('on calculation total amount', () => {
    expect(component.cartItems).toBeDefined();
    component.cartItems = [
      {
        id: 13,
        imgUrl: 'assets/images/products/13-medium.png',
        category: 'Watch',
        title: 'Classic Watch',
        price: 100,
        reviews: 78,
        avgrating: 3.5,
        quantity: 3,
      },
      {
        id: 2,
        imgUrl: 'assets/images/products/2-medium.png',
        category: 'Electronics',
        title: 'PC All-in-one',
        price: 200,
        reviews: 78,
        avgrating: 3.5,
        quantity: 2,
      },
      {
        id: 18,
        imgUrl: 'assets/images/products/18-medium.webp',
        category: 'Appliances',
        title: 'Mixer Juicer Blender combo',
        price: 300,
        reviews: 78,
        avgrating: 3.5,
        quantity: 1,
      },
    ];
    let total = component.calculateTotalAmount();
    expect(total).toEqual(1000);
  });

  it('onProductCardClickNavigateTo user should navigate to productid page', () => {
    const spy = spyOn(router, 'navigate');
    component.onProductCardClickNavigateTo(2);
    expect(spy).toHaveBeenCalledWith(['product', 2]);
  });
});
