import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/pages/notes-list/notes-list.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { InputTextModule } from 'primeng/inputtext';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    LayoutComponent,
    NoteCardComponent,
    NoteDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,

    //PrimeNg
    InputTextModule,
    CardModule,
    ButtonModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
