import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatChipsModule} from '@angular/material/chips';
 
import { MatTabsModule } from '@angular/material/tabs'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CreateStudentComponent } from './create-student/create-student.component';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NamePipe } from './name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
//import { CustomComponent } from './custom.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';








import { LoginComponent } from './login/login.component';

//import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
//import { HttpInterceptorService } from './login/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
//import { HelloWorldComponent } from './hello-world/hello-world.component';



//import { CustomComponent } from './custom.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentListComponent,
    StudentUpdateComponent,
    PopUpComponent,
    NamePipe,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
  //  HelloWorldComponent
   // CustomComponent
    
  ],

  exports:[

   // CustomComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    DragDropModule,
    A11yModule,
    ScrollingModule,
   //FormGroup,
    CommonModule,
   //Validators,
   RouterModule,
    
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  

/*
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }

    
  ],

  bootstrap: [AppComponent]
})

*/

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }




