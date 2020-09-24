import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BackpackService } from '../backpack.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
})
export class KanbanComponent implements OnInit {
  todaysAdventures: any = [];
  doingAdventures: any = [];
  doneAdventures: any = [];
  constructor(private service: BackpackService, private router: Router) {}

  d: any;

  ngOnInit(): void {
    this.newDate();
    this.getAdventures();
  }

  newDate = (): any => {
    this.d = this.service.getDate();
    console.log(this.d);
  };

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

    // console.log(event.container);
    // console.log(event.container.element.nativeElement.className);
    let compass: string = event.container.element.nativeElement.className;
    if (compass.includes('item-2')) {
      this.changeAdventureToDoing(event.container.data[event.currentIndex]);
      // this.router.navigate(['timer']);
    } else if (compass.includes('item-3')) {
      this.changeAdventureToFinish(event.container.data[event.currentIndex]);
    } else {
      this.changeAdventureToStart(event.container.data[event.currentIndex]);
    }

    if (
      this.todaysAdventures.length === 0 &&
      this.doingAdventures.length === 0
    ) {
      this.updateCompleted(this.doneAdventures);
      this.router.navigate(['congratulations']);
    }
  }

  getAdventures = () => {
    this.service.getAdventuresToGo().subscribe((response) => {
      let returnArray: any = response;
      returnArray.forEach((adventure) => {
        if (adventure.location === 'doing') {
          this.doingAdventures.push(adventure);
        } else if (adventure.location === 'finish') {
          this.doneAdventures.push(adventure);
        } else {
          this.todaysAdventures.push(adventure);
        }
      });
      console.log(response);
    });
  };

  updateCompleted = (array) => {
    array.forEach((item) => {
      let id = item.id;
      this.service.updateCompleted(id, item).subscribe((response) => {});
    });
  };

  changeAdventureToStart = (adventure): any => {
    console.log(adventure);
    let id = adventure.id;
    this.service
      .changeAdventureToStart(id, adventure)
      .subscribe((response) => {});
  };

  changeAdventureToDoing = (adventure): any => {
    console.log(adventure);
    let id = adventure.id;
    this.service
      .changeAdventureToDoing(id, adventure)
      .subscribe((response) => {});
  };

  changeAdventureToFinish = (adventure): any => {
    console.log(adventure);
    let id = adventure.id;
    this.service
      .changeAdventureToFinish(id, adventure)
      .subscribe((response) => {});
  };

  addQuickAdventure = () => {
    let adventure: any = {
      date: `${this.d}`,
      subject: 'Misc',
      title: 'Press Edit',
      description: "What's your Adventure? ",
      completed: false,
      timercounter: 0,
    };
    console.log(adventure);
    this.service.addAdventure(adventure).subscribe((response) => {
      this.todaysAdventures = [];
      this.doingAdventures = [];
      this.doneAdventures = [];
      this.getAdventures();
      console.log(response);
    });
  };

  // updateKanban = () => {
  //   this.todaysAdventures = this.todaysAdventures;
  // };
}
