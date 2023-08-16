import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { City } from 'src/app/Types/City';
import { Weather } from 'src/app/Types/Weather';
import { CitiesService } from 'src/app/services/cities.service';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  continentsFormControl = new FormControl('');
  autoCompleteSearch = new FormControl<string>('')
  searchInput: string = ""
  city: City | null = null;
  weather: Weather | null = null;
  continents: Array<String> = ['Asia', 'Africa', 'Europe', 'North America', 'Oceania', 'South America', 'Antarctica',]
  isNotLoaded: boolean = false;
  notFound: boolean = false;

  constructor(private coutriesService: CitiesService) {
    console.log(this.city)
  }





  onChange(event: any) {
    console.log('Selected Toppings (onChange event):', event.value);
  }

  searchCity() {
    if (this.searchInput.length == 0) {
      return
    }
    this.isNotLoaded = true;
    this.coutriesService.getCities(this.searchInput).subscribe(item => {
      this.city = item[0];
      if (item.length == 0) {
        this.notFound = true
      }
      this.isNotLoaded = false
    })
    this.coutriesService.getWeather(this.searchInput).subscribe(item => {
      this.weather = item;
      console.log(this.weather)
    })
  }

  searchInputChange(event: KeyboardEvent) {
    this.city = null
    this.notFound = false;
    if (event.key == "Enter") {
      this.searchCity()
    }
  }
}

