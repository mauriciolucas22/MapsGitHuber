import api from 'services/api';
import { call, put } from 'redux-saga';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.playlod.userName}`);

  yield put({
    type: 'ADD_USER',
    playlod: { user: response.data }
  });
}