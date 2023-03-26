import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let pass = control.get('password')?.value;
  if(!pass) return null;

  let confirmPass = control.get('passwordConfirm')?.value;

  return pass === confirmPass ? null : { PassNotSame: true };
};

/** Модель на странице входа */
export let registerFormModel = new FormGroup(
  {
    /** UserName */
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),

    /** Пароль */
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),

    /** Пароль */
    passwordConfirm: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),

    /** Телефон */
    phone: new FormControl(null),

    /** Email */
    email: new FormControl(null),
  },
  { validators: checkPasswords }
);
