import {Component, Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  UpdatePopupComponent
} from "../modules/dashbord/components/expenses-contex/items/view-expences/popup-dialog/update-popup/update-popup.component";
import {
  ConfirmPopupComponent
} from "../modules/dashbord/components/expenses-contex/items/view-expences/popup-dialog/update-confirm/confirm-popup.component";
import {
  DeleteConfirmComponent
} from "../modules/dashbord/components/expenses-contex/items/view-expences/popup-dialog/delete-confirm/delete-confirm.component";
import {
  AddConfirmComponent
} from "../modules/dashbord/components/expenses-contex/items/new-expences/popup-dialog/add-confirm/add-confirm.component";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public state:boolean = false;
  constructor(private dialog:MatDialog) { }


  openUpdateDialog(){
    return this.dialog.open(UpdatePopupComponent,{disableClose:true});
  }

  confirmDiolog(enterAnimationDuration:string, exitAnimationDuration:string,componentclass: ComponentType<any>){
    return this.dialog.open(componentclass,{
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration
    })
  }

  openAddConfiremDialog(enterAnimationDuration:string, exitAnimationDuration:string){
    return  this.confirmDiolog(enterAnimationDuration,exitAnimationDuration,AddConfirmComponent);
  }

  openUpdateConfiremDialog(enterAnimationDuration:string, exitAnimationDuration:string){
    return this.confirmDiolog(enterAnimationDuration,exitAnimationDuration,ConfirmPopupComponent);
  }

  openDeleteConfiremDialog(enterAnimationDuration:string, exitAnimationDuration:string){
    return this.confirmDiolog(enterAnimationDuration,exitAnimationDuration,DeleteConfirmComponent);
  }

  closeAllDialogs(): void {
    this.dialog.closeAll();

  }
}
