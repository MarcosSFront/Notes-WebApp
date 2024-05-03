import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './components/pages/notes-list/notes-list.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', component: NotesListComponent},
    { path:'details', component: NoteDetailsComponent},
    { path: ':id', component: NoteDetailsComponent},


  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
