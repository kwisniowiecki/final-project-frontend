import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackpackService {
  url: string = `http://localhost:3000`;
  adventures: any[] = [];
  date: any;
  mm: any;
  dd: any;
  yyyy: any;
  months: any = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  constructedDate: any;
  constructor(private http: HttpClient) {}

  getAdventures = () => {
    return this.http.get(`${this.url}/adventures`);
  };

  // getChartData = () => {
  //   return this.http.get(`${this.url}/adventures/charts`);
  // };

  getDailyComplete = () => {
    return this.http.get(`${this.url}/adventures/dailycomplete`);
  };

  getComplete = () => {
    return this.http.get(`${this.url}/adventures/complete`);
  };

  getDailyIncomplete = () => {
    return this.http.get(`${this.url}/adventures/dailyincomplete`);
  };

  getIncomplete = () => {
    return this.http.get(`${this.url}/adventures/incomplete`);
  };

  getDate = () => {
    this.date = new Date();
    this.yyyy = this.date.getFullYear();
    this.mm = this.months[this.date.getMonth()];
    this.dd = this.date.getDate();
    return (this.constructedDate = `${this.mm}-${this.dd}-${this.yyyy}`);
  };
}
