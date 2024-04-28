import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { DashbordContextComponent } from './components/dashbord-context/dashbord-context.component';
import { DashbordHeaderComponent } from './components/dashbord-header/dashbord-header.component';
import { DashbordDefaultComponent } from './components/dashbord-default/dashbord-default.component';
import { ExpensesContexComponent } from './components/expenses-contex/expenses-contex.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';
import { SalaryContextComponent } from './components/salary-context/salary-context.component';
import {MatButton} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { NewExpencesComponent } from './components/expenses-contex/items/new-expences/new-expences.component';
import { ViewExpencesComponent } from './components/expenses-contex/items/view-expences/view-expences.component';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import { UpdatePopupComponent } from './components/expenses-contex/items/view-expences/popup-dialog/update-popup/update-popup.component';
import { ConfirmPopupComponent } from './components/expenses-contex/items/view-expences/popup-dialog/update-confirm/confirm-popup.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DeleteConfirmComponent } from './components/expenses-contex/items/view-expences/popup-dialog/delete-confirm/delete-confirm.component';
import { AddConfirmComponent } from './components/expenses-contex/items/new-expences/popup-dialog/add-confirm/add-confirm.component';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [

    DashbordComponent,
    DashbordContextComponent,
    DashbordHeaderComponent,
    DashbordDefaultComponent,
    ExpensesContexComponent,
    LoanContextComponent,
    SalaryContextComponent,
    NewExpencesComponent,
    ViewExpencesComponent,
    UpdatePopupComponent,
    ConfirmPopupComponent,
    DeleteConfirmComponent,
    AddConfirmComponent,

  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    MatButton,
    ReactiveFormsModule,
    MatPaginator,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule,
    HttpClientModule
  ]
})
export class DashbordModule { }
