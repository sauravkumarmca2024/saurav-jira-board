# Jira Board - Vetty Assignment

A simple Jira-style task management board built with Angular.

## Features

- Add and delete lists
- Add and delete cards
- Add card title, description and creation time
- Drag and drop cards between lists
- Newest cards appear first
- Duplicate card titles are allowed
- Data is saved using browser localStorage
- Cards dropped outside a list stay in their original list

## Tech Stack

- Angular
- TypeScript
- HTML
- CSS
- HTML5 Drag and Drop API
- Browser localStorage

## Project Structure

    src/app/
    ├── components/
    │   ├── board/       # Main board
    │   ├── list/        # List column
    │   ├── card/        # Individual card
    │   └── modal/       # Add list/card modal
    └── app.ts           # Root component

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI

### Installation

Clone the repository:

    git clone https://github.com/sauravkumarmca2024/saurav-jira-board.git
    cd saurav-jira-board

Install dependencies:

    npm install

Start the application:

    ng serve

Open the application in your browser:

    http://localhost:4200/

## Usage

### Adding a List

1. Click the ADD LIST button.
2. Enter the list name.
3. Click Add List.

### Adding a Card

1. Click the + button at the bottom of a list.
2. Enter the card title.
3. Enter the card description.
4. Click Add Card.

### Moving Cards

1. Drag a card from one list.
2. Move it to another list.
3. Drop it on the target list.
4. The card will be moved to the target list.
5. Cards are arranged with the newest cards first.

If a card is dropped outside a valid list, it stays in its original list.

### Deleting

- Click the X button on a card to delete it.
- Click the X button on a list to delete the list and its cards.

## Key Implementation Details

### Card Ordering

Each card stores its creation time. New cards are shown first, so cards are arranged in reverse chronological order.

When a card is moved to another list, the target list is also sorted by creation time.

### Duplicate Cards

Duplicate card titles are allowed. Multiple cards with the same title can exist in the same list or in different lists.

### Drag and Drop

The application uses the native HTML5 Drag and Drop API.

Cards use the draggable attribute and handle drag and drop events to move cards between lists.

### Data Persistence

The board data is stored in the browser's localStorage.

This allows lists and cards to remain available after refreshing the page or opening the application in another browser tab.

No backend or database is required.

## Build

To create a production build:

    ng build

The generated build files are stored in the dist/ directory.

## Author

Saurav Kumar