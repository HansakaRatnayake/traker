import {
  Component, Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UpdateDataParserService} from "../../../../../../../../service/update-data-parser.service";
import {Expens} from "../../../../../../../../entity/Expens";
import {Subject, Subscription, take, takeUntil} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmPopupComponent} from "../update-confirm/confirm-popup.component";
import {DialogService} from "../../../../../../../../service/dialog.service";

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrl: './update-popup.component.scss'
})
export class UpdatePopupComponent implements OnInit, OnDestroy {

  emitterSubscription: Subscription;
  private destroy$: Subject<void> = new Subject<void>();
  btnupdatstatus :boolean =true;

  expencesupdateform: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required])
  })

  constructor(private emitter: UpdateDataParserService,private dialog: DialogService) {}

  ngOnInit() {

    console.log('created');
    this.emitterSubscription = this.emitter.emitter.pipe(takeUntil(this.destroy$)).subscribe((data) => {

      this.expencesupdateform.patchValue({
        title: data.getTitle(),
        description: data.getDiscription(),
        cost: data.getCost()
      })
    })
  }

  ngOnDestroy() {
    console.log('destroid');

    this.destroy$.next();
    this.destroy$.complete();
  }



  parseDataToView() {
    this.dialog.state = true;

    this.emitter.createEvent(new Expens(
      this.expencesupdateform.get('title')?.value,
      this.expencesupdateform.get('description')?.value,
      this.expencesupdateform.get('cost')?.value));


    console.log(this.dialog.state);
    this.dialog.closeAllDialogs();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.openUpdateConfiremDialog(enterAnimationDuration,exitAnimationDuration).afterClosed().subscribe((res)=>{
      if (res){this.parseDataToView();}
    });
  }


}
