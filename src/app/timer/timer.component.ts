import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';

const timerMessages = {
  start: 'Let the countdown begin!!',
  running: 'Greatness is within sight!!',
  stop: 'Never quit keep going!!',
};

enum Status {
  STOP = 'STOP',
  PAUSE = 'PAUSE',
  RUNNING = 'RUNNING',
}

const TOTAL_SECONDS = 15 * 60;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  message: string = '';
  strMinutes: string = '';
  strSeconds: string = '';
  totalSeconds: number = TOTAL_SECONDS;
  timerId: number = null;
  status = Status.STOP;

  currentAdventure: any;

  constructor(private service: BackpackService) {}

  ngOnInit() {
    this.message = timerMessages.start;
    this.displayTime();
    this.currentAdventure = this.service.getCurrentAdventure();
    console.log(this.currentAdventure);
  }

  countdown() {
    this.timerId = setInterval(
      function () {
        if (this.totalSeconds <= 0) {
          clearInterval(this.timerId);
          this.setStatus(Status.STOP);
          this.displayTime();
        }
        this.displayTime();
        this.totalSeconds -= 1;
      }.bind(this),
      1000
    );
  }

  displayTime() {
    const seconds = this.totalSeconds % 60;
    const minutes = Math.floor((this.totalSeconds - seconds) / 60);

    this.strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    this.strSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  startTimer() {
    this.setStatus(Status.RUNNING);
    this.countdown();
  }

  pauseTimer() {
    clearInterval(this.timerId);
    this.setStatus(Status.PAUSE);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.setStatus(Status.STOP);
    this.displayTime();
  }

  setStatus(newStatus: Status) {
    this.status = newStatus;
    switch (newStatus) {
      case Status.STOP:
        this.message = timerMessages.start;
        this.totalSeconds = TOTAL_SECONDS;
        break;
      case Status.RUNNING:
        this.message = timerMessages.running;
        break;
      case Status.PAUSE:
        this.message = timerMessages.stop;
        break;
      default:
        break;
    }
  }
}
