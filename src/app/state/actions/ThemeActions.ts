import { createAction, props } from '@ngrx/store';


export const setDarkMode = createAction(
    '[attendace] dark mode',
    props<{ isDark: boolean }>()
);

export const updateTheme = createAction(
    '[attendace] update Theme',
    props<{ theme: String }>()
);


