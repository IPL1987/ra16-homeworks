import {
  take,
  takeLatest,
  put,
  spawn,
  retry,
  fork,
  delay,
} from "redux-saga/effects";
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
  resetSkills,
} from "../actions/acnionsCreate";
import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
} from "../actions/actionsType";
import { searchSkills } from "../api/api";

// worker
function* handleChangeSearchSaga(action) {
  yield delay(500);
  yield put(searchSkillsRequest(action.payload.search));
}

// worker
function* handleResetSkillsSaga() {
  yield put(resetSkills());
}

// watcher
function* watchChangeSearchSaga() {
  while (true) {
    const action = yield take(CHANGE_SEARCH_FIELD);
    if (action.payload.search.trim() === "") {
      yield fork(handleResetSkillsSaga);
    } else {
      yield fork(handleChangeSearchSaga, action);
    }
  }
}

// worker
function* handleSearchSkillsSaga(action) {
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000; // ms
    const data = yield retry(
      retryCount,
      retryDelay,
      searchSkills,
      action.payload.search
    );
    yield put(searchSkillsSuccess(data));
  } catch (e) {
    yield put(searchSkillsFailure(e.message));
  }
}

// watcher
function* watchSearchSkillsSaga() {
  yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
}