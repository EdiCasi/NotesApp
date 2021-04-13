import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  titleColor:string ="red"

  setTitle()
   { 
     this.color = this.noteContent;
   }

  title:string= "Add note";

  noteContent:string=  "";

  color:string = "green";


  constructor() { }

  ngOnInit(): void {
  }
}
