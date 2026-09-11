import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

// This interface stores card information.
export interface CardData {
  title: string;
  description: string;
  createdAt: Date;
}

@Component({
  selector: 'app-card',
  imports: [DatePipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  // Gets card data from the parent component.
  @Input() card!: CardData;

  // Sends a delete event to the parent component.
  @Output() delete = new EventEmitter<void>();

  // Sends drag start event to the parent.
@Output() dragStart = new EventEmitter<void>();

// Sends drag end event to the parent.
@Output() dragEnd = new EventEmitter<void>();
}