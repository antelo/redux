import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as usuariosActions from '../actions';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) {}

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType( usuariosActions.CARGAR_USUARIOS ),
        switchMap(() => {
            return this.usuarioService.getUsers().pipe(
                map(users => new usuariosActions.CargarUsuariosSuccess(users)),
                catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
            );
        })
    )

}