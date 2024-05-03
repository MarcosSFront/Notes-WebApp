import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input()
  title!: string;
  @Input()
  body!: string;
  @Input() link!: number;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  onDelete() {
    this.deleteEvent.emit();
  }
}
