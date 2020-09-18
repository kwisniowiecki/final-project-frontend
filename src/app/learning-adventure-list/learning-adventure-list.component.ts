import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-learning-adventure-list',
  templateUrl: './learning-adventure-list.component.html',
  styleUrls: ['./learning-adventure-list.component.css'],
})
export class LearningAdventureListComponent implements OnInit {
  constructor(private service: BackpackService) {}

  d: any;
  adventures: any = [];

  ngOnInit(): void {
    this.newDate();
    this.adventuresToday();
  }

  newDate = (): any => {
    this.d = this.service.getDate();
    console.log(this.d);
  };

  adventuresToday = () => {
    this.service.getAdventuresToGo().subscribe((response) => {
      this.adventures = response;
      console.log(this.adventures);
    });
  };

  addAdventure = (form: NgForm) => {
    let adventure: any = {
      date: `${this.d}`,
      subject: form.value.subject,
      title: form.value.title,
      description: form.value.description,
      completed: false,
    };
    console.log(adventure);
    this.service.addAdventure(adventure).subscribe((response) => {
      this.adventuresToday();
    });
    form.reset();
  };
}

// not sure if the service should be here
