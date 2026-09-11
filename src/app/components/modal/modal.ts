import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  // Modal heading.
  @Input() modalTitle = '';

  // Tells whether we are adding a list or a card.
  @Input() modalType: 'list' | 'card' = 'list';

  // List name or card title.
  @Input() inputTitle = '';

  // Card description.
  @Input() inputDescription = '';

  // Sends the updated title to Board.
  @Output() inputTitleChange = new EventEmitter<string>();

  // Sends the updated description to Board.
  @Output() inputDescriptionChange = new EventEmitter<string>();

  // Tells Board to close the modal.
  @Output() close = new EventEmitter<void>();

  // Tells Board to save the data.
  @Output() save = new EventEmitter<void>();
}