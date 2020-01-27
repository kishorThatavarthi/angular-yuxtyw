import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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


  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==='kishor'&&this.password==='dummy'){
      this.router.navigate(['welcome',this.username])
      this.invalidlogin=false;
    }
    else{
      this.invalidlogin=true
    }
   
  }

}