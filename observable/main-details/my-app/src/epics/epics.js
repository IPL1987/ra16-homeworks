import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import {
  FETCH_SERVICES_REQUEST,
  GET_SERVICE_REQUEST,
} from "../actions/actionsType";
import {
  fetchServicesSuccess,
  fetchServicesFailure,
  getServiceSuccess,
  getServiceFailure,
} from "../actions/actioncCreate";
import { of } from "rxjs";

export const fetchServicesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    mergeMap(() =>
      ajax.getJSON(`${'http://localhost:7070/api/services'}`).pipe(
        map((response) => fetchServicesSuccess(response)),
        catchError((e) => of(fetchServicesFailure(e.message)))
      )
    )
  );

export const getServiceEpic = (action$) =>
  action$.pipe(
    ofType(GET_SERVICE_REQUEST),
    mergeMap((action) =>
      ajax.getJSON(`${'http://locahost:7070/api/services/:id'}/${action.payload.id}`)
        .pipe(
          map((response) => getServiceSuccess(response)),
          catchError((e) => of(getServiceFailure(e.message)))
        )
    )
  );