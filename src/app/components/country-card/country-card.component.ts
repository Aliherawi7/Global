import { Component, Input } from '@angular/core';
import { Country } from 'src/app/Types/Country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input() flag: String = ''
  @Input() name: String = ''
  @Input() capital: String = ''
  @Input() continents: String = ''
  @Input() population: number = 0




}
