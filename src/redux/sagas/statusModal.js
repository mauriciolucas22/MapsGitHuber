import api from 'services/api';
import { put } from 'redux-saga/effects';
import { Types } from 'redux/ducks/modalVisible';

/**
 * Middleware redux
 * Chamado quando um reducer SEARCH é recebido no saga
 * 
 * action recebe o playload da ActionCreator modalVisible->enableModalVisible
 */
export function* changeModalVisible(action) {
  // Salva no AsyncStorage um playload com renponse da api
  yield put({
    type: action.playload.status === true ? Types.ENABLE : Types.DISABLE,
    playload: { 
      status: action.playload.status,
    }
  });
}