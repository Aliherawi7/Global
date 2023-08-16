import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  date: Date = new Date();
  @Input() name: string = '';
  @Input() maxTemp: number = 0;
  @Input() windSpeed: number = 0;
  @Input() humidity: number = 0;
  // Get the day name
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayName = this.dayNames[this.date.getDay()];
  dateNumber = this.date.getDate()

  // Get the month name
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthName = this.monthNames[this.date.getMonth()];



}
