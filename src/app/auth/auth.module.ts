import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutesService } from '../services/routes.service';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, RoutesService],

})
export class AuthModule { }
