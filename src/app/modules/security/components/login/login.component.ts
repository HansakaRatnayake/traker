import {Component, Directive, HostListener} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import { GoogleAuthProvider } from "@firebase/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(private angularFireAuth : AngularFireAuth, private router:Router) {
  }

  hide:boolean = true;

  loginform: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })


  login(){
    console.log(this.loginform.get('email')?.value);
    console.log(this.loginform.get('password')?.value);
  }


    loginWithGoogle(){
       this.angularFireAuth.signInWithPopup(new GoogleAuthProvider()
       )
      .then((res)=>{
        console.log(res);
        this.router.navigateByUrl("/dashbord").then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  loginWithEmail(){
    let email:string = this.loginform.get('email')?.value;
    let pwd :string = this.loginform.get('password')?.value;

    this.angularFireAuth.signInWithEmailAndPassword(email,pwd).then((res)=>{
      console.log(res);
      this.router.navigateByUrl("/dashbord").then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })

    })
      .catch((err)=>{
        console.log(err);
      })
  }


}
