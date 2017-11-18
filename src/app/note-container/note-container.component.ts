import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.services';

@Component({
    moduleId: module.id,
    selector: 'note-container',
    templateUrl: 'note-container.component.html',
    styleUrls: ['note-container.component.scss']
})
export class NoteContainerComponent implements OnInit {
    notes: any;
    constructor(
      private notesService: NotesService
    ) { }

    ngOnInit() {

      // this.notesService.updateNote$.subscribe(
      //   (notes: any) => {
      //     console.log('updated');
      //   }
      // )

      this.notesService.updateNote$.subscribe(
        (notes: any) => {
          console.log('update value');
          console.log(notes);
          this.notes = notes;
        }
      )
    }




}
