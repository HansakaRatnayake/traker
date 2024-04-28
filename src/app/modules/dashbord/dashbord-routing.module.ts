import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import {DashbordContextComponent} from "./components/dashbord-context/dashbord-context.component";
import {DashbordDefaultComponent} from "./components/dashbord-default/dashbord-default.component";
import {ExpensesContexComponent} from "./components/expenses-contex/expenses-contex.component";
import {LoanContextComponent} from "./components/loan-context/loan-context.component";
import {SalaryContextComponent} from "./components/salary-context/salary-context.component";
import {NewExpencesComponent} from "./components/expenses-contex/items/new-expences/new-expences.component";
import {ViewExpencesComponent} from "./components/expenses-contex/items/view-expences/view-expences.component";

const routes: Routes = [
  { path: '', component: DashbordComponent,children:[
      {path:'', redirectTo:'/dashbord/process/home',pathMatch:"full"},
      {path:'process',component:DashbordContextComponent, children:[
          {path:'home',component:DashbordDefaultComponent},
          {path:'expenses',component:ExpensesContexComponent,children:[
              {path:'new',component:NewExpencesComponent},
              {path:'view',component:ViewExpencesComponent}
            ]},
          {path:'loan',component:LoanContextComponent},
          {path:'salary',component:SalaryContextComponent}
        ]}
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
