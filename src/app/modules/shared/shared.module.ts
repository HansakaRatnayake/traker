import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import { LoadingComponent } from './components/loading/loading.component';




@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinner
  ],
  exports:[LoadingComponent]
})
export class SharedModule { }
