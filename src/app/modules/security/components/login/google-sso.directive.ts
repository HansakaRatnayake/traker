import {Directive, HostListener} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "@firebase/auth";

@Directive({
  selector: '[appGoogleSso]'
})
export class GoogleSsoDirective {

  constructor(private angularfireauth:AngularFireAuth) { }

  @HostListener("click")
  async onClick() {
    const creds = await this.angularfireauth.signInWithPopup(
      new GoogleAuthProvider()).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
