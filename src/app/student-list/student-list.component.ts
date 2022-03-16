import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from "rxjs";
import { StudentService } from "../student.service";
import { Student} from "../student";

import { Router } from '@angular/router';
import { DialogService } from '../shared/dialog.service';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})



export class StudentListComponent implements OnInit {
 // students: Observable<Student[]>;
  reverse: any;
  students:any;
  order: any;
  newarr: any;
  //booleanValue: any = false;
  data: boolean;
  isDesc: any;
  dialogRef: any;
  serverService: any;
  dataSubject: any;
  notifier: any;
  readonly DataState ;
  readonly Status = status;
  booleanValue: boolean;
  constructor(private studentService: StudentService,

    
    private dialog: MatDialog,
   // private notificationService: NotificationService,
    private dialogService: DialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }




  reloadData() {
    this.students = this.studentService.getStudentsList();
  }

  deleteStudent(id: number) {
    if(window.confirm('Are sure you want to delete this item ?'))
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
  
  updateStudent(id: number){
    this.router.navigate(['update', id]);
  }





/*

  sortFunction(colName, boolean) {
    if (boolean == true){
        this.data.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
    else{
        this.data.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
}

*/




  
  sortData() {
    if(this.order) {
      let newarr = this.students.sort((a,b)=> a.id - b.id)
      this .students = newarr
    }
    else {
    let newarr = this.students.sort((a,b)=> b.id - a.id)
    this .students = this.newarr
    }
    this.order=!this.order;
  }





  






  filterServers(status): void {
    this.students = this.serverService.filter$(status, this.dataSubject.value)
      .pipe(
        map(response => {
          this.notifier.onDefault(response);
          return { dataState: this.DataState.LOADED_STATE, appData: response };
        }),
        startWith({ dataState: this.DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError((error: string) => {
          this.notifier.onError(error);
          return of({ dataState: this.DataState.ERROR_STATE, error });
        })
      );
  }












  sortPercentage() {
    if(this.order) {
      let newarr = this.students.sort((a,b)=> a.percentage - b.percentage)
      this .students = newarr
    }
    else {
    let newarr = this.students.sort((a,b)=> b.percentage - a.percentage)
    this .students = this.newarr
    }
    this.order=!this.order;
  }


  sortName(property){
    this.isDesc=!this.isDesc

let direction=this.isDesc ? 1:-1;

this.students.sort(function (a,b){

  if(a[property]<b[property]){
    return -1*direction;
  }
  else if(a[property]<b[property]){
    return 1*direction;
  }
  else
  return 0;

  
});

  }


}
  

