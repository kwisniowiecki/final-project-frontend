import { Component, OnInit, ViewChild } from '@angular/core';
import { BackpackService } from '../backpack.service';
import {
  bounceAnimation,
  heartBeatAnimation,
  heartBeatOnEnterAnimation,
} from 'angular-animations';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import ConfettiGenerator from 'confetti-js';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css'],
  animations: [
    bounceAnimation(),
    heartBeatAnimation(),
    heartBeatOnEnterAnimation(),
  ],
})
export class CongratulationsComponent implements OnInit {
  @ViewChild('mycanvas', { static: false }) myCanvas: ElementRef;
  public confetti: ConfettiGenerator;
  animationState = false;
  constructor(private service: BackpackService, private router: Router) {}

  ngOnInit(): void {
    this.animate();
  }

  animate() {
    this.animationState = !this.animationState;
  }

  ngAfterViewInit() {
    const confettiSettings = { target: this.myCanvas.nativeElement }; // Passing the canvas element itself instead of id
    this.confetti = new ConfettiGenerator(confettiSettings);

    console.log('Dropping confetti');
    this.confetti.render();
    setTimeout(() => {
      this.confetti.clear();
    }, 10000);
    // Stop confetti after 5 seconds
  }
}
