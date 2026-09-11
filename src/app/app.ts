import { Component, signal } from '@angular/core';
import { Board } from './components/board/board';

@Component({
  imports: [Board],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('saurav-jira-board');

}