import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/AuthUser';
import { User } from 'src/app/models/User';
import jwt_decode from "jwt-decode";
import { UserService } from 'src/app/service/user.service';
import { AuthUserService } from 'src/app/service/auth.user.service';
import { Token } from 'src/app/models/Token';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inalidCredential: boolean=false;
  loginForm: FormGroup

  constructor(private userService: UserService,private router: Router, private authService: AuthUserService) {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])

    })
   }

  ngOnInit(): void {
  }

  getLogin() {
    this.validateUserAndNavigate();
  }

 

  validateUserAndNavigate() {

    
       
        if (this.loginForm.value.name == "admin" && this.loginForm.value.password=="admin" ) {
          this.inalidCredential=false;
          this.router.navigate(['/', 'admin', 'manageCompanies']);
        }
        else {
          this.inalidCredential=true;
          
        }
      }

  }
