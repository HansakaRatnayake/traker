import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public loding:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


}
