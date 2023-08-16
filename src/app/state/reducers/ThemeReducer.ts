import { createReducer, createSelector, on } from '@ngrx/store';
import * as actions from '../actions/ThemeActions';
import { Action } from '@ngrx/store/src/models';
import { initialState, State } from '../state';


export const appReducer = createReducer(
    initialState,
    on(actions.setDarkMode, (state, { isDark }) => {
        return { ...state, isDark: isDark }
    }),
    on(actions.updateTheme, (state, { theme }) => ({ ...state, theme: theme })),
);

export function _appReducer(state: State, action: Action) {
    return appReducer(state, action);
}

export const selectIsDark = (state: State) => {
    return (Object.values(state)[0].isDark);
}
export const selectTheme = (state: State) => {
    return (Object.values(state)[0].theme);
}






