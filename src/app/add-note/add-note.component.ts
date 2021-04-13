import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  noteTitle: string;

  noteDescription: string;

  constructor() { }

  ngOnInit(): void {
  }

  addNote():void
  {
    alert(this.noteTitle +"\n" + this.noteDescription);
    this.noteTitle = "";
    this.noteDescription = "";
  }

}
