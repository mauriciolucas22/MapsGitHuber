import api from 'services/api';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.playload.userName}`);

  // Salva no AsyncStorage um playload com renponse da api
  yield put({
    type: 'ADD_USER',
    playload: { 
      user: {
        coordinate: action.playload.coordinate,
        data: response.data,
      }
    }
  });
}