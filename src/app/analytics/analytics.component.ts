import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  // adventures: any = [];
  dailySubject: any = [];
  overallSubject: any = [];
  dailyIncomplete: any;
  totalIncomplete: any;
  dailyChartData: any = [];
  overallChartData: any = [];
  todaysDate: any;
  doughnutChartType = 'doughnut';
  dailyCompleteArray: any = [];
  completeArray: any = [];
  chartColors: any = [
    {
      backgroundColor: [
        '#3FC1D2',
        '#FFC957',
        '#891CD2',
        '#B3F274',
        '#3A3EA3',
        '#FF3823',
        '#FF2878',
      ],
    },
  ];

  constructor(private service: BackpackService) {}

  ngOnInit(): void {
    // this.getAdventures();
    this.getDate();
    this.getDailyComplete();
    this.getDailyIncomplete();
    this.getComplete();
    this.getIncomplete();
  }

  // getAdventures = () => {
  //   this.service.getAdventures().subscribe((response) => {
  //     this.adventures = response;
  //     console.log(this.adventures);
  //   });
  // };

  getDate = () => {
    this.todaysDate = this.service.getDate();
    console.log(this.todaysDate);
  };

  // getDailyComplete
  getDailyComplete = () => {
    this.service.getDailyComplete().subscribe((response) => {
      this.dailyCompleteArray = response;
      console.log(this.dailyCompleteArray);
      this.dailyCompleteArray.forEach((item) => {
        this.dailySubject.push(item.subject);
        this.dailyChartData.push(item.count);
      });
      console.log(this.dailyChartData, this.dailySubject);
    });
  };

  // getComplete
  getComplete = () => {
    this.service.getComplete().subscribe((response) => {
      this.completeArray = response;
      this.completeArray.forEach((item) => {
        this.overallSubject.push(item.subject);
        this.overallChartData.push(item.count);
      });
      console.log(this.overallChartData, this.overallSubject);
    });
  };

  // getDailyIncomplete
  getDailyIncomplete = () => {
    this.service.getDailyIncomplete().subscribe((response) => {
      this.dailyIncomplete = response[0].count;
      this.dailyChartData.push(this.dailyIncomplete);
      this.dailySubject.push('Incomplete');
    });
  };

  // getIncomplete
  getIncomplete = () => {
    this.service.getIncomplete().subscribe((response) => {
      this.totalIncomplete = response[0].total;
      this.overallChartData.push(this.totalIncomplete);
      this.overallSubject.push('Incomplete');
    });
  };
}
