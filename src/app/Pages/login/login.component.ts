import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: FormControl = new FormControl("");

  password: FormControl = new FormControl("");

  router = inject(Router);

  onLogin() {
    debugger;
    if(this.userName.value == "admin" && this.password.value == "223344"){
      this.router.navigateByUrl("dashboard")
    }else{
      alert("Wrong Credentials")
    }
  }

}
