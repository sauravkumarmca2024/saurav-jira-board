import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { List } from '../list/list';
import { Modal } from '../modal/modal';

// This interface describes the data of one card.
interface BoardCard {
  title: string;
  description: string;
  createdAt: Date;
}

// This interface describes the data of one list.
interface BoardList {
  title: string;
  cards: BoardCard[];
}


@Component({
  imports: [FormsModule, List,Modal],
  selector: 'app-board',
  styleUrl: './board.css',
  templateUrl: './board.html',
})
export class Board {

  // Key used to store the board data in browser localStorage.
  private readonly storageKey = 'saurav-jira-board';


  // Board lists.
  lists: BoardList[] = [
    {
      title: 'Todo',
      cards: []
    },
    {
      title: 'In Progress',
      cards: []
    },
    {
      title: 'Done',
      cards: []
    }
  ];


  // Drag and drop variables.
  private draggedCard: BoardCard | null = null;

  private draggedFromList: BoardList | null = null;

  private cardDropped = false;


  // Modal variables.

  // Controls whether modal is visible.
  showModal = false;

  // Modal heading.
  modalTitle = '';

  // Type of modal.
  modalType: 'list' | 'card' = 'list';

  // Input for list name or card title.
  inputTitle = '';

  // Input for card description.
  inputDescription = '';

  // List where the new card will be added.
  private selectedList: BoardList | null = null;


  // Constructor.
  constructor() {

    // Get saved board from localStorage.
    const savedBoard = localStorage.getItem(this.storageKey);

    // Load saved board if it exists.
    if (savedBoard) {
      this.lists = JSON.parse(savedBoard);
    }
  }


  // Save board data to localStorage.
  private saveBoard(): void {

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.lists)
    );
  }


  // Delete a list.
  deleteList(listToDelete: BoardList): void {

    this.lists = this.lists.filter(
      list => list !== listToDelete
    );

    this.saveBoard();
  }


  // Open modal for adding a list.
  addList(): void {

    this.modalType = 'list';

    this.modalTitle = 'Add New List';

    this.inputTitle = '';
    this.inputDescription = '';

    this.showModal = true;
  }


  // Open modal for adding a card.
  addCard(list: BoardList): void {

    // Remember selected list.
    this.selectedList = list;

    this.modalType = 'card';

    this.modalTitle = 'Add New Card';

    this.inputTitle = '';
    this.inputDescription = '';

    this.showModal = true;
  }


  // Close modal.
  closeModal(): void {

    this.showModal = false;

    this.inputTitle = '';

    this.inputDescription = '';

    this.selectedList = null;
  }


  // Save list or card from modal.
  saveModal(): void {

    // Remove extra spaces.
    const title = this.inputTitle.trim();


    // Title is required.
    if (!title) {

      window.alert('Please enter a title.');

      return;
    }


    // Add new list.
    if (this.modalType === 'list') {

      this.lists.push({
        title: title,
        cards: []
      });

      // Save to localStorage.
      this.saveBoard();

      // Close modal.
      this.closeModal();

      return;
    }


    // Add new card.
    if (this.modalType === 'card') {

      const description =
        this.inputDescription.trim();


      // Description is required.
      if (!description) {

        window.alert('Please enter a description.');

        return;
      }


      // Make sure list exists.
      if (!this.selectedList) {

        return;
      }


      // Create the new card.
      const newCard: BoardCard = {
        title: title,
        description: description,
        createdAt: new Date()
      };


      // Create a new cards array with the new card at the beginning.
      const updatedCards = [
        newCard,
        ...this.selectedList.cards
      ];


      // Replace the selected list with a new list object.
      this.lists = this.lists.map(list =>
        list === this.selectedList
          ? { ...list, cards: updatedCards }
          : list
      );


      // Save board.
      this.saveBoard();

      // Close modal.
      this.closeModal();
    }
  }


  // Delete a card.
  deleteCard(
    list: BoardList,
    cardToDelete: BoardCard
  ): void {

    list.cards = list.cards.filter(
      card => card !== cardToDelete
    );

    this.saveBoard();
  }


  // Start dragging a card.
  startDrag(
    list: BoardList,
    card: BoardCard
  ): void {

    // Store dragged card.
    this.draggedCard = card;

    // Store original list.
    this.draggedFromList = list;

    // Reset drop status.
    this.cardDropped = false;
  }


  // Allow a card to be dropped on the list.
  allowDrop(event: Event): void {

    event.preventDefault();
  }


  // Drop card into another list.
  dropCard(targetList: BoardList): void {

    // Make sure card and source list exist.
    if (
      !this.draggedCard ||
      !this.draggedFromList
    ) {

      return;
    }


    // If card is dropped in the same list.
    if (this.draggedFromList === targetList) {

      this.draggedCard = null;

      this.draggedFromList = null;

      this.cardDropped = false;

      return;
    }


    // Remove card from old list.
    this.draggedFromList.cards =
      this.draggedFromList.cards.filter(
        card => card !== this.draggedCard
      );


    // Add card to the top of target list.
    targetList.cards.unshift(
      this.draggedCard
    );


    // Keep newest cards first.
    targetList.cards.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );


    // Mark drop successful.
    this.cardDropped = true;


    // Save updated board.
    this.saveBoard();


    // Clear drag information.
    this.draggedCard = null;

    this.draggedFromList = null;
  }


  // Clear drag information.
  endDrag(): void {

    this.draggedCard = null;

    this.draggedFromList = null;

    this.cardDropped = false;
  }
}