import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountComponent } from './delete-account.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
describe('DeleteAccountComponent', () => {
  let component: DeleteAccountComponent;
  let fixture: ComponentFixture<DeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccountComponent ], imports: [ 
        FormsModule,
        ReactiveFormsModule,
    ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
