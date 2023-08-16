import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Types/Country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  country: Country = {} as Country
  name: string
  isNotLoadedFlag: boolean = true;
  isNotLoadedArm: boolean = true;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.countriesService.getCountryByName(this.name).subscribe(item => {
      this.country = item;
      console.log(item)
    })
  }


}
