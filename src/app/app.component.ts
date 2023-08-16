import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state/state';
import { selectIsDark, selectTheme } from './state/reducers/ThemeReducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Schooler';
  theme: String = "theme-pink-blue-gray"
  isDark: boolean = true


  constructor(private store: Store<State>) {
    this.store.select(selectIsDark).subscribe((isDark: boolean) => {
      this.isDark = isDark
    })
    console.log(this.isDark)
    this.store.select(selectTheme).subscribe((theme: String) => {
      this.theme = theme;
    })
    console.log(this.theme)
  }



}
