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

  addToToday = (id, body) => {
    // edit the date to today from service
    this.service.changeAdventureDateToToday(id, body).subscribe((response) => {
      // run adventuresbackpack to repopulate the array
      this.adventuresBackpack();
    });
  };
}
