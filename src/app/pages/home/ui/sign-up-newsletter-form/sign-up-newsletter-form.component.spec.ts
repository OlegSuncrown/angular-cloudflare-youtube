import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpNewsletterFormComponent } from './sign-up-newsletter-form.component';

describe('SignUpNewsletterFormComponent', () => {
  let component: SignUpNewsletterFormComponent;
  let fixture: ComponentFixture<SignUpNewsletterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpNewsletterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpNewsletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
