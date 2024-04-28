import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { GoogleSsoDirective } from './components/login/google-sso.directive';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignupComponent,
    GoogleSsoDirective
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,




  ]
})
export class SecurityModule { }
