import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { CitiesComponent } from './components/cities/cities.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Hello World",
    pathMatch: "full",
    // canActivate: [authGuard]
  },
  {
    path: "countries",
    component: CountriesComponent,
    title: "Hello World: countries",
    pathMatch: "full",
    // canActivate: [authGuard]
  },
  {
    path: "countries/:name",
    component: CountryComponent,
    title: "{{name}}",
    pathMatch: "full",
    // canActivate: [authGuard]
  },
  {
    path: "cities",
    component: CitiesComponent,
    title: "Hello World: :name",
    pathMatch: "full",
    // canActivate: [authGuard]
  },
  {
    path: "quiz",
    component: QuizComponent,
    title: "Quiz",
    pathMatch: "full",
    // canActivate: [authGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    title: "About us",
    pathMatch: "full",
    // canActivate: [authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
