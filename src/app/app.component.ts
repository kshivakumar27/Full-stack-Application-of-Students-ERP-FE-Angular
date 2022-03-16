import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from  '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudangularstu';
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;


  constructor(private  dialogRef : MatDialog){}



  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }



  addStu=new FormGroup({

    email: new FormControl('',Validators.required),
  
       
  
  });




  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data : {
        name : 'Are you sure  you want to delete this item'
      }
    });
  }

  


}

