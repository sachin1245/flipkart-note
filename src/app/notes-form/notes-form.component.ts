import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NotesService} from '../services/notes.services';
import {Subject} from 'rxjs/Subject';


@Component({
  moduleId: module.id,
  selector: 'notes-form',
  templateUrl: 'notes-form.component.html',
  styleUrls: ['notes-form.component.scss'],
})
export class NotesFormComponent implements OnInit {

  notesForm: any;
  loadTemplate: boolean;
  @Input() index: number;
  @Input() small: boolean;
  constructor(private fb: FormBuilder,
              private notesService: NotesService) {
  }

  ngOnInit() {
    this.buildNotesForm();
  }

  buildNotesForm() {
    this.notesForm = this.fb.group({
      'note': [null, Validators.required]
    });

    this.loadTemplate = true;
  }

  submitNote(data: any){
    console.log(data);

    this.notesService.addNote(data.note, this.index);

    this.notesForm.reset()
    this.notesService.noteAdded.next();
  }
}
