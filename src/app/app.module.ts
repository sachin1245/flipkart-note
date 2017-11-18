import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NotesFormComponent} from './notes-form/notes-form.component';
import {NoteComponent} from './note/note.component';
import {NotesService} from './services/notes.services';
import {NoteContainerComponent} from './note-container/note-container.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesFormComponent,
    NoteComponent,
    NoteContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
