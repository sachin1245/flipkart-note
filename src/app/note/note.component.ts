import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {NotesService} from '../services/notes.services';
import {Subject} from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'note',
    templateUrl: 'note.component.html',
    styleUrls: ['note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {

    @Input() note: any;
    @Input() index: number;
    addNoteflag: boolean;
    constructor(
      private notesService: NotesService,
    ) { }

    ngOnInit() {
      this.notesService.noteAdded$.subscribe(
        () => {
          this.addNoteflag = false;
        }
      )
    }

    ngOnChanges() {
    }

    deleteNote(note: any){
      console.log('here');
      this.notesService.deleteNote(note);
    }

    addNote(index: number){
      this.notesService.index = index;
      this.addNoteflag = true;
    }


}
