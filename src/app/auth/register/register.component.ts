import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/core/user.service';
import { registerFormModel } from '../../shared/form-models/register-form.model';
import { AuthApiService } from '../../shared/api/auth-api.service';

@Component({
  selector: 'login-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthApiService,]
})
export class RegisterComponent {

  public registerForm = registerFormModel;

  constructor(private service: AuthApiService
    , private router: Router
    , private userService: UserService) { }

  async onSubmit() {
    Object.values(this.registerForm.controls).forEach(control => {
      control.markAsDirty();
    });

    try {
      if (this.registerForm.valid) {
        let usr = await this.service.register(this.registerForm);
        this.userService.User = usr;
        this.router.navigateByUrl('/');
      }
    }
    catch{
      alert('Возникли непредвиденные ошибки. Попробуйте ввести другие значения или сообщите программисту');
    }
  }

  // twoSum2 = function (List: any, target: any) {
  //   for (let i = 0; i < List.length; i++) {
  //     for (let j = 0; j < List.length; j++) {
  //       if (List[i] + List[j] == target) return `${i}_${j}`;
  //     }
  //   }
  // }


  // twoSum = function (List: any, target: any) {
  //   let dict = [];
  //   for (let i = 0; i < List.length; i++) {
  //     if(typeof dict[target-List[i]] != 'undefined') return `${i}_${dict[target-List[i]]}`;
  //     dict[List[i]] = i;
  //   }
  // }
}
