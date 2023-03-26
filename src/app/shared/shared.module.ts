import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { UserNameComponent } from './user-name/user-name.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormValidationComponent,
    FaIconComponent,
    UserNameComponent,
  ],
  exports: [
    FormValidationComponent,
    ReactiveFormsModule,
    CommonModule,
    FaIconComponent,
    UserNameComponent,
  ]
})
export class SharedModule { }
