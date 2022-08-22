import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-newsletter-form',
  templateUrl: './sign-up-newsletter-form.component.html',
  styleUrls: ['./sign-up-newsletter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpNewsletterFormComponent implements OnInit {
  @Output() signup = new EventEmitter<string>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.signup.emit(this.form.value.email);
  }
}
@NgModule({
  declarations: [SignUpNewsletterFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpNewsletterFormComponent],
})
export class SignUpNewsletterFormModule {}
