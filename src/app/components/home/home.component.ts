import { Component } from '@angular/core';
import { Country } from 'src/app/Types/Country';
import { Statistics } from 'src/app/Types/Statistics';
import { Weather } from 'src/app/Types/Weather';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  statistics: Statistics = {} as Statistics;
  denselyPopulated: Array<Country> = []
  countries: Country[] = [];
  weather: Weather | null = null
  cityName: string = ''


  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = this.denselyPopulated.map(item => item.commonName);
  public pieChartDatasets = [{
    data: this.denselyPopulated.map(item => item.population)
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];



  constructor(private countriesService: CountriesService, private citiesService: CitiesService) {
    this.countriesService.getCountriesWithDetails().subscribe(items => {
      console.log(items)
      this.countries = items
      this.denselyPopulated = this.countriesService.getTop10DenselyPopulatedCountries(this.countries);
      this.pieChartLabels = this.denselyPopulated.map(item => item.commonName);
      this.pieChartDatasets = [{
        data: this.denselyPopulated.map(item => item.population)
      }];
      this.statistics = this.countriesService.getStatistics(this.countries);
    })
    this.citiesService.getCurrentCityWeather().subscribe(item => {
      this.weather = item;
    })

  }

}
