import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Expens} from "../entity/Expens";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private firestore:AngularFirestore) { }

  createData(expence:Expens) : Promise<any>{
    let id = this.firestore.createId();
    return this.firestore.doc(`expenses/${id}`).set({...expence,id});
  }

  findDataById(id:string):Observable<any>{
   return  this.firestore.doc(`expenses/${id}`).valueChanges({idField:'id'});
  }

  findAll(){
    return this.firestore.collection('expenses').get();
  }

  update(data:Expens){
    return this.firestore.doc(`expenses/${data.getId()}`).update({...data});
  }

  delete(id:string){
    console.log(id);
    return this.firestore.doc(`expenses/${id}`).delete();
  }
}
