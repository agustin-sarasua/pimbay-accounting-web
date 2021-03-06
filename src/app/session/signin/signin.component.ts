import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from './../../services/user.service'
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    this.userService.signin(this.form.get('uname').value, this.form.get('password').value).then(data => {
      console.log(data);
      localStorage.setItem("pimbayToken", data);
      this.authService.login();
      this.router.navigate ( [ '/home' ] );
    }, error => {
      console.log(error);
    });
  }

}
