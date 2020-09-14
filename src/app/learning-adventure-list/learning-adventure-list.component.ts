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

  ngOnInit(): void {}
}

// not sure if the service should be here
