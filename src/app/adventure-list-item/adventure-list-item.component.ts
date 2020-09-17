import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-adventure-list-item',
  templateUrl: './adventure-list-item.component.html',
  styleUrls: ['./adventure-list-item.component.css'],
})
export class AdventureListItemComponent implements OnInit {
  @Input() adventureRef: any;
  constructor(private service: BackpackService) {}

  ngOnInit(): void {}
}
