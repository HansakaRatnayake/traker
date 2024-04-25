import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../../../../service/expense.service";
import {Expens} from "../../../../../../entity/Expens";

@Component({
  selector: 'app-new-expences',
  templateUrl: './new-expences.component.html',
  styleUrl: './new-expences.component.scss'
})
export class NewExpencesComponent {

  constructor(private expenseService:ExpenseService) {
  }

  expencesform:FormGroup = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    cost:new FormControl('',Validators.required)
  })

  saveExpence(){
    console.log(this.expencesform);
    let exp = new Expens(this.expencesform.get('title')?.value,this.expencesform.get('description')?.value,this.expencesform.get('cost')?.value);


    this.expenseService.createData(exp).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    });
  }



}
