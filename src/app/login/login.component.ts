import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="kishor";
  password=''
  errorMessage="Invalid login"
  invalidlogin=false


  constructor() { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==='kishor'&&this.password==='dummy'){
      this.invalidlogin=false;
    }
    else{
      this.invalidlogin=true
    }
   
  }

}