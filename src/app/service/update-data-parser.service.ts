import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Expens} from "../entity/Expens";

@Injectable({
  providedIn: 'root'
})
export class UpdateDataParserService {

  constructor() { }

  emitter: Subject<Expens>  =  new Subject<Expens>();

  createEvent(event:Expens){
    this.emitter.next(event);
  }
}
