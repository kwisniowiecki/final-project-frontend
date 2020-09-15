import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  constructor(private service: BackpackService) {}

  ngOnInit(): void {}
}
