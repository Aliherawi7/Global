import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../app/state/reducers/ThemeReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountriesComponent } from './components/countries/countries.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CitiesComponent } from './components/cities/cities.component';
import { AboutComponent } from './components/about/about.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NgChartsModule } from 'ng2-charts';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    SearchBoxComponent,
    CountryComponent,
    CountryCardComponent,
    CitiesComponent,
    AboutComponent,
    QuizComponent,
    WeatherComponent,
    StatisticsComponent,

  ],
  imports: [
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    BrowserModule,
    AsyncPipe,
    AppRoutingModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ state: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
