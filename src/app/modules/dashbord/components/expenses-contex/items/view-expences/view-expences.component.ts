import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Expens} from "../../../../../../entity/Expens";
import {ExpenseService} from "../../../../../../service/expense.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {UpdatePopupComponent} from "./popup-dialog/update-popup/update-popup.component";
import {UpdateDataParserService} from "../../../../../../service/update-data-parser.service";
import {Route, Router} from "@angular/router";
import {resolve} from "@angular/compiler-cli";
import {DialogService} from "../../../../../../service/dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DeleteConfirmComponent} from "./popup-dialog/delete-confirm/delete-confirm.component";
import {SnackbarService} from "../../../../../../service/snackbar.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-expences',
  templateUrl: './view-expences.component.html',
  styleUrl: './view-expences.component.scss'
})

export class ViewExpencesComponent implements  OnInit {

  expenseslist: Array<Expens>= [];
  displayedColumns: string[] = ['id', 'title', 'description', 'cost','controls'];
  dataSource = new MatTableDataSource<Expens>(this.expenseslist);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild('btnupdate') btnupdate! : ElementRef;

  constructor(private httpclient:HttpClient,private _snackBar: SnackbarService,private route:Router,private expenseService: ExpenseService,private dialog:DialogService, private updatedataemitter:UpdateDataParserService) {
  }

  expencesform: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl(),
    description: new FormControl(),
    cost: new FormControl()
  })

  list;
  ngOnInit() {
    this.getAllExpenses();
    this.httpclient.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      console.log(res);
    });
  }

  findExpence() {

    this.expenseService.findDataById(this.expencesform.get('id')?.value).subscribe((res) => {
        this.expencesform.patchValue({
          title: res.title,
          description: res.description,
          cost: res.cost
        })
      },
      (error) => {
        console.log(error);
      })

  }

   updateExpence(expobj:Expens){

    const dialogRef = this.dialog.openUpdateDialog();
     setTimeout(()=>{this.updatedataemitter.createEvent(expobj)},10);
    this.updatedataemitter.emitter.subscribe({
      next:(data) => {
        // dialogRef.afterClosed().subscribe((res)=>{
          console.log(this.dialog.state);
          console.log(data);
          if (this.dialog.state){
            this.dialog.state = false;
            data.setId(expobj.getId());
            this.expenseService.update(data)
              .then(()=>{
              const index = this.expenseslist.findIndex(expense => expense.getId() === expobj.getId());
              if (index !== -1) {
                this.expenseslist[index] = data;
                this.dataSource.data = this.expenseslist;
                this._snackBar.setSnackBar("Successfully whukhn",'Close');
              }
            }).catch(err=>{
              console.log(err)});
          }
        // })
      }
    })
  }

  getAllExpenses() {

    this.expenseService.findAll().subscribe({
        next: (res) => {
          res.forEach((doc) => {
            let exp = (new Expens(doc.get('title'), doc.get('description'), doc.get('cost'), doc.get('id')));
            this.expenseslist.push(exp);
          })
        },
        error: (error) => {
          console.log(error);
        },
        complete:()=>{this.dataSource.paginator = this.paginator;}
      }
    )
  }

  deleteExpence(id:string){
      this.dialog.openDeleteConfiremDialog('0','0').afterClosed().subscribe({
        next:(res)=>{
          if (res){
            this.expenseService.delete(id).then((responce)=>{

              this.expenseslist.splice(this.expenseslist.findIndex(expence=>expence.getId()===id),1);
              this.dataSource.data = this.expenseslist;
              this._snackBar.setSnackBar("Successfully deleted","Close");
            }).catch((error)=>{
              console.error(new Error(error));
            })
          }
        }
      })
  }


}
