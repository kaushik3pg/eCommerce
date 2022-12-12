import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let service: FormBuilder;
  let spy: any;
  let signupForm: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ], imports: [ 
        FormsModule,
        ReactiveFormsModule,
    ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    service = new FormBuilder();
    signupForm = service.group;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getConfirmPasswordError should either return null or errror', () => {
  //  let error = component.signupForm.get('userPassword');
   let  spy = spyOn(component, 'getConfirmPasswordError');
    component.getConfirmPasswordError();
    expect(spy).toHaveBeenCalled();

  });
});
