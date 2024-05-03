import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Models/interface/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();


  constructor(private notesService: NotesService) { }

  ngOnInit(){
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notes;
  }

  deleteNote(id: number){
    this.notesService.delete(id);
  }

  filter(query: string){
    query = query.toLowerCase().trim();
    let allResults: Note[] = new Array<Note>();
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);
    terms.forEach(term =>{
      let results: Note[] = this.relevantNotes(term);
      allResults= [...allResults, ...results]
    });
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;
  }

  removeDuplicates(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults)
  }

  relevantNotes(query: string) : Array<Note>{
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if (note.title && note.title.toLowerCase().includes(query)){
        return true;
      }
      if (note.body && note.body.toLowerCase().includes(query)){

      }
      return false;
  })
  return relevantNotes;
}
}
