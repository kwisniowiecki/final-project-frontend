import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-adventure-list-item',
  templateUrl: './adventure-list-item.component.html',
  styleUrls: ['./adventure-list-item.component.css'],
})
export class AdventureListItemComponent implements OnInit {
  @Input() adventureRef: any;
  @Output() updated = new EventEmitter<any>();
  editAdventure: boolean = false;
  constructor(private service: BackpackService) {}

  ngOnInit(): void {}

  deleteAdventure = (adventure) => {
    let id: number = adventure.id;
    this.service.deleteAdventure(id).subscribe((response) => {
      this.updated.emit();
    });
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
      this.updated.emit();
    });
  };
}
