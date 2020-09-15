import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css'],
})
export class CongratulationsComponent implements OnInit {
  constructor(private service: BackpackService) {}

  ngOnInit(): void {}
}
