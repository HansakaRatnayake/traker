import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {LoadingService} from "../../../../service/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor(protected loadingService:LoadingService) {
  }
  color:ThemePalette = 'primary';
  mode:ProgressSpinnerMode = 'indeterminate';
  value = 50;

}
