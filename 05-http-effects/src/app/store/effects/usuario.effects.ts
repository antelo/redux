import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) {}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType( usuarioActions.CARGAR_USUARIO ),
        switchMap(action => {
            const id = action['id'];
            return this.usuarioService.getUserById(id).pipe(
                map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
            );
        })
    )

}