import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import APIEndpoints from '../Constants/APIEndpoints';
import { Country } from '../Types/Country';
import { Observable, map, of } from "rxjs"
import { CountryShortInfo } from '../Types/CountryShortInfo';
import { Statistics } from '../Types/Statistics';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  originalObject: Array<any> = [];
  countries: Observable<CountryShortInfo[]>;


  constructor(private http: HttpClient) {
    this.countries = this.getCountries()
  }


  getCountries(): Observable<CountryShortInfo[]> {
    return this.http.get<Array<any>>(APIEndpoints.root).pipe(
      map((items) => {
        let container: Array<CountryShortInfo> = [];
        items.forEach((item) => {
          container.push(this.convertToCountryShortInfo(item));
        });
        this.originalObject = items;
        return container;
      })
    );
  }
  getCountriesWithDetails(): Observable<Country[]> {
    return this.http.get<Array<any>>(APIEndpoints.root).pipe(
      map((items) => {
        let container: Array<Country> = [];
        items.forEach((item) => {
          container.push(this.convertToCountry(item));
        });
        this.originalObject = items;
        return container;
      })
    );
  }

  getCountryByName(name: string): Observable<Country> {
    return this.http.get<Array<any>>(APIEndpoints.search.byName(name)).pipe(
      map((item) => {
        return this.convertToCountry(item[0])
      })
    );
  }

  convertToCountryShortInfo(object: any): CountryShortInfo {
    const country: CountryShortInfo = {
      commonName: object.name.common,
      officialName: object.name.official,
      capital: object.capital?.join(", "),
      continents: object.continents?.join(", "),
      flag: object.flags.png,
      population: object.population,
    }
    return country;
  }
  convertToCountry(object: any): Country {
    // console.log(Object.values(object?.currencies[0]))
    const country: Country = {
      commonName: object.name?.common,
      officialName: object.name?.official,
      capital: object.capital?.join(", "),
      continents: object.continents?.join(", "),
      flags: object.flags,
      population: object.population,
      borders: object.borders,
      coatOfArms: object.coatOfArms,
      currencies: object?.currencies && (Object.values(object?.currencies)[0] as { name: string }).name,
      maps: object.maps,
      startOfWeek: object.startOfWeek,
      timezones: object.timezones,
      area: object.area,
      languages: object?.languages && Object.values(object.languages).join(", "),
      unMember: object.unMember,
      drivingSide: object.car.side
    }
    return country;
  }


  getTop10DenselyPopulatedCountries(countries: Array<Country>): Array<Country> {
    let sortedCountries = new Array<Country>;
    sortedCountries = [...countries]
    sortedCountries.sort((a, b) => b.population - a.population);
    return sortedCountries.slice(0, 5);
  }

  getTop5BigCountries(countries: Array<Country>): Array<Country> {
    let sortedCountries = new Array<Country>;
    sortedCountries = [...countries]
    sortedCountries.sort((a, b) => b.area - a.area);
    return sortedCountries.slice(0, 5);
  }

  getStatistics(countries: Array<Country>): Statistics {
    const statistics: Statistics = {
      totalAll: this.originalObject.length,
      totalIndependent: this.getTotalIndependentCountries(countries),
      totalDependent: this.originalObject.length - this.getTotalIndependentCountries(countries)
    }
    return statistics;
  }

  getTotalIndependentCountries(countries: Array<Country>): number {
    return this.originalObject.filter(item => item.independent == true).length
  }
}

