import { Component } from '@angular/core';
import { Country } from 'src/app/Types/Country';
import { Statistics } from 'src/app/Types/Statistics';
import { Weather } from 'src/app/Types/Weather';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';
import { ChartOptions, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  statistics: Statistics = {} as Statistics;
  denselyPopulated: Array<Country> = []
  mostBiggestCountries: Array<Country> = []
  countries: Country[] = [];

  // Pie for top 5 most populated countries
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = this.denselyPopulated.map(item => item.commonName);
  public pieChartDatasets = [{
    data: this.denselyPopulated.map(item => item.population)
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];


  //  bar chart for top 5 biggest countries
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [40], label: '' },
    ]
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


  // PolarArea
  public polarAreaChartLabels: String[] = [''];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };


  // Doughnut
  public doughnutChartLabels: String[] = [''];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350], label: '' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };


  // pie chart for dependent and independent countries
  public pieChartLabelsForDependentAndIndependent = [''];
  public pieChartDatasetsForDependentAndIndependent = [{
    data: [0]
  }];



  constructor(private countriesService: CountriesService, private citiesService: CitiesService) {
    this.countriesService.getCountriesWithDetails().subscribe(items => {
      console.log(items)
      this.countries = items

      this.denselyPopulated = this.countriesService.getTop10DenselyPopulatedCountries(this.countries);
      this.pieChartLabels = this.denselyPopulated.map(item => item.commonName);
      this.pieChartDatasets = [{
        data: this.denselyPopulated.map(item => item.population)
      }];

      this.mostBiggestCountries = this.countriesService.getTop5BigCountries(this.countries);
      this.polarAreaChartLabels = this.mostBiggestCountries.map(item => item.commonName)
      this.polarAreaChartDatasets = [{
        data: this.mostBiggestCountries.map(item => item.area),
      }]

      this.doughnutChartLabels = this.mostBiggestCountries.map(item => item.commonName)
      this.doughnutChartDatasets = [{
        data: this.mostBiggestCountries.map(item => item.area),
      }]

      this.statistics = this.countriesService.getStatistics(this.countries);
      this.pieChartLabelsForDependentAndIndependent = ["Independent", "Dependent"]
      this.pieChartDatasetsForDependentAndIndependent = [{
        data: [this.statistics.totalIndependent, this.statistics.totalDependent]
      }]

    })

  }
}

interface CharData {
  data: Array<number>,
  label: string
}
