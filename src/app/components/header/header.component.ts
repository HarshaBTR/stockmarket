import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userSessionValid:boolean=false;
  admin:boolean=false
 
  constructor(public companyService:CompanyService) { }

  ngOnInit(): void {
  this.admin=  this.companyService.admin
  
  }

  headerStyle = {
    color: "white",
    "background-color": " #1784bf",
    "font-style": "italic"
  }

  
  getUserSession(){
    console.log(this.companyService.admin)
    return this.companyService.admin;
   }
   clearSession(){
     
     this.companyService.admin=false;
   }
}