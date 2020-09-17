import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-adventure-card',
  templateUrl: './adventure-card.component.html',
  styleUrls: ['./adventure-card.component.css'],
})
export class AdventureCardComponent implements OnInit {
  @Input() adventureRef: any;
  editAdventure: boolean = false;
  constructor(private service: BackpackService) {}

  ngOnInit(): void {}

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
}
