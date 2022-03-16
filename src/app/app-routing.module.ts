import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CreateStudentComponent } from './create-student/create-student.component';
//import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: CreateStudentComponent },
  { path: 'update/:id', component: StudentUpdateComponent },
 // {path: 'hello-world', component: HelloWorldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




