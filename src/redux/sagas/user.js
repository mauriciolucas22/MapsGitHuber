import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types } from 'redux/ducks/newUser';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.playload.userName}`);

  if(response.status !== 200) return ;

  // Salva no AsyncStorage um playload com renponse da api
  yield put({
    type: Types.ADD,
    playload: { 
      id: response.data.id,
        coordinate: action.playload.coordinate,
        data: {
          login: response.data.login,
          avatar_url: response.data.avatar_url,
          bio: response.data.bio,
        }
    }
  });
}