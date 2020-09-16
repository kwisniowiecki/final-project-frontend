import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BackpackService } from '../backpack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
})
export class KanbanComponent implements OnInit {
  title = 'v7-dragdrop';
  todaysAdventures: any;
  doingAdventures: number[] = [];
  doneAdventures: number[] = [];
  constructor(private service: BackpackService, private router: Router) {
    // for (let i = 0; i < 11; i++) {
    //   this.numbers.push(i);
    // }
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
    if (
      this.todaysAdventures.length === 0 &&
      this.doingAdventures.length === 0
    ) {
      this.updateCompleted(this.doneAdventures);
      this.router.navigate(['congratulations']);
    }
  }
  ngOnInit(): void {
    this.getAdventures();
  }

  getAdventures = () => {
    this.service.getAdventuresToGo().subscribe((response) => {
      this.todaysAdventures = response;
      console.log(response);
    });
  };

  updateCompleted = (array) => {
    array.forEach((item) => {
      let id = item.id;
      this.service.updateCompleted(id, item).subscribe((response) => {});
    });
  };
}
