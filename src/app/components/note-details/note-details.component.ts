import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/Models/interface/note';
import { NotesService } from './../../services/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit{

  note:Note = {'title':'', 'body':''};
  noteId!: number;
  new!: boolean;
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params.id){
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }
  onSubmit(form: NgForm){

    if(this.new){
      this.notesService.add(form.value);

    } else {
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');

  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
