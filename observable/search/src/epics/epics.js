import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  map,
  mergeMap,
  retry,
  debounceTime,
  switchMap,
  catchError,
} from "rxjs/operators";
import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
} from "../actions/actionsType";
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
  resetSkills,
} from "../actions/acnionsCreate";
import { of } from "rxjs";

export const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map((o) => o.payload.search.trim()),
    debounceTime(500),
    mergeMap((o) => {
      if (o === "") {
        return of(resetSkills());
      } else {
        return of(searchSkillsRequest(o));
      }
    })
  );

export const searchSkillsEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    map((o) => o.payload.search),
    map((o) => new URLSearchParams({ q: o })),
    switchMap((o) =>
      ajax.getJSON(`${'http://localhost:7070/api/search'}?${o}`).pipe(
        retry(3),
        map((o) => searchSkillsSuccess(o)),
        catchError((e) => of(searchSkillsFailure(e)))
      )
    )
  );