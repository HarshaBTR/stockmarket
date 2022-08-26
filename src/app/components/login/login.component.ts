import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inalidCredential: boolean=false;
  loginForm: FormGroup
  constructor(private router: Router,private companyService:CompanyService) {
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
          this.companyService.admin=true;
          this.router.navigate(['/', 'admin', 'manageCompanies']);
        }
        else {
          this.inalidCredential=true;
          
        }
      }

  }
