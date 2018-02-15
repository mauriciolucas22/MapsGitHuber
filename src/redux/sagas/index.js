import { takeLatest } from 'redux-saga/effects';

import { searchAndAddUser } from 'redux/sagas/user';
import{ changeModalVisible } from 'redux/sagas/statusModal';

// Reducer newUser
import { Types as newUserTypes } from 'redux/ducks/newUser';
import { Types as modalTypes} from 'redux/ducks/modalVisible';

/**
 * Se o reducer de newUser receber um tipo SEARCH: 'newUser/SEARCH',
 * então ele chama a função generator searchAndAddUser de redux/sagas/user
 */
export default function* root() {
  yield [
    takeLatest(newUserTypes.SEARCH, searchAndAddUser),
    takeLatest(modalTypes.ENABLE, changeModalVisible)
  ];
}