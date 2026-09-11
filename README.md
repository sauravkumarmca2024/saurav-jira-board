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

```text
src/app/
├── components/
│   ├── board/       # Main board
│   ├── list/        # List column
│   ├── card/        # Individual card
│   └── modal/       # Add list/card modal
└── app.ts           # Root component
Getting Started
Prerequisites
Node.js
npm
Angular CLI
Installation

Clone the repository:

git clone https://github.com/sauravkumarmca2024/saurav-jira-board.git
cd saurav-jira-board

Install dependencies:

npm install

Start the application:

ng serve

Open the application at:

http://localhost:4200/
Build

To create a production build:

ng build
Data Storage

The application uses browser localStorage to save lists and cards. No backend or database is required.

Author

Saurav Kumar