import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-backlog-backpack',
  templateUrl: './backlog-backpack.component.html',
  styleUrls: ['./backlog-backpack.component.css'],
})
export class BacklogBackpackComponent implements OnInit {
  adventures: any = [];
  constructor(private service: BackpackService) {}

  ngOnInit(): void {
    this.adventuresBackpack();
  }

  adventuresBackpack = () => {
    this.service.getBackpack().subscribe((response) => {
      this.adventures = response;
      console.log(this.adventures);
    });
  };

  deleteAdventure = (adventure) => {
    let id: number = adventure.id;
    this.service.deleteAdventure(id).subscribe((response) => {
      this.adventuresBackpack();
    });
  };
}
