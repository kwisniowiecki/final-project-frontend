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
  labels: string[] = [
    'Math',
    'Misc',
    'Reading',
    'Science',
    'Social Studies',
    'Writing',
    'Incomplete',
  ];
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
  }

  // getDailyIncomplete
  getDailyIncomplete = () => {
    this.service.getDailyIncomplete().subscribe((response) => {
      this.dailyIncomplete = response[0].count;
      console.log(response);
    });
  };

  // getIncomplete
  getIncomplete = () => {
    this.service.getIncomplete().subscribe((response) => {
      this.totalIncomplete = response[0].total;
      this.overallChartData.push(this.totalIncomplete);
    });
  };

  getDate = () => {
    this.todaysDate = this.service.getDate();
    console.log(this.todaysDate);
  };

  getDailyComplete = () => {
    this.service.getDailyComplete().subscribe((response) => {
      console.log(response);
      // this.getDailyIncomplete();
      this.dailyCompleteArray = response;
      this.labels.forEach((label) => {
        let found = this.dailyCompleteArray.find((item) => {
          return item.subject === label;
        });
        if (found) {
          this.dailyChartData.push(found.count);
        } else {
          this.dailyChartData.push(0);
        }
      });
      this.dailyChartData[6] = this.dailyIncomplete;
    });
  };

  // getComplete
  getComplete = () => {
    this.service.getComplete().subscribe((response) => {
      this.completeArray = response;
      this.completeArray.forEach((item) => {
        this.overallChartData.push(item.count);
      });
      this.getIncomplete();
    });
  };
}
