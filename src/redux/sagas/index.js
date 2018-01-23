import { takeLatest } from 'redux-saga/effects';

import { searchAndAddUser } from 'redux/sagas/user';

export default function* root() {
  yield [
    takeLatest('SEARCH_USER', searchAndAddUser)
  ];
}