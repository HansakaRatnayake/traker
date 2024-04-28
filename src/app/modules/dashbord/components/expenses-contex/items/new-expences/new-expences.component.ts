import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../../../../service/expense.service";
import {Expens} from "../../../../../../entity/Expens";
import {DialogService} from "../../../../../../service/dialog.service";
import {SnackbarService} from "../../../../../../service/snackbar.service";

@Component({
  selector: 'app-new-expences',
  templateUrl: './new-expences.component.html',
  styleUrl: './new-expences.component.scss'
})
export class NewExpencesComponent {

  constructor(private expenseService:ExpenseService,private dialog:DialogService,private snackbar:SnackbarService) {
  }

  expencesform:FormGroup = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    cost:new FormControl('',Validators.required)
  })

  saveExpence(){
    this.dialog.openAddConfiremDialog("0","0").afterClosed().subscribe({
      next:(res)=>{
        if (res){
          let exp = new Expens(this.expencesform.get('title')?.value,this.expencesform.get('description')?.value,this.expencesform.get('cost')?.value);


          this.expenseService.createData(exp).then((res)=>{
            this.snackbar.setSnackBar("Successfully added","Close");
          }).catch((err)=>{
            console.log(err)
          });
        }
      },
      error:(err)=>{
        console.error(new Error(err));
        this.snackbar.setSnackBar("Faild!Something went wrong.","Close")}
    })

  }



}
