import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card/card';

// This interface describes one card.
interface ListCard {
  title: string;
  description: string;
  createdAt: Date;
}

// This interface describes one list.
interface ListData {
  title: string;
  cards: ListCard[];
}

// This component represents one board list.
@Component({
  selector: 'app-list',
  imports: [Card],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  // Gets one list from the parent Board.
  @Input() list!: ListData;

  // Tells the parent when the list should be deleted.
  @Output() delete = new EventEmitter<void>();

  // Tells the parent which card should be deleted.
  @Output() cardDelete = new EventEmitter<any>();

  // Sends dragover event to the parent.
  @Output() allowDrop = new EventEmitter<Event>();

  // Tells the parent that a card was dropped.
  @Output() drop = new EventEmitter<void>();

  // Tells the parent to open Add Card.
  @Output() addCard = new EventEmitter<void>();

// Tells the parent which card started dragging.
@Output() dragStart = new EventEmitter<any>();

// Tells the parent that dragging has ended.
@Output() dragEnd = new EventEmitter<void>();
}