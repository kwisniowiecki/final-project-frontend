import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-card',
  templateUrl: './adventure-card.component.html',
  styleUrls: ['./adventure-card.component.css'],
})
export class AdventureCardComponent implements OnInit {
  @Input() adventureRef: any;
  editAdventure: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  setEditAdventure = () => {
    this.editAdventure = !this.editAdventure;
    console.log(this.editAdventure);
  };
}
