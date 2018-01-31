import { takeLatest } from 'redux-saga/effects';

import { searchAndAddUser } from 'redux/sagas/user';

import { Types as newUserTypes } from 'redux/ducks/newUser';

export default function* root() {
  yield [
    takeLatest(newUserTypes.SEARCH, searchAndAddUser)
  ];
}