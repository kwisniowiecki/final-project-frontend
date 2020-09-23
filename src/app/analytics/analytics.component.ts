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

  totalLineData: any = [];

  individualLineData: any = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Math' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Misc' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Reading' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Science' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Social Studies' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Writing' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions: ChartOptions | { annotation: any } = {
    responsive: true,
    
    layout: { padding: { left: 50, right: 50, top: 0, bottom: 0 } },
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
    this.getLineData();
    this.getDate();
    this.getDailyIncomplete();
    this.getDailyComplete();
    this.getComplete();
  }

  getDailyIncomplete = () => {
    this.service.getDailyIncomplete().subscribe((response) => {
      this.dailyIncomplete = response[0].count;
      console.log(response);
    });
  };

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

  getComplete = () => {
    this.service.getComplete().subscribe((response) => {
      this.completeArray = response;
      this.completeArray.forEach((item) => {
        this.overallChartData.push(item.count);
      });
      this.getIncomplete();
    });
  };

  getLineData = () => {
    this.service.getLineData().subscribe((response) => {
      console.log(response);
      this.totalLineData = response;
      let dayCounter: number = 0;
      let iterations: number = 0;
      let currentDate = this.totalLineData[0].date;
      console.log(currentDate);
      for (let i = 0; i < this.totalLineData.length; i++) {
        if (this.totalLineData[i].date !== currentDate) {
          dayCounter++;
          if (dayCounter === 10) {
            break;
          }
          this.lineChartLabels[9 - dayCounter] = this.totalLineData[i].date;
          let index: number = this.individualLineData.findIndex((item) => {
            return item.label === this.totalLineData[i].subject;
          });
          this.individualLineData[index].data[
            9 - dayCounter
          ] = this.totalLineData[i].totalMinutes;
          currentDate = this.totalLineData[i].date;
        } else {
          this.lineChartLabels[9 - dayCounter] = this.totalLineData[i].date;
          let index: number = this.individualLineData.findIndex((item) => {
            return item.label === this.totalLineData[i].subject;
          });
          this.individualLineData[index].data[
            9 - dayCounter
          ] = this.totalLineData[i].totalMinutes;
        }
      }
      console.log(iterations);
      console.log(this.individualLineData);
    });
  };
}
