import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'security', pathMatch: 'full' },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'dashbord', loadChildren: () => import('./modules/dashbord/dashbord.module').then(m => m.DashbordModule) },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
