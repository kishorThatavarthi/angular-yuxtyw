import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { WelcomeComponent} from '../welcome/welcome.component';
import {ErrorComponent} from '../error/error.component';
const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
   {path:'welcome',component:WelcomeComponent},
   {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,WelcomeComponent,ErrorComponent]