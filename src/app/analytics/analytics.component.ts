import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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

  //_____________________________________________________line chart

  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 25, 15, 34], label: 'Math' },
    { data: [10, 12, 30, 54, 65, 23, 60, 45, 30, 20], label: 'Misc' },
    { data: [47, 65, 58, 98, 13, 46, 22, 15, 0, 30], label: 'Reading' },
    { data: [5, 9, 10, 0, 6, 5, 20, 30, 200, 20], label: 'Science' },
    { data: [40, 55, 56, 81, 80, 59, 68, 75, 90, 0], label: 'Social Studies' },
    { data: [1, 2, 3, 5, 8, 13, 21, 15, 0, 15], label: 'Writing' },
  ];
  lineChartLabels: Label[] = [
    'date1',
    'date2',
    'date3',
    'date4',
    'date5',
    'date6',
    'date7',
    'date6',
    'date9',
    'today',
  ];
  lineChartOptions: ChartOptions | { annotation: any } = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: '#3FC1D2',
      backgroundColor: 'rgba(63, 193, 210,0.3)',
    },
    {
      borderColor: '#FFC957',
      backgroundColor: 'rgba(255, 201, 87,0.3)',
    },
    {
      borderColor: '#891CD2',
      backgroundColor: 'rgba(137, 28, 210,0.3)',
    },
    {
      borderColor: '#B3F274',
      backgroundColor: 'rgba(179, 242, 116,0.3)',
    },
    {
      borderColor: '#3A3EA3',
      backgroundColor: 'rgba(58, 62, 163,0.3)',
    },
    {
      borderColor: '#FF3823',
      backgroundColor: 'rgba(255, 56, 35,0.3)',
    },
  ];
  lineChartLegend = false;
  lineChartType = 'line';

  constructor(private service: BackpackService) {}

  ngOnInit(): void {
    // this.getAdventures();
    this.getDate();
    this.getDailyIncomplete();
    this.getDailyComplete();
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
