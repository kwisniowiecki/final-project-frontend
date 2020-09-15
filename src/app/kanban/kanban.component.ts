import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
})
export class KanbanComponent implements OnInit {
  title = 'v7-dragdrop';
  numbers: number[] = [];
  otherNumbers: number[] = [];
  doneNumbers: number[] = [];
  constructor() {
    for (let i = 0; i < 11; i++) {
      this.numbers.push(i);
    }
  }
  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnInit(): void {}
}
