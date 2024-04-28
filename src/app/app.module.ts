import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {SecurityModule} from "./modules/security/security.module";
import {MatButtonModule} from "@angular/material/button";
import {AngularFireModule} from "@angular/fire/compat";

import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoginComponent} from "./modules/security/components/login/login.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpmanagerInterceptor} from "./interceptor/httpmanager.interceptor";




@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    MainFooterComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SecurityModule,
    MatProgressSpinner,
    MatProgressSpinnerModule,


  ],
  providers: [
    provideAnimationsAsync(),
    {provide:HTTP_INTERCEPTORS,useClass:HttpmanagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
