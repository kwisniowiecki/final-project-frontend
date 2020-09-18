import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-adventure-card',
  templateUrl: './adventure-card.component.html',
  styleUrls: ['./adventure-card.component.css'],
})
export class AdventureCardComponent implements OnInit {
  @Input() adventureRef: any;
  editAdventure: boolean = false;
  showTimer: boolean = false;
  constructor(private service: BackpackService, private router: Router) {}

  ngOnInit(): void {}

  showTimerFunction = () => {
    this.showTimer = !this.showTimer;
  };

  setEditAdventure = () => {
    this.editAdventure = !this.editAdventure;
    console.log(this.editAdventure);
  };

  updateAdventureCard = (form: NgForm) => {
    console.log(this.adventureRef);
    this.setEditAdventure();
    let id = this.adventureRef.id;
    console.log(id);
    this.service.editAdventure(id, form.value).subscribe((response) => {
      let update: any = response;
      this.adventureRef.subject = update.subject;
      this.adventureRef.title = update.title;
      this.adventureRef.description = update.description;
      console.log(this.adventureRef);
    });
  };

  routeTimer = (adventure) => {
    this.service.setCurrentAdventure(adventure);
    this.router.navigate(['timer']);
  };
}
