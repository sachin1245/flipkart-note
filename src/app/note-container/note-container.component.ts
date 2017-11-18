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

     this.notes = this.notesService.notes;

      this.notesService.updateNote$.subscribe(
        (notes: any) => {
          this.notes = notes;
        }
      )
    }




}
