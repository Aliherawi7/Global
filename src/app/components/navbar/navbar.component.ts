import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/state';
import * as actions from '../../state/actions/ThemeActions'
import { selectIsDark } from 'src/app/state/reducers/ThemeReducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDark: boolean = false;

  constructor(private state: Store<State>) {
    this.state.select(selectIsDark).subscribe((isDark: boolean) => {
      this.isDark = isDark
    })
  }


  changeDarkMode() {
    this.isDark = !this.isDark
    this.state.dispatch(actions.setDarkMode({ isDark: this.isDark }))
    this.state.dispatch(actions.updateTheme({ theme: this.isDark ? "theme-pink-blue-gray" : "theme-purple-light" }))
  }

}
