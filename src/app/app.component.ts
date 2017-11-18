import { Component } from '@angular/core';
import {NotesService} from './services/notes.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private notesService: NotesService,
  ){

  }
  search(value: any){
    if(value){
      this.notesService.search(value);
    }else{
      this.notesService.showAll();
    }
  }
}


