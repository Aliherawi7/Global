import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable, map, filter, of } from "rxjs"
import { CountryShortInfo } from 'src/app/Types/CountryShortInfo';
import { FormControl } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  isLoaded: boolean = false;
  continentsFormControl = new FormControl('');
  autoCompleteSearch = new FormControl<string>('')
  searchInput: String = ""
  countries: CountryShortInfo[] = [];
  continents: Array<String> = ['Asia', 'Africa', 'Europe', 'North America', 'Oceania', 'South America', 'Antarctica',]
  originalContent: CountryShortInfo[] = [];
  filteredOptions: string[] = [];
  options: string[] = [];
  constructor(private coutriesService: CountriesService) {
    this.coutriesService.getCountries().subscribe(items => {
      this.countries = items
      this.originalContent = items
      this.filteredOptions = this.originalContent.map(item => item.commonName)
      this.options = this.originalContent.map(item => item.commonName)
      this.isLoaded = true
    })
  }


  ngOnInit() {
    this.continentsFormControl.valueChanges.subscribe((value) => {
      this.countries = this.originalContent.filter(item => {
        const continents = item.continents.split(",")
        let res = false
        if (value != null) {
          const selectedContinents = [...value]
          res = selectedContinents.some(element => continents.includes(element));
        }
        return res;
      })
      console.log(this.countries)

    });
    this.autoCompleteSearch.valueChanges.subscribe(value => {
      this.filteredOptions = this.options.filter(item => {
        return item.toLowerCase().includes(value?.toLowerCase() as string)
      })
      this.countries = this.originalContent.filter(item => item.commonName.toLowerCase().includes(value?.toLowerCase() as string))
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onChange(event: any) {
    console.log('Selected Toppings (onChange event):', event.value);
  }

}
