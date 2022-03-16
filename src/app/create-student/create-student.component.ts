import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  hidden = false;

  
  constructor(private studentService: StudentService,
    private router: Router) { }

  




  ngOnInit() {
  }


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }



  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService
    .createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {

    this.submitted = true;
    this.save(); 

  }

  gotoList() {
    this.router.navigate(['/students']);
  }


addStu=new FormGroup({

  email: new FormControl('',Validators.required)
 
});
get email(){return this.addStu.get('email')}



}