import { Todo } from "./todo/model/todo.model";
import { ActionReducerMap } from '@ngrx/store';
import * as fromReducer from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';




export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromReducer.todoReducer,
    filtro: fromFiltro.filtroReducer
}