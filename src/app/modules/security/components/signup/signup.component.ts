import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private angularFireAuth:AngularFireAuth) {
  }

  hide:boolean = true;

  signupform: FormGroup = new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  signup(){
    let email = this.signupform.get('email')?.value;
    let pwd = this.signupform.get('password')?.value;

    this.angularFireAuth.createUserWithEmailAndPassword(email,pwd).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err);
    })
  }


}
