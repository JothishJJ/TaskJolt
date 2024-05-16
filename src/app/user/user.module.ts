import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { GoogleSigninDirective } from './google-signin/google-signin.directive';
import { SignOutDirective } from './sign-out.directive';

@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective, SignOutDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    NgOptimizedImage,
  ],
})
export class UserModule {}
