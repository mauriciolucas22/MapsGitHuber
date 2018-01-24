import api from 'services/api';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.playload.userName}`);

  yield put({
    type: 'ADD_USER',
    playload: { user: response.data }
  });
}