import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatSnackBarModule, MatMenuModule,RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onContinueShopping user should navigate to home page', () => {
    const spy = spyOn(router, 'navigate');
    component.onSignin();
    expect(spy).toHaveBeenCalledWith(['auth']);
  });
  it('onContinueShopping user should navigate to home page', () => {
    const spy = spyOn(router, 'navigate');
    component.onUserPageLaunch("test");
    expect(spy).toHaveBeenCalledWith(['test']);
  });
});
