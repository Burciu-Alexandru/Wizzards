import { DOCUMENT } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{path:"",component:LoginComponent},

{ path:"register" ,component:RegisterComponent},
{ 
  
  path : "login" , component: LoginComponent
},
{path:"home/:id",component:HomeComponent},
{path:"profile-settings",component:ProfileComponent},
{path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

