import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import * as _ from 'lodash';
@Injectable()
export class NotesService {

  notes: any = [];
  updateNote = new Subject();
  updateNote$ = this.updateNote.asObservable();
  noteAdded = new Subject();
  noteAdded$ = this.noteAdded.asObservable();
  index: number;
  constructor() {
    this.notes =  JSON.parse(localStorage.getItem('notes')) || [];
    this.updateNote.next(this.notes);
  }


  addNote(note: any, index: number){


    if(this.index > -1){
      this.notes[index].notes = this.notes[index].notes || [];
      this.notes[index].notes.push(note);
    }else{
      let newNote: any = {};
      newNote['note'] = note;
      this.notes.push(newNote);
    }

    this.updateNote.next(this.notes);

    localStorage.setItem('notes', JSON.stringify(this.notes));

  }

  deleteNote(note: any){
    let notePosition = this.notes.indexOf(note);
    if(notePosition > -1){
      this.notes.splice(notePosition, 1);
    }

    this.updateNote.next(this.notes);

    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  search(value){
   let  notes =_.filter(this.notes, function(note: any) {
     return note.note.indexOf(value) > -1;
   });
   if(notes){
     this.updateNote.next(notes);
   }
  }


  showAll(){
    this.updateNote.next(this.notes);
  }

}
